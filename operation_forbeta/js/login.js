function submitLogin()  {
    var pass = document.getElementById("password").value;
    var user = document.getElementById("username").value;
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/center/login",
        data: {
            username: user,
            password: pass
        },
        dataType: "json",
        success: function (message) {
            console.log(message);

        },
        error: function (message) {
            console.log(message);
        }
    });


}