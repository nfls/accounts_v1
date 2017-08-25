/**
 * Created by hqy on 2017/8/24.
 */
var session = "";
$.ajax({
    type: "GET",
    url: "https://api.nfls.io/student/info",
    xhrFields: {
        withCredentials: true
    },
    dataType: "json",
    success: function (message) {
        $("#list").empty();
        if(message.code == 200 ){
            $("#info").text(message.info);
        } else {
            $("#info").text("服务器异常，请稍候再试");
        }
    }
});
loadCaptcha();
function loadCaptcha(){
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/nameQueryCaptcha",
        success: function (message){
            document.getElementById('captcha').setAttribute( 'src', message["info"]["captcha"] );
            session = message["info"]["session"];
        }
    })
}
function submit(){
    var name = document.getElementById("name").value;
    var captcha = document.getElementById("captcha_text").value;
    if(name != "" && captcha != ""){
        $.ajax({
            type: "POST",
            url: "https://api.nfls.io/student/query",
            xhrFields: {
                withCredentials: true
            },
            data: {
                name: name,
                session: session,
                captcha: captcha
            },
            dataType: "json",
            success: function (message) {
                $("#list").empty();
                if(message.code == 200 ){
                    i = 0
                    $.each(message.info, function(index,value){
                        $("#list").append('<li class="collection-item">' + value + '</li>');
                        i++;
                    });
                    if(i>0)
                        $("#list").show();
                    else
                        $("#list").hide();
                    $("#message").text("查询成功！共 "+i+"条结果。");
                } else {
                    $("#message").text(message.info);
                    $("#list").hide();
                }
                loadCaptcha();
                $("#captcha_text").val("");
            }
        })
    } else {
        $("#message").text("请填写所有的字段！");
    }

}