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
if(window.opener == null)
    $("#save").attr('disabled','disabled');
else
    $("#save").removeAttr('disabled');
function dataCheck(){
    var select = $('#school_country').val();
    if($("#school_shortName").val() == "" || $("#school_name").val() == "")
        return false;
    if(select != "CN"){
        if($("#school_chineseName").val() == "" || $("#school_chineseShortName").val() == "")
            return false;
    }
    return true;
}
function save(){
    if(window.opener != null){
        if(dataCheck()){
            saveInfo();
            window.opener.selectUni(id);
            window.close();
        } else {
            saveInfo();
        }
    } else {
        $("#message").text("通讯错误！请重新使用实名认证中的相关表格中打开本页面！");
    }

}
function newSchool(){
    action = "new";
    $("#school_name").val("").change();
    $("#school_name").prop('disabled', false);
    $("#school_shortName").val("").change();
    $("#school_chineseName").val("").change();
    $("#school_chineseShortName").val("").change();
    $("#school_comments").val("").change();
    $("#school_added_by").val("").change();
    $("#school_country").val("CN");
    $('#school_country option[value=CN]').attr('selected', 'selected').change();
    $("#form1").show(1000);
    $('select').material_select();
    id = 0;
}
function loadInfo() {
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/university/intro",
        xhrFields: {
            withCredentials: true
        },
        dataType: "json",
        success: function (message) {
            $("#info").html(message.info);
        }
    });
}
function previous(){
    if(current - count < 0){
        $("#message").text("已经是第一页了！");
    } else {
        current = current - count;
        submit();
    }
}
function next(){
    if(count > now){
        $("#message").text("已经是最后一页了！");
        console.log(now);
    } else {
        current = current + count;
        submit();
    }
}
function newQuery(){
    action = "";
    current = 0;
    count = 20;
    now = 0;
    submit();
}
function submit() {
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/university/list",
        xhrFields: {
            withCredentials: true
        },
        data: {
            name: $("#name").val(),
            startFrom: current
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
    var select = $('#school_country').val();
    if(select == "CN")
        $("#translation").hide(1000);
    else
        $("#translation").show(1000);
}

function selectItem(i){
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/university/get",
        xhrFields: {
            withCredentials: true
        },
        data: {
            id: i
        },
        dataType: "json",
        success: function (message) {
            $("#school_name").val(message.info.name).change();
            $("#school_name").prop('disabled', true);
            $("#school_shortName").val(message.info.shortName).change();
            $("#school_chineseName").val(message.info.chineseName).change();
            $("#school_chineseShortName").val(message.info.chineseShortName).change();
            $("#school_comments").val(message.info.comment).change();
            $("#school_added_by").val(message.info.added_by).change();
            $("#school_country").val(message.info.country);
            $('#school_country' + ' option[value=' + message.info.country + ']').attr('selected', 'selected').change();
            $("#form1").show(1000);
            $('select').material_select();
            action = "edit";
            id = i;
        }
    });
}
function saveInfo(){
    if(!dataCheck())
        $("#message").text("请填写大学的英文名，英文简称，中文名和中文简称等相关信息！");
    else
        $.ajax({
            type: "POST",
            url: "https://api.nfls.io/university/" + action,
            xhrFields: {
                withCredentials: true
            },
            data: {
                id: id,
                name: $("#school_name").val(),
                shortName: $("#school_shortName").val(),
                chineseName: $("#school_chineseName").val(),
                chineseShortName: $("#school_chineseShortName").val(),
                comment: $("#school_comments").val(),
                country: $("#school_country").find('option:selected').attr('value')
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