function submitRegister() {
    var pass = document.getElementById("password").value;
    var user = document.getElementById("username").value;
    var passchk = document.getElementById("password-repeat").value;
    var email = document.getElementById("email").value;
    if (pass != passchk) {
        window.alert("密码不一致!");
        return;
    }
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/user/register",
        data: {
            username: user,
            password: pass,
            email: email
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