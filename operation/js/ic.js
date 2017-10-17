function submitForm() {
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
            if (message.info == true) {
                $this.addClass('ok');
                $state.html('发送成功，请检查您的短信收件箱');
                setTimeout(function () {
                    $this.removeClass('ok loading');
                    $state.html("提交");
                    grecaptcha.reset();
                    step = 2;
                    $("#code_region").show();
                }, 2000);

            }
            else {
                $this.addClass('error');
                $state.html("无效手机号或人机验证码！");
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("Submit");
                    grecaptcha.reset();
                }, 1000);
            }

        },
        error: function (message) {
            $this.addClass('error');
                $state.html("无效手机号或人机验证码！");
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("Submit");
                    grecaptcha.reset();
                }, 1000);
        }
    });
}
