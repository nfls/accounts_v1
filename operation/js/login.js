var working = false;
var session = "";
loadCaptcha();
$.ajax({
    type: "GET",
    url: "https://api.nfls.io/center/notice",
    dataType: "json",
    success: function (message) {
        if (message.status == "succeed") {
            if(message.info.allow == true){
                $("#login_frame").show();
                console.log("tes");
            }
            if(message.info.message != ""){
                $("#notice").html(message.info.message);
            } else {
                $("#notice").hide();
            }
        }
    }
});
$('.login').on('submit', function (e) {
    var pass = document.getElementById("password").value;
    var user = document.getElementById("username").value;
    var captcha = document.getElementById("captcha_text").value;
    var returnurl = document.getElementById("returnurl").value;
    e.preventDefault();
    if (working) return;
    working = true;
    var $this = $(this),
        $state = $this.find('button > .state');
    $this.addClass('loading');
    $state.html('Authenticating');
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/center/login",
        data: {
            username: user,
            password: pass,
            session: session,
            captcha: captcha
        },
        dataType: "json",
        success: function (message) {
            if (message.status == "succeed") {
                if(message.info.status == "success" ){
                    //document.cookie="token="+message.token;
                    var date = new Date();
                    //alert("token=" + message.token + ";" + "expires=" + date.getTime()+30*24*60*60*1000 + ";" + "domain=" + "nfls.io" + "; secure");
                    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
                    document.cookie = "token=" + message.info.token + ";" + "expires=" + date.toUTCString() + 30 * 24 * 60 * 60 * 1000 + ";" + "domain=" + "nfls.io" + "; secure; path=/";
                    $this.addClass('ok');
                    $state.html('Welcome back!');
                    setTimeout(function () {
                        if (returnurl == "")
                            window.location.href = "https://center.nfls.io/center/";
                        else
                            window.location.href = "https://api.nfls.io/redirect?to=" + encodeURIComponent(returnurl);
                    }, 500);
                } else {
                    $this.addClass('error');
                    $state.html(message.info.message);
                    setTimeout(function () {
                        window.location.href = "index.php?action=login&redir="+returnurl;
                    }, 1500);
                }

            }
            else {
                $this.addClass('error');
                $state.html(message.message);
                setTimeout(function () {
                    window.location.href = "index.php?action=login";
                }, 1500);

            }

        },
        error: function (message) {
            $state.html('Log in');
            $this.removeClass('ok loading');
            working = false;
            alert("请求错误，请稍后再试！");
            window.location.href = "index.php?action=login";
        }
    });


});

function loadCaptcha(){
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/loginCaptcha",
        success: function (message){
            document.getElementById('captcha').setAttribute( 'src', message["info"]["captcha"] );
            session = message["info"]["session"];
        }
    })
}