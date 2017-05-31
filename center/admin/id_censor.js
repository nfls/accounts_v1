/**
 * Created by mmlmm on 2017/5/31.
 */
url="https://local.nfls.io/"
$.ajax({
    type: "GET",
    url: url+"admin/auth/list",
    dataType: "json",
    success: function (message) {
        $.each(message,function(i,mes){
            loadList(mes);
        });
    },
    error: function (message) {
        ///转跳
    }
});

function loadList(mes){
    var box=document.getElementById("index_row");
    var container = document.createElement("div");
    container.setAttribute("class","col-md-6");
    var panel =  document.createElement("div");
    panel.setAttribute("class","panel panel-default");
    var title =  document.createElement("div");
    title.setAttribute("class","panel-heading");
    var title_text = document.createElement("h3");
    title_text.setAttribute("class","panel-title");
    title_text.innerHTML =  "实名认证请求";
    var content =  document.createElement("div");
    content.setAttribute("class","panel-body");
    var output = "<p>";
    $.each(mes,function(i,content){
        output = output + converter(i,content) + "<br />";
    });
    output = output + "</p>";
    content.innerHTML = output;
    title.appendChild(title_text);
    panel.appendChild(title);
    panel.appendChild(content);
    container.appendChild(panel);
    box.appendChild(container);
}
function converter(source,index){
    var output = translator(source);
    var combined = "";
    switch (source){
        case "primary_school_no":
            switch(index){
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
            switch(index){
                case "-1":
                    combined = "其他学校";
                    break;
                case "1":
                    combined = "南外初中";
                    break;
            }
            break;
        case "senior_school_no":
            switch(index){
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
    return output + "：" + combined;
}
function translator(source){
    switch(source){
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
            return "<br/>小学就读学校";
        case "primary_school_name":
            return "其他/小学学校全名";s
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
            return "<br/>初中班级号";
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
            return "<br/>高中班级号";
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
        default:
            return source;
    }
}