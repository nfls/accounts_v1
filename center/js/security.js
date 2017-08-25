/**
 * Created by hqy on 2017/8/25.
 */
loadCaptcha();
get2fakey();
$("#enable_zone").hide();
function loadCaptcha(){
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/recoverCaptcha",
        success: function (message){
            document.getElementById('captcha_password').setAttribute( 'src', message["info"]["captcha"] );
            session = message["info"]["session"];
        }
    })
}
function get2fakey(){
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/get2faKey",
        xhrFields: {
            withCredentials: true
        },
        success: function (message){
            if(message.code == 200){
                document.getElementById('2fa_barcode').setAttribute( 'src', message["info"]["img"] );
                $("#key_2fa").val(message["info"]["code"]).change();
                $("#enable_zone").show();
            } else {
                $("#enable_zone").hide();
            }

        }
    })
}