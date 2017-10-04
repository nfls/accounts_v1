var working = false;
function submitRecover() {
    var response = grecaptcha.getResponse();
    var email = document.getElementById("email").value;
    if (working) return;
    working = true;
    var $this = $(this),
        $state = $this.find('button > .state');
    $this.addClass('loading');
    $state.html('Authenticating');

    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/center/recover",
        data: {
            email: email,
            captcha: response
        },
        dataType: "json",
        success: function (message) {
            /*
            if (message.info.status == "success") {
                $this.addClass('ok');
                $state.html('密码恢复邮件已发送至您的邮箱。');
                setTimeout(function () {
                    window.location.href = "index.php?action=login";
                }, 2000);
            }
            else {
                $this.addClass('error');
                $state.html('没有账户与此邮箱关联。');
                setTimeout(function () {
                    window.location.href = "index.php?action=forget";
                }, 1000);

            }
            */

        },
        error: function (message) {
            $state.html('Log in');
            $this.removeClass('ok loading');
            working = false;
            alert("请求错误，请稍后再试！");
            //window.location.href = "index.php?action=login";
        }
    });


}