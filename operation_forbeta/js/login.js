function submitLogin()  {
    var pass = document.getElementById("password").value;
    var user = document.getElementById("username").value;
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/user/login",
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