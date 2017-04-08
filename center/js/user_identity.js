/**
 * Created by hqy on 2017/4/8.
 */
$url="http://v1.dev";
/*
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
*/
gotoStep(1);
function gotoStep($step) {
    switch($step){
        case 1:
            $('#step1').show(2000);
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