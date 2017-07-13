var working = false;
var session = "";
loadCaptcha()
$('.login').on('submit', function (e) {
    var pass = document.getElementById("password").value;
    var user = document.getElementById("username").value;
    var captcha = document.getElementById("captcha").value;
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
                    document.cookie = "token=" + message.info + ";" + "expires=" + date.toUTCString() + 30 * 24 * 60 * 60 * 1000 + ";" + "domain=" + "nfls.io" + "; secure; path=/";
                    LoginAssociate(user, pass);
                    $this.addClass('ok');
                    $state.html('Welcome back!');
                    setTimeout(function () {
                        if (returnurl == "")
                            window.location.href = "https://nfls.io/quickaction.php?action=refreshwiki";
                        else
                            window.location.href = "https://nfls.io/quickaction.php?action=refreshwiki&return=" + encodeURI(returnurl);
                    }, 1000);
                } else {
                    $this.addClass('error');
                    $state.html(message.info.message);
                    setTimeout(function () {
                        window.location.href = "index.php";
                    }, 3000);
                }

            }
            else {
                $this.addClass('error');
                $state.html(message.message);
                setTimeout(function () {
                    window.location.href = "index.php";
                }, 3000);

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

function LoginAssociate(user, pass) {
    $.ajax({
        type: "GET",
        async: false,
        url: "https://api.nfls.io/center/wikiLogin",
        xhrFields: {
            withCredentials: true
        },
        dataType: "json",
        success: function (message) {
            try {
                var cookie = message.info
                for (var i in cookie) {
                    var ncookie = String(message.info[i]);
                    ncookie = ncookie.substr(0, ncookie.length - 8);
                    document.cookie = ncookie;
                }
            }
            catch (err) {

            }
        },
        error: function (message) {
        }
    });
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    //$("#wikilogin").attr({"disabled":"disabled"});
    $.ajax({
        type: "GET",
        async: false,
        url: "https://api.nfls.io/center/shareLogin",
        xhrFields: {
            withCredentials: true
        },
        dataType: "json",
        success: function (message) {
            try {
                var cookie = message.info;
                for (var i in cookie) {
                    var ncookie = message.info[i];
                    document.cookie = i + "=" + message[i] + ";" + "expires=" + date.toUTCString() + ";" + "domain=" + "nfls.io" + "; secure; path=/";

                }
            }
            catch (err) {
            }

        },
        error: function (message) {
        }
    });

    $.ajax({
        type: "POST",
        async: false,
        url: "https://api.nfls.io/center/forumLogin",
        data: {
            username: user,
            password: pass,
        },
        xhrFields: {
            withCredentials: true
        },
        dataType: "json",
        success: function (message) {
            var cookie = message.info;
            for (var i in cookie) {
                var ncookie = String(message.info[i]);
                ncookie = ncookie.substr(0, ncookie.length - 8);
                if (i == 0)
                    ncookie = ncookie + "domain=nfls.io ;expires=" + date.toUTCString() + ";";
                console.log(ncookie);
                document.cookie = ncookie;

            }
        },
        error: function (message) {
        }
    });


}