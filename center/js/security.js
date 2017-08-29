/**
 * Created by hqy on 2017/8/25.
 */
get2fakey();
$("#enable_zone").hide();
getCardCount();
function edit()
{
    window.location.href="https://forum.nfls.io/settings";
}
function get2fakey(){
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/get2faKey",
        xhrFields: {
            withCredentials: true
        },
        success: function (message){
            document.getElementById('2fa_barcode').setAttribute( 'src', message["info"]["img"] );
            $("#key_2fa").val(message["info"]["code"]).change();
            $("#enable_zone").show();
        },
        error: function (message) {
            $("#result").text("您已经开启了二次认证。");
        }
    })
}
function changeToken(){
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/regenToken",
        xhrFields: {
            withCredentials: true
        },
        success: function (message) {
            location.reload();
        }
    })
}
function changeUsername(){
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/center/rename",
        data: {
            name: $("#username").val()
        },
        xhrFields: {
            withCredentials: true
        },
        success: function (message){
            location.reload();
        },
        error: function (message) {
            location.reload();
        }
    })
}
function enable2fa(){
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/center/enable2fa",
        data: {
            key: $("#key_2fa").val(),
            code: $("#code_2fa").val()
        },
        xhrFields: {
            withCredentials: true
        },
        success: function (message){
            $("#result").text("开启成功！");
        },
        error: function (message) {
            $("#result").text("开启失败！请重新输入再试。");
        }
    })
}
function getCardCount(){
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/card",
        xhrFields: {
            withCredentials: true
        },
        success: function (message) {
            $("#info").text("提示：您当前共有 " + message.info.rename_cards + "张改名卡");
        }
    })
}