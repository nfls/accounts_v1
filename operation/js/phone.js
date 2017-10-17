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
            if (message.info.status == true) {
                $this.addClass('ok');
                $state.html('Submit succeeded! Please check your inbox!');
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("Submit");
                    step = 2;
                    $("#code_region").show();
                }, 2000);

            }
            else {
                $this.addClass('error');
                $state.html("Invalid captcha or phone number!");
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("Submit");
                    grecaptcha.reset();
                }, 1000);
            }

        },
        error: function (message) {
            $this.addClass('error');
                $state.html("Invalid captcha or phone number!");
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
            if (message.info.status == true) {
                $this.addClass('ok');
                $state.html('Succeeded! You can continue using our services now.');
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("Submit");
                    window.location.href = "https://dl.nfls.io";
                }, 2000);

            }
            else {
                $this.addClass('error');
                $state.html("Invalid captcha or code!");
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("Submit");
                    grecaptcha.reset();
                }, 1000);
            }

        },
        error: function (message) {
            $this.addClass('error');
                $state.html("Invalid captcha or code!");
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("Submit");
                    grecaptcha.reset();
                }, 1000);
        }
    });
}