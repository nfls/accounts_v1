if (window.location.host == "center.nfls.io" || window.location.host == "login.nfls.io") {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-92193639-8', 'auto');
    ga('send', 'pageview');
    if ($.cookie("token") == null)
        logout();
}
getData();

$(".button-collapse").sideNav();
$('.collapsible').collapsible();
$('.button-collapse').sideNav({
        menuWidth: 250, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    }
);


function getData() {
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/avatar",
        xhrFields: {
            withCredentials: true
        },
        dataType: "json",
        success: function (message) {
            //var json_mes=$.parseJSON(message)
            if (message.status == "succeed") {
                //alert(message);
                document.getElementById("avatar").src = message.info.url;
                //document.getElementById("avatar_2").src = message.url;
            }
            else {
                logout();
            }

        },
        error: function (message) {
            logout();
        }
    });

    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/username",
        xhrFields: {
            withCredentials: true
        },
        dataType: "json",
        success: function (message) {
            //var json_mes=$.parseJSON(message)
            if (message.status == "succeed") {
                //alert(message);
                document.getElementById("user_name").innerHTML = message.info;
            }

        },
    });

}

function logout() {
    $.cookie('token', '', {path: '/', domain: 'nfls.io', secure: true, expires: -1});
    window.location.href = 'https://nfls.io/quickaction.php?action=logout&noreturn=true';
    //alert("!1");
}
