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
                updateForm(message.info);
        },
        error: function (message) {
            serverError();
        }
    });
}
function submitInfo(step){
    var formInfo = new Array;
    $.each($('input', '#form'),function(k){
        formInfo[$(this).attr('id')]=$(this).val()
    });
    $.each($('select', '#form'),function(k){
        formInfo[$(this).attr('id')]=$(this).find("option:selected").attr("value");
    });
    formInfo.remove("undefined");
    console.log(formInfo);
    //console.log("")
    /*
    $("#form").each(
        function(index,element) {
            console.log(index);
            console.log(element);
        }
    );
    */
    /*
    $.ajax({
        type: "GET",
        url: url + "/alumni/auth/" + step + "/update",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (message) {
            showMessage(message.message);
            if (message.code == 200)
                updateForm(message.info);
        },
        error: function (message) {
            serverError();
        }
    });
    */
}
function gotoStep(step) {
    $("#previous").attr("disabled", "disabled");
    if (step >= 1 && step <= 4) {
        $('#step' + step).show(2000);
        queryInfo(step);
    }
    return 0;
}
function updateForm(message) {
    console.log(1);
    $.each(message,
        function (index, element) {
            $('#' + index).val(element);
        }
    );
}
function serverError() {
    showMessage("与服务器通讯出现故障，请检查您的网络或是刷新重试。如果错误反复出现，请与网站管理员联系");
}

function showMessage($message) {
    $("#serverinfo").text($message);
}