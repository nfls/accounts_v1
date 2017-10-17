/**
 * Created by mmlmm on 2017/5/31.
 */
url = "https://api.nfls.io/";
initialize();
var offset = 0;
var on = true;
var fun = "new";
var id = 0;
function upload(){
    window.open("https://api.nfls.io/admin/uploads");
}
function getPermission(){
    $.ajax({
        type: "GET",
        url: url + "admin/message/permission",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        success: function (message) {
           $("#permission").text("当前权限：" + message.info);
        },
        error: function (message) {
            ///转跳
        }
    });
}
$("#filter").change(function(){
    initialize();
});
function initialize(){
    getPermission();
    document.getElementById("submit_user_list").innerHTML = '<tr><th>No.</th><th>接收人</th><th>版权说明</th><th>起始时间</th><th>终止时间</th><th>更新时间</th><th>操作</th></tr>';
    $.ajax({
        type: "GET",
        url: url + "admin/picture/get",
        dataType: "json",
        data:{
            startFrom: offset,
            place: $("#filter").val()
        },
        xhrFields: {
            withCredentials: true
        },
        success: function (message) {
            $.each(message.info, function (i, mes) {
                loadList(mes, i);
            });
            $("#place").change();
        },
        error: function (message) {
            ///转跳
        }
    });
}
function remove(){
    if(id!=0){
        $.ajax({
            type: "POST",
            url: url + "admin/picture/remove",
            dataType: "json",
            data:{
                id: self.id
            },
            xhrFields:{
                withCredentials: true
            },
            success: function (message) {
                if(message.code == 200){
                    initialize();
                    add();
                } else {
                    alert("修改失败，请检查您的权限。");
                }
            },
            error: function (message){
                alert("修改失败，请检查您的权限。");
            }
        });
    }else{
        alert("修改失败，请检查您的权限。");
    }

}
function loadList(mes, i) {
    if(mes["id"] == 1){
        on = false;
    }
    document.getElementById("submit_user_list").innerHTML += '<tr><th>' + mes["id"] + '</th>' + '<th>' + mes["receiver"] + '</th>' + '<th>' + mes["text"] + '</th>' + '<th>' + mes["start"] + '</th>' + '<th>' + mes["end"] + '<th>' + mes["time"] + '</th>' + '</th><th><button type="button" class="btn btn-default" onclick="loadDetail(' + mes["id"] + ')">编辑</button></th></tr>';
}
$("#place").change(function(){
    $("#site").val("none").change();
    switch($(this).val()){
        case "1":
        case "2":
            $("#site").show();
            $("#url").attr("placeholder","地址，请输入'*.nfls.io/'后面的内容，如d/26(论坛)");
            $("#img_div").hide();
            break;
        case "3":
            $("#site").hide();
            $("#url").attr("placeholder","请粘贴完整站内地址，https开头，客户端会自动识别");
            $("#img_div").show();
            break;
        default:
            break;
    }
});

function loadDetail(id){
    $.ajax({
        type: "POST",
        data:{
          id:id
        },
        url: url + "admin/picture/detail",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        success: function (message) {
            fun = "edit";
            $("#title").val(message.info.text).change();
            $("#time").val(message.info.time).change();
            $("#start").val(message.info.start).change();
            $("#end").val(message.info.end).change();
            $("#receiver").val(message.info.receiver).change();
            $("#url").val(message.info.url).change();
            self.id = id;
        },
        error: function (message) {
            ///转跳
        }
    });
}
function save(){
    $.ajax({
        type: "POST",
        data:{
            id:id,
            title:$("#title").val(),
            url:$("#url").val(),
            start:$("#start").val(),
            end:$("#end").val(),
            receiver:$("#receiver").val()
        },
        url: url + "admin/picture/save",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        success: function (message) {
            if(message.code != 200){
                alert("修改失败，请检查您的权限或者信息是否填写完整");
            } else {
                initialize();
                loadDetail(id);
            }
        },
        error: function(message){
            alert("修改失败，请检查您的权限或者信息是否填写完整");
        }
    });
}
function getLocation(id){
    switch(id){
        case 1:
            return "系统公告";
        case 2:
            return "系统推送";
        case 3:
            return "首页动态";
    }
}
function add(){
    fun = "new";
    id = 0;
    $("#title").val("");
    $("#detail").val("");
    $("#img").val("");
    $("#type").val("1").change();
    $("#place").val("1").change();
    $("#site").val("none").change();
    $("#url").val("").change();
    $("#time").val("");
    $("#groups").val("");
    $("#receiver").val("");
}
function previous(){
    on = true;
    offset = offset - 10;
    if(offset<0)
        offset = 0;
    initialize();
}
function next(){
    if(on){
        offset = offset + 10;
        initialize();
    }

}