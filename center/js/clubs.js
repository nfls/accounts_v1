/**
 * Created by hqy on 2017/8/28.
 */

action = "";
current = 0;
count = 20;
now = 0;
loadInfo();
submit();
id = 0;
selected = [];
if(window.opener == null)
    $("#save").attr('disabled','disabled');
else
    $("#save").removeAttr('disabled');

function dataCheck(){
    if($("#club_name").val() == "" || $("#club_comments").val() == "")
        return false;
    return true;
}
function save(){
    if(window.opener != null){
        if(dataCheck()){
            saveInfo();
            window.opener.selectClub(selected);
            window.close();
        } else {
            saveInfo();
        }
    } else {
        $("#message").text("通讯错误！请重新使用实名认证中的相关表格中打开本页面！");
    }

}
function addToMyList(){
    if(window.opener != null){
        if(dataCheck()){
            saveInfo();
            selected.push(id);
            reloadMyList();
        } else {
            saveInfo();
        }
    } else {
        $("#message").text("通讯错误！请重新使用实名认证中的相关表格中打开本页面！");
    }
}
function reloadMyList(){
    $.uniqueSort(selected);
    $("#list_chosen").empty();
    $.each(selected,function(index,value){
        $.ajax({
            type: "POST",
            url: "https://api.nfls.io/club/get",
            xhrFields: {
                withCredentials: true
            },
            data: {
                id: value
            },
            dataType: "json",
            success: function (message) {
                $("#list_chosen").append('<li id="class_remove_' + value + '"onclick="removeItem(' + value + ')" class="collection-item">' + message.info.name + '</li>');
            }
        });
    })
}

function removeItem(value){
    index = selected.indexOf(value);
    if (index > -1) {
        selected.splice(index, 1);
    }
    reloadMyList();
}

function newClub(){
    action = "new";
    $("#club_name").val("").change();
    $("#club_comments").val("").change();
    $("#form1").show(1000);
    $('select').material_select();
    id = 0;
}
function loadInfo() {
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/club/intro",
        xhrFields: {
            withCredentials: true
        },
        dataType: "json",
        success: function (message) {
            $("#info").html(message.info);
        }
    });
}
function newQuery(){
    submit();
}
function submit() {
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/club/list",
        xhrFields: {
            withCredentials: true
        },
        data: {
            name: $("#name").val()
        },
        dataType: "json",
        success: function (message) {
            $("#list").empty();
            if (message.code == 200) {
                i = 0;
                $.each(message.info, function (index, value) {
                    $("#list").append('<li id="class_' + value.id + '"onclick="selectItem(' + value.id + ')" class="collection-item">' + value.name + '</li>');
                    i++;
                });
                now = i;
                if (i > 0){

                    $("#list").show();
                }
                else{
                    $("#list").hide();
                }
                $("#message").text("查询成功！当前显示共" + i + "条结果");
            } else {
                $("#list").hide();
            }
        }
    });
}
function updateForm(){
}

function selectItem(i){
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/club/get",
        xhrFields: {
            withCredentials: true
        },
        data: {
            id: i
        },
        dataType: "json",
        success: function (message) {
            $("#club_name").val(message.info.name).change();
            $("#club_comments").val(message.info.comment).change();
            $("#club_added_by").val(message.info.added_by).change();
            $("#form1").show(1000);
            $('select').material_select();
            action = "edit";
            id = i;
        }
    });
}

function saveInfo(){
    if(!dataCheck())
        $("#message").text("请填写社团的名称和备注等相关信息！");
    else
        $.ajax({
            type: "POST",
            url: "https://api.nfls.io/club/" + action,
            xhrFields: {
                withCredentials: true
            },
            data: {
                id: id,
                name: $("#club_name").val(),
                comment: $("#club_comments").val()
            },
            dataType: "json",
            success: function (message) {
                $("#message").text("更新成功！");
                if(action == "new"){
                    id = message.info.id;
                    action == "edit"
                }
                selectItem(id);

                $('select').material_select();
                action = "select";
            }
        });
}