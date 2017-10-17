var working = false;
function submitRegister() {
    var pass = document.getElementById("password").value;
    var user = document.getElementById("username").value;
    var passchk = document.getElementById("password-repeat").value;
    var email = document.getElementById("email").value;
    var captcha = grecaptcha.getResponse();
    if (pass != passchk) {
        window.alert("密码不一致!");
        return;
    }
    var $this = $('.login'),
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
            captcha: captcha
        },
        dataType: "json",
        success: function (message) {
            if (message.info.status == "success") {
                $this.addClass('ok');
                $state.html('Register succeeded! You can login now.');
                setTimeout(function () {
                    window.location.href = "index.php?action=login";
                }, 2000);

            }
            else {
                $this.addClass('error');
                $state.html(message.info.message);
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("Register");
                    grecaptcha.reset();
                }, 1000);

            }

        },
        error: function (message) {
            $state.html('Log in');
            $this.removeClass('ok loading');
            working = false;
            alert("Server error, please try again.");
            window.location.href = "index.php?action=register";
        }
    });


}