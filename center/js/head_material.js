if(window.location.host != "login.nfls.io"){

}
else {

    if ($.cookie("token") == null || $.cookie("flarum_remember") == null)
        logout();
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav({
            menuWidth: 250, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        }
    );
    getData();
}
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

    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/wikiInfo",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        success: function (message) {
            //var json_mes=$.parseJSON(message)
            if (message.status == "succeed") {
                if (message.id == 200) {
                    if ($.cookie("nfls_wiki_wiki_Token") == null || $.cookie("nfls_wiki_wiki_UserID") == null || $.cookie("nfls_wiki_wiki_UserName") == null)
                        logout();
                }
            }
            else {

            }

        },
        error: function (message) {
        }
    });

    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/shareInfo",
        xhrFields: {
            withCredentials: true
        },
        dataType: "json",
        success: function (message) {
            if (message.status == "succeed") {
                if (message.id == 200) {
                    if ($.cookie("c_secure_login") == null || $.cookie("c_secure_pass") == null || $.cookie("c_secure_ssl") == null || $.cookie("c_secure_tracker_ssl") == null)
                        logout();
                }
            }
            else {

            }

        },
        error: function (message) {
        }
    });
    //setTimeout("getData()",50);
}

function logout() {
    $.cookie('token', '', {path: '/', domain: 'nfls.io', secure: true, expires: -1});
    window.location.href='https://nfls.io/quickaction.php?action=logout&noreturn=true';
    //alert("!1");
}
