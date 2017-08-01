/**
 * Created by mmlmm on 2017/5/31.
 */
url = "https://api.nfls.io/";
var ids = [];
initialize();
function initialize(){
    document.getElementById("submit_user_list").innerHTML//to=dol
    $.ajax({
        type: "GET",
        url: url + "admin/auth/list",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        success: function (message) {
            $.each(message, function (i, mes) {
                loadList(mes, i);
                ids.push(mes["id"]);
            });
            loadDetail(ids[0]);
        },
        error: function (message) {
            ///转跳
        }
    });
    $.ajax({
        type: "GET",
        url: url + "admin/auth/instructions",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        success: function (message) {
            $('#instructions').html(message);
        },
        error: function (message) {
            ///转跳
        }
    });
    functionChange(1);
}
function functionChange(i) {
    switch (i) {
        case 1:
            $('#user_other_info').hide();
            break;
    }
}
function loadList(mes, i) {
    document.getElementById("submit_user_list").innerHTML += '<tr><th>' + (i + 1).toString() + '</th>' + '<th>' + mes["id"] + '</th>' + '<th>' + mes["email"] + '</th>' + '<th>' + mes["realname"] + '</th>' + '<th>' + mes["submit_time"] + '</th><th><button type="button" class="btn btn-default" onclick="loadDetail(' + mes["id"] + ')">审核</button></th></tr>';
}
function loadDetail(id) {
    $.cookie("current_id",id, { path: "/" ,domain: "nfls.io"});
    $(this).closest('form').find("input[type=text], textarea").val("");
    $.each($('input', '#index_row'), function (k) {
        $(this).val("");
    });
    $.each($('textarea', '#index_row'), function (k) {
        $(this).val("");
    });
    $.ajax({
        type: "POST",
        url: url + "admin/auth/detail",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        data: {
            "id": id
        },
        success: function (message) {
            $('#current_user').text("当前用户邮箱：" + message["email"]);
            updateForm(message);
            loadIndex(id);
        },
        error: function (message) {
            ///转跳
        }
    });
}
function loadIndex(id){
    $.ajax({
        type: "POST",
        url: url + "admin/auth/index",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        data: {
            "id": id
        },
        success: function (message) {
            $('#primary_index').val(message["primary"]).change();
            $('#junior_index').val(message["junior"]).change();
            $('#senior_inter_index').val(message["senior_inter"]).change();
            $('#senior_general_index').val(message["senior_general"]).change();

        },
        error: function (message) {
            ///转跳
        }
    });
}
function updateForm(message) {
    $.each(message,
        function (index, element) {
            element = converter(index, element);
            switch ($("#" + index).get(0).tagName) {
                case "INPUT":
                    if ($('#' + index).attr('type') == "checkbox") {
                        $('#' + index).prop('checked', element).change();
                    }
                    else {
                        $('#' + index).val(element).change();
                    }
                    break;
                case "P":
                    $('#' + index).text(element);
                    break;
                case "SELECT":
                    $('#' + index).val(element);
                    $('#' + index + ' option[value=' + element + ']').attr('selected', 'selected').change();
                    break;
                case "TEXTAREA":
                    $('#' + index).val(element).change();
                    $('#' + index).trigger('autoresize');
                    break;
                default:
                    break;
            }
        }
    );
}

function updateRegion(step, select) {
    step = step.toString();
    //select = select.toString();
    switch (step) {
        case "2":
            switch (select) {
                case '-1':
                    $('#nfls_primary_info').hide();
                    break;
                case '1':
                case '2':
                    $('#nfls_primary_info').show();
                    break;
            }
            break;
        case "3":
            switch (select) {
                case '-1':
                    $('#junior_school_div').show();
                    $('#nfls_junior_info').hide();
                    break;
                case '1':
                    $('#junior_school_div').hide();
                    $('#nfls_junior_info').show();
                    break;
            }
            break;
        case "4":
            switch (select) {
                case '-1':
                    $('#senior_school_div').show();
                    $('#nfls_international_info').hide();
                    $('#nfls_senior_info').hide();
                    $('#nfls_senior_general').hide();
                    break;
                case '1':
                    $('#senior_school_div').hide();
                    $('#nfls_international_info').hide();
                    $('#nfls_senior_info').show();
                    $('#nfls_senior_general').show();
                    break;
                case '2':
                case '3':
                case '4':
                case '5':
                    $('#senior_school_div').hide();
                    $('#nfls_international_info').show();
                    $('#nfls_senior_general').show();
                    $('#nfls_senior_info').hide();
                    break;
            }
            break;
        default:
            break;
    }
    console.log(step + " " + select);
}

