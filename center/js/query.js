/**
 * Created by hqy on 2017/8/28.
 */

function submit() {
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/university/list",
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
                if (i > 0)
                    $("#list").show();
                else
                    $("#list").hide();
            } else {
                $("#list").hide();
            }
        }
    });
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
            $("#school_shortName").val(message.info.shortName).change();
            $("#school_chineseName").val(message.info.chineseName).change();
            $("#school_chineseShortName").val(message.info.chineseShortName).change();
            $("#school_comments").val(message.info.comment).change();
            $("#school_added_by").val(message.info.added_by).change();
            $("#school_country").val(message.info.country);
            $('#school_country' + ' option[value=' + message.info.country + ']').attr('selected', 'selected').change();
            $("#form1").show(1000);
            $('select').material_select();
        }
    });
}