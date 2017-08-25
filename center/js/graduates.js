/**
 * Created by hqy on 2017/8/24.
 */
var session = "";
var last_name = "";
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
loadlist();
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
function loadlist() {
    $("#added_list").empty();
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/student/list",
        xhrFields: {
            withCredentials: true
        },
        success: function (message){
            $("#added_list").empty();
            if(message.code == 200 ){
                i = 0;
                $.each(message.info, function(index,value){
                    $("#added_list").append('<li onclick="deselectItem(' + value.id + ')" class="collection-item">' + value.name + '</li>');
                    i++;
                });
                $("#added").text("您当前添加的记录有 " + i + "条（单击可删除）")
                if(i>0)
                    $("#added_list").show();
                else
                    $("#added_list").hide();
            } else {
                $("#added_list").hide();
            }
        }
    })
}
function selectItem(index){
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/student/use",
        xhrFields: {
            withCredentials: true
        },
        data: {
            name: last_name,
            id: index
        },
        dataType: "json",
        success: function (message) {
            if(message.code == 200){
                $("#message").text('已将"' + $("#class_" + index).html() + '"的记录添加到您的名下。');
                $("#class_" + index).hide();
                loadlist();
            } else {
                $("#message").text('"' + $("#class_" + index).html() + '"记录添加失败。');
            }

        }
    });
}
function deselectItem(index){
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/student/unuse",
        xhrFields: {
            withCredentials: true
        },
        data: {
            id: index
        },
        dataType: "json",
        success: function (message) {
            if(message.code == 200){
                $("#message").text("删除成功。");
                loadlist();
            } else {
                $("#message").text("删除失败。");
            }

        }
    });
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
                    i = 0;
                    $.each(message.info, function(index,value){
                        $("#list").append('<li id="class_' + value.id +'"onclick="selectItem(' + value.id + ')" class="collection-item">' + value.name + '</li>');
                        i++;
                    });
                    if(i>0)
                        $("#list").show();
                    else
                        $("#list").hide();
                    $("#message").text("查询成功！共 "+i+"条结果。单击该结果可将其的信息添加至自己的实名认证记录内。");
                    last_name = name;
                } else {
                    $("#message").text(message.info);
                    $("#list").hide();
                }
                loadCaptcha();
                $("#captcha_text").val("");
                loadlist();
            }
        })
    } else {
        $("#message").text("请填写所有的字段！");
    }

}