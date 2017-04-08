/**
 * Created by hqy on 2017/4/8.
 */
$url="http://v1.dev";

$.ajax({
    type: "GET",
    url: $url + "/alumni/auth/getCurrentStep",
    dataType: "json",
    success: function (message) {
        //var json_mes=$.parseJSON(message)
        if(message.code==200)
        {
            goto(message.step);
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