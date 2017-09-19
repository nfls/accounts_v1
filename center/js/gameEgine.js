/**
 * Created by hqy on 2017/9/16.
 */
function loadUsername(){
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/username",
        dataType: "json",
        xhrFields:{
            withCredentials: true
        },
        success: function (message) {
            var username = message.info; // 这个是用户名
        },
        error: function (message){
            // 没有登录
            //jumpToLogin()
        }
    });
}
function jumpToLogin(){//转跳到登录界面
    $.cookie('token', '', {path: '/', domain: 'nfls.io', secure: true, expires: -1});
    window.location.href='https://center.nfls.io/';
}
/*
function pharseScore(message){
    var score = message.info.score; //分数
    var rank = message.info.count; //排名
    $.each(message.before,function(i,item){ //排名靠前的人（最多10个）
        var _username = item.username; // 用户名
        var _score = item.score; //用户分数
    });
    $.each(message.after,function(i,item){ //排名靠后的人（最多10个）
        var _username = item.username; // 用户名
        var _score = item.score; //用户分数
    });
}
function getScore(){
    $.ajax({
        type: "GET",
        url: "https://api.nfls.io/center/rank",
        dataType: "json",
        xhrFields:{
            withCredentials: true
        },
        success: function (message) {
            pharseScore(message);
        },
        error: function (message){
            //正常情况不会有这个
        }
    });
}
*/
function newPhaseScore(message){ // 新方法
    var bestScore = message.info.bestScore;
    var bestRank = message.info.bestRank;
    var nowRank = message.info.nowRank;
    if(!IsEmpty(message.info.playerBefore)){
        var name = message.info.playerBefore.username;
        var score = message.info.playerBefore.score;
    }
    if(!IsEmpty(message.info.playerAfter)){
        var name_ = message.info.playerAfter.username;
        var score_ = message.info.playerAfter.score;
    }

}
function updateScore(nowScore){//参数是新的分数，只有在新的分数比旧分数高的时候才会更新，输入0强制更新
    $.ajax({
        type: "POST",
        url: "https://api.nfls.io/center/rank",
        dataType: "json",
        data: {
            score:nowScore
        },
        xhrFields:{
            withCredentials: true
        },
        success: function (message) {
            newPhaseScore(message);
        },
        error: function (message){
            //正常情况不会有这个
        }
    });
}
function IsEmpty(v){
    switch (typeof v){
        case 'undefined' : return true;
        case 'string' : if(trim(v).length == 0) return true; break;
        case 'boolean' : if(!v) return true; break;
        case 'number' : if(0 === v) return true; break;
        case 'object' :
            if(null === v) return true;
            if(undefined !== v.length && v.length==0) return true;
            for(var k in v){return false;} return true;
            break;
    }
    return false;
}