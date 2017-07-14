var working = false;
var session = "";
loadCaptcha();
function loadCaptcha() {
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/registerCaptcha",
        success: function (message) {
            document.getElementById('captcha').setAttribute('src', message["info"]["captcha"]);
            session = message["info"]["session"];
        }
    })
}

$('.login').on('submit', function (e) {
    var pass = document.getElementById("password").value;
    var user = document.getElementById("username").value;
    var passchk = document.getElementById("password-repeat").value;
    var email = document.getElementById("email").value;
    var captcha = document.getElementById("captcha_text").value;
    e.preventDefault();
    if (pass != passchk) {
        window.alert("密码不一致!");
        return;
    }
    if (working) return;
    working = true;
    var $this = $(this),
        $state = $this.find('button > .state');
    $this.addClass('loading');
    $state.html('Registering');
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/center/register",
        data: {
            username: user,
            password: pass,
            email: email,
            session: session,
            captcha: captcha
        },
        dataType: "json",
        success: function (message) {
            if (message.info.status == "success") {
                $this.addClass('ok');
                $state.html('注册成功！请检查您邮箱内的确认邮件。');
                setTimeout(function () {
                    window.location.href = "https://center.nfls.io";
                }, 5000);

            }
            else {
                $this.addClass('error');
                $state.html(message.info.message);
                setTimeout(function () {
                    window.location.href = "index.php?action=register";
                }, 5000);

            }

        },
        error: function (message) {
            $state.html('Log in');
            $this.removeClass('ok loading');
            working = false;
            alert("请求错误，请稍后再试！");
            window.location.href = "index.php";
        }
    });


});