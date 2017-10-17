
ajax_submit("GET");
function ajax_submit(type){
    var chnName = document.getElementById("chnName").value;
    var engName = document.getElementById("engName").value;
    var tmpClass = document.getElementById("tmpClass").value;
    var $this = $('.login'),
        $state = $this.find('button > .state');
    $this.addClass('loading');
    $state.html('检索中');
    $.ajax({
        type: type,
        url: "https://api.nfls.io/center/realname",
        data: {
            chnName: chnName,
            engName: engName,
            tmpClass: tmpClass
        },
        xhrFields: {
            withCredentials: true
        },
        dataType: "json",
        success: function (message) {
            messageHandler(message.info)
            if(type == "GET"){
                $this.removeClass('loading');
                $state.html("提交");
            }else{
                $this.addClass('ok');
                $state.html("提交成功！");
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("提交");
                }, 1000);
            }

        },
        error: function (message) {
            $this.addClass('error');
            $state.html("服务器或网络错误，请重试！");
                setTimeout(function () {
                    $this.removeClass('error loading');
                    $state.html("提交");
                }, 1000);
        }
    });
}
function messageHandler(message){
    document.getElementById("chnName").value = message.chnName;
    document.getElementById("engName").value = message.engName;
    document.getElementById("tmpClass").value = message.tmpClass;
    if(message.enabled){
        $("#submitButton").hide();
        $("#status").text("当前状态：已通过（所有功能可正常使用，不可修改）");
    }else if(message.submitted){
         $("#status").text("当前状态：已提交，待审核（所有功能可正常使用，可以修改）");
    }else{
        $("#status").text("当前状态：未提交（无法访问往卷下载）");
    }
}