function editUser(){
    $.cookie("admin","true",{ path: "/" , domain: "nfls.io"});
    window.location.href = "../user_identity.html";
}

function acceptIdentity(){
    $.ajax({
        type: "POST",
        url: url + "admin/auth/accept",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        data: {
            "id": $.cookie("current_id"),
            "primary": $('#primary_index').val(),
            "junior": $('#junior_index').val(),
            "senior_general": $('#senior_general_index').val(),
            "senior_inter": $('#senior_inter_index').val(),
            "message": $('#message').val()
        },
        success: function (message) {
            if(message.code == 200){
                loadDetail(ids[ids.indexOf($.cookie("current_user")) + 1]);
            } else {
                var notices = "";
                for(notice in message.info){
                    notices += notice;
                }
                alert(notices);
            }
        },
        error: function (message) {
            ///转跳
        }
    });
}

function denyIdentity(){
    $.ajax({
        type: "POST",
        url: url + "admin/auth/deny",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        data: {
            "id": $.cookie("current_id"),
            "message": $('#message').val()
        },
        success: function (message) {


        },
        error: function (message) {
            ///转跳
        }
    });
}

function ignoreIdentity(){
    $.ajax({
        type: "POST",
        url: url + "admin/auth/ignore",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        data: {
            "id": $.cookie("current_id")
        },
        success: function (message) {


        },
        error: function (message) {
            ///转跳
        }
    });
}
function converter(source, index) {
    //var output = translator(source);
    var combined = index;
    switch (source) {
        case "gender":
            switch(index){
                case "1":
                    combined = "其他/保密";
                    break;
                case "2":
                    combined = "男";
                    break;
                case "3":
                    combined = "女";
                    break;

            }
            break;
        case "primary_school_no":
            updateRegion(2, index);
            switch (index) {
                case "-1":
                    combined = "其他学校";
                    break;
                case "1":
                    combined = "南外小学（四年制）";
                    break;
                case "2":
                    combined = "南外小学（两年制）";
                    break;
            }
            break;
        case "junior_school_no":
            updateRegion(3, index);
            switch (index) {
                case "-1":
                    combined = "其他学校";
                    break;
                case "1":
                    combined = "南外初中";
                    break;
            }
            break;
        case "senior_school_no":
            updateRegion(4, index);
            switch (index) {
                case "-1":
                    combined = "其他学校";
                    break;
                case "1":
                    combined = "南外普高";
                    break;
                case "2":
                    combined = "南外IB";
                    break;
                case "3":
                    combined = "南外A-LEVEL";
                    break;
                case "4":
                    combined = "南外中加";
                    break;
            }
            break;
        default:
            combined = index;
    }
    return combined;
}
function translator(source) {
    switch (source) {
        case "email":
            return "电子邮箱";
        case "usedname":
            return "曾用名";
        case "realname":
            return "真实姓名";
        case "phone_domestic":
            return "国内手机号";
        case "phone_international":
            return "国际手机号";
        case "nickname":
            return "英文名或绰号";
        case "birthday":
            return "出生日期";
        case "gender":
            return "性别";
        case "id":
            return "用户ID";
        case "username":
            return "用户名";
        case "primary_school_no":
            return "小学就读学校";
        case "primary_school_name":
            return "其他/小学学校全名";
            s
        case "primary_school_enter_year":
            return "小学入学年份";
        case "primary_school_graduated_year":
            return "小学毕业年份";
        case "primary_remark":
            return "小学相关注释";
        case "junior_school_no":
            return "初中就读学校";
        case "junior_school_name":
            return "初中学校全名";
        case "junior_school_enter_year":
            return "初中入学年份";
        case "junior_school_graduated_year":
            return "初中毕业年份";
        case "junior_remark":
            return "初中相关注释";
        case "junior_class":
            return "初中班级号";
        case "senior_school_no":
            return "高中就读学校";
        case "senior_school_name":
            return "高中学校全名";
        case "senior_school_enter_year":
            return "高中入学年份";
        case "senior_school_graduated_year":
            return "高中毕业年份";
        case "senior_remark":
            return "高中相关注释";
        case "senior_class":
            return "高中班级号";
        case "senior_class_11":
            return "高一上班级号";
        case "senior_class_12":
            return "高一下班级号";
        case "senior_class_21":
            return "高二上班级号";
        case "senior_class_22":
            return "高二下班级号";
        case "senior_class_31":
            return "高三上班级号";
        case "senior_class_32":
            return "高三下班级号";
        case "cut1":
        case "cut2":
        case "cut3":
        case "cut4":
            return "<br/>";
            break;
        default:
            return source;
            break;
    }
}