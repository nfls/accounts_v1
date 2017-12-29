var working = false;
$('.login').on('submit', function(e) {
	  e.preventDefault();
	  if (working) return;
	  working = true;
	  var $this = $(this),
		$state = $this.find('button > .state');
	  $this.addClass('loading');
	  $state.html('Authenticating');
		$.ajax({
			type: "POST",
			url: "action/logout.php",
			data: [],
			success: function (message) {
			delCookie("token");
					$this.addClass('ok');	
					$state.html('Welcome back!')	;
					setTimeout(function () { 
						window.location.href="index.php?reason=logout";
					}, 3000);
				
			},
			error: function (message) {
				$state.html('Log in');
				$this.removeClass('ok loading');
				working = false;
				alert("请求错误，请稍后再试！");
			}
		});

      
});
function delCookie(name)
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
	document.cookie= name + "="+cval+";expires="+exp.toGMTString()+ ";domain=" + "nfls.io";
}
function setCookie(name,value,time)
{
	var strsec = getsec(time);
	var exp = new Date();
	exp.setTime(exp.getTime() + strsec*1);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";domain=" + "nfls.io";
}
function getsec(str)
	{
	alert(str);
	var str1=str.substring(1,str.length)*1;
	var str2=str.substring(0,1);
	if (str2=="s")
	{
	return str1*1000;
	}
	else if (str2=="h")
	{
	return str1*60*60*1000;
	}
	else if (str2=="d")
	{
	return str1*24*60*60*1000;
	}
}
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
}