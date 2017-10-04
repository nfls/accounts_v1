var working = false;
function submitRecover() {
    var response = grecaptcha.getResponse();
    var email = document.getElementById("email").value;
    if (working) return;
    working = true;
    var $this = $('.login'),
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
            if (message.info.status == "success") {
                $this.addClass('ok');
                $state.html('Password recovery email has sent to your email!');
                setTimeout(function () {
                    window.location.href = "index.php?action=login";
                }, 2000);
            }
            else {
                $this.addClass('error');
                $state.html('No account was associated with this address.');
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("Send Password Recovery Email");
                    grecaptcha.reset();
                }, 1000);

            }
        },
        error: function (message) {
            $state.html('Log in');
            $this.removeClass('ok loading');
            working = false;
            alert("Server error, please try again.");
            window.location.href = "index.php?action=forget";
        }
    });


}