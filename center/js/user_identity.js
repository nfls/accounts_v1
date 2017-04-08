/**
 * Created by hqy on 2017/4/8.
 */
var url="http://v1.dev";
$.ajax({
    type: "GET",
    url: url + "/alumni/auth/getCurrentStep",
    dataType: "json",
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    success: function (message) {
        //var json_mes=$.parseJSON(message)
        if(message.code==200)
        {
            gotoStep(message.step);
        }
        else
        {
            alert("aaa");
        }

    },
    error: function (message) {
        alert("aaa");
    }
});
function queryInfo(step) {
    $.ajax({
        type: "GET",
        url: url + "/alumni/auth/"+ step + "/query",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (message) {
            //var json_mes=$.parseJSON(message)
            if(message.code==200)
            {
                $('#username').val(message.nickname);
                $('#email').val(message.email);
                console.log(message);
                return message;
            }
            else
            {
                alert("aaa");
            }

        },
        error: function (message) {
            alert("aaa");
        }
    });
}
function gotoStep(step) {
    switch(step){
        case 1:
            $('#step1').show(2000);
            queryInfo(1);
            break;
        case 2:
            $('#step2').show(2000);
            break;
        case 3:
            $('#step3').show(2000);
            break;
        case 4:
            $('#step4').show(2000);
            break;
    }
    return 0;
}