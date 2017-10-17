var working = false;
var step = 1;
function submitForm(){
    if(step == 1){
        submitPhone();
    }else{
        submitCode();
    }
}
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
function submitCode(){
    var phone = document.getElementById("phone").value;
    var code = document.getElementById("code").value;
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
            captcha: captcha,
            code: code
        },
        xhrFields: {
            withCredentials: true
        },
        dataType: "json",
        success: function (message) {
            if (message.info == true) {
                $this.addClass('ok');
                $state.html('绑定成功！请在下面的表格中填写您的班级信息');
                setTimeout(function () {
                    $this.removeClass('ok loading');
                    $state.html("Submit");
                    window.location.href = "ic.php";
                }, 2000);

            }
            else {
                $this.addClass('error');
                $state.html("无效六位码或人机验证码！");
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("Submit");
                    grecaptcha.reset();
                }, 1000);
            }

        },
        error: function (message) {
            $this.addClass('error');
                $state.html("无效六位码或人机验证码！");
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("Submit");
                    grecaptcha.reset();
                }, 1000);
        }
    });
}