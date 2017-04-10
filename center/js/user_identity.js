/**
 * Created by hqy on 2017/4/8.
 */
var url = "http://v1.dev";
$.ajax({
    type: "GET",
    url: url + "/alumni/auth/getCurrentStep",
    dataType: "json",
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    success: function (message) {
        showMessage(message.message);
        if (message.code == 200) {
            gotoStep(message.step);
            updateInstruction(message.instructions);
        }

    },
    error: function (message) {
        showMessage("与服务器通讯出现故障，请检查您的网络或是刷新重试。如果错误反复出现，请与网站管理员联系");
    }
});
function queryInfo(step) {
    $.ajax({
        type: "GET",
        url: url + "/alumni/auth/" + step + "/query",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (message) {
            showMessage(message.message);
            if (message.code == 200)
            {
                updateForm(message.info);
            }

        },
        error: function (message) {
            serverError();
        }
    });
}
function submitInfo(step) {
    var formInfo = {};
    $.each($('input', '#form'), function (k) {
        if ($(this).attr('id') != null)
            formInfo[$(this).attr('id')] = $(this).val();
    });
    $.each($('select', '#form'), function (k) {
        if ($(this).attr('id') != null)
            formInfo[$(this).attr('id')] = $(this).find("option:selected").attr("value");
    });
    var jsonData = JSON.stringify(formInfo);
    $.ajax({
        type: "POST",
        url: url + "/alumni/auth/" + step + "/update",
        dataType: "json",
        data: jsonData,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (message) {
            var messageInfo = "";
            $.each(message.message,function(index,element)
            {
                messageInfo = messageInfo + element +"<br/>";
            });
            showMessage(messageInfo);
        },
        error: function (message) {
            serverError();
        }
    });
}
function gotoStep(step) {
    $("#previous").attr("disabled", "disabled");
    if (step >= 1 && step <= 4) {
        queryInfo(step);
        $('#step' + step).show(2000);

    }
    return 0;
}
function updateForm(message) {
    console.log(1);
    $.each(message,
        function (index, element) {
            $('#' + index).val(element);
            $('#' + index).focus();
        }
    );
}
function serverError() {
    showMessage("与服务器通讯出现故障，请检查您的网络或是刷新重试。如果错误反复出现，请与网站管理员联系");
}

function showMessage(message) {
    document.getElementById('serverinfo').innerHTML= message;
}
function updateInstruction(message){
    messageInfo = "";
    $.each(message,function(index,element)
    {
        messageInfo = messageInfo + (index + 1)+ ". " + element +"<br/>";
    });
    document.getElementById('tips').innerHTML= messageInfo;
}