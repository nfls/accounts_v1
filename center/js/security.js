/**
 * Created by hqy on 2017/8/25.
 */
loadCaptcha();
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