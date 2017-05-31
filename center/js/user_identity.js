/**
 * Created by hqy on 2017/4/8.
 */
var url = 'https://local.nfls.io';
init();
function init()
{
    $.ajax({
        type: 'GET',
        url: url + '/alumni/auth/status',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (message) {
            if (message.code == 200)
                updateInstruction(message.message,"status",false);
            else
                serverError();
        },
        error: function (message) {
            serverError();
        }
    });
    $.ajax({
        type: 'GET',
        url: url + '/alumni/auth/instructions',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (message) {
            updateInstruction(message.message,"instructions",true);
        },
        error: function (message) {
            serverError();
        }
    });
    $.ajax({
        type: 'GET',
        url: url + '/alumni/auth/getCurrentStep',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (message) {
            showMessage(message.message);
            if (message.code == 200) {
                gotoStep(message.step);
                updateInstruction(message.instructions,"tips",true);
            }

        },
        error: function (message) {
            showMessage('与服务器通讯出现故障，请检查您的网络或是刷新重试。如果错误反复出现，请与网站管理员联系');
        }
    });
}
function queryInfo(step) {
    $.ajax({
        type: 'GET',
        url: url + '/alumni/auth/' + step + '/query',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (message) {
            showMessage(message.message);
            if (message.code == 200)
            {
                updateForm(message.info);
            }

        },
        error: function (message) {
            serverError();
        }
    });
}
function submitInfo() {
    step = $('#current_step').val();
    var formInfo = {};
    $.each($('input', '#form' + step), function (k) {
        console.log(111);
        if ($(this).attr('id') != null && $(this).is(":visible"))
            formInfo[$(this).attr('id')] = $(this).val();
    });
    $.each($('select', '#form' + step), function (k) {
        console.log(111);
        if ($(this).attr('id') != null)
            formInfo[$(this).attr('id')] = $(this).find('option:selected').attr('value');
    });
    var jsonData = JSON.stringify(formInfo);
    $.ajax({
        type: 'POST',
        url: url + '/alumni/auth/' + step + '/update',
        dataType: 'json',
        data: jsonData,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (message) {
            var messageInfo = '';
            var count = 0;
            $.each(message.message,function(index,element)
            {
                messageInfo = messageInfo + element +'<br/>';
                count++;
            });
            if(count == 1)
                init();
            showMessage(messageInfo);
        },
        error: function (message) {
            serverError();
        }
    });
}
function gotoStep(step) {
    if($('#current_step').val()!=""){
        $('#step' + $('#current_step').val()).hide(1000);
    }
    if(step>1)
        $('#previous').removeAttr('disabled', 'disabled');
    $('#current_step').val(step);
    console.log($('#current_step').val());
    switch(step){
        case 1:
            $('#previous').attr('disabled', 'disabled');
            break;
        case 2:
            $('#nfls_primary_info').hide(1000);
            break;
        case 3:
            $('#nfls_junior_info').hide(1000);
            break;
        case 4:
            $('#nfls_international_info').hide(1000);
            $('#nfls_senior_info').hide(1000);
            $('#nfls_senior_general').hide(1000);
            break;
    }
    queryInfo(step);
    $('#step' + step).show(2000);

    return 0;
}

function backStep() {
    $.ajax({
        type: 'GET',
        url: url + '/alumni/auth/back',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (message) {
            showMessage(message.message);
            if (message.code == 200)
            {
                init();
            }
        },
        error: function (message) {
            serverError();
        }
    });
}


function updateForm(message) {
    $.each(message,
        function (index, element) {
            console.log(index+'='+element);
            switch($("#"+index).get(0).tagName){
                case "INPUT":
                    $('#' + index).val(element).change();
                    break;
                case "P":
                    $('#' + index).text(element);
                    break;
                case "SELECT":
                    //$('#' + index).attr("value",element).change();
                    $('#' + index).val(element);
                    $('#'+index+' option[value='+element+']').attr('selected','selected').change();
                    break;
                default:
                    break;
            }
            //$('#' + index).select(element).change();


            //$('#' + index).focus();
        }

    );
    //$(document).ready(function () {
        $('select').material_select();
    //});
}
function serverError() {
    showMessage('与服务器通讯出现故障，请检查您的网络或是刷新重试。如果错误反复出现，请与网站管理员联系');
}

function showMessage(message) {
    document.getElementById('serverinfo').innerHTML= message;
}
function updateInstruction(message,place,number){
    messageInfo = '';
    $.each(message,function(index,element)
    {
        if(number)
            messageInfo = messageInfo + (index + 1)+ '. ' + element +'<br/>';
        else
            messageInfo = messageInfo + element +'<br/>';
    });
    document.getElementById(place).innerHTML= messageInfo;
}

function updatePrimaryForm(){

    var step = $('#current_step').val();
    console.log(step);
    console.log(111);
    switch(step){
        case "2":
            var select = $('#primary_school_no').val();
            switch(select){
                case '-1':
                    $('#nfls_primary_info').hide(500);
                    break;
                case '1':
                case '2':
                    $('#nfls_primary_info').show(500);
                    break;
            }
            break;
        case "3":
            var select = $('#junior_school_no').val();
            switch(select){
                case '-1':
                    $('#junior_school_div').show(500);
                    $('#nfls_junior_info').hide(500);
                    break;
                case '1':
                    $('#junior_school_div').hide(500);
                    $('#nfls_junior_info').show(500);
                    break;
            }
            break;
        case "4":
            console.log(12);
            var select = $('#senior_school_no').val();
            switch(select){
                case '-1':
                    $('#senior_school_div').show(500);
                    $('#nfls_international_info').hide(500);
                    $('#nfls_senior_info').hide(500);
                    $('#nfls_senior_general').hide(500);
                    break;
                case '1':
                    $('#senior_school_div').hide(500);
                    $('#nfls_international_info').hide(500);
                    $('#nfls_senior_info').show(500);
                    $('#nfls_senior_general').show(500);
                    break;
                case '2':
                case '3':
                case '4':
                case '5':
                    $('#senior_school_div').hide(500);
                    $('#nfls_international_info').show(500);
                    $('#nfls_senior_general').show(500);
                    $('#nfls_senior_info').hide(500);
                    break;
            }
            break;
        default:
            break;
    }
    console.log(step + " " + select);
}