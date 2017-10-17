var working = false;
function submitPhone() {
    var phone = document.getElementById("phone").value;
    var captcha = grecaptcha.getResponse();
    var $this = $('.login'),
        $state = $this.find('button > .state');
    $this.addClass('loading');
    $state.html('Submitting');
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/center/phone",
        data: {
            phone: phone,
            captcha: captcha
        },
        xhrFields: {
            withCredentials: true
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
            window.location.href = "phone.php";
        }
    });


}