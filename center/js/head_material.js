if($.cookie("token")==null||$.cookie("flarum_remember")==null)
	logout();
$(".button-collapse").sideNav();
$('.collapsible').collapsible();
$('.button-collapse').sideNav({
        menuWidth: 250, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    }
);
$.ajax({
	type: "POST",
	url: "https://app.nfls.io/API/User/User.php?action=GetAvatarByToken",
	data: 
	{
		token: $.cookie('token'),
	},
	dataType: "json",
	success: function (message) {
		//var json_mes=$.parseJSON(message)
		if(message.status=="success")
		{
			//alert(message);
			document.getElementById("avatar").src = message.url; 
			//document.getElementById("avatar_2").src = message.url;
		}
		else
		{
			logout();
		}
			
	},
});

$.ajax({
	type: "POST",
	url: "https://app.nfls.io/API/User/User.php?action=GetUsernameByToken",
	data: 
	{
		token: $.cookie('token'),
	},
	dataType: "json",
	success: function (message) {
		//var json_mes=$.parseJSON(message)
		if(message.status=="success")
		{
			//alert(message);
			document.getElementById("user_name").innerHTML = message.username; 
		}
			
	},
});

	$.ajax({
		type: "POST",
		url: "https://app.nfls.io/API/User/User.php?action=GetPersonalWikiInfoByToken",
		data: 
		{
			token: $.cookie('token'),
		},
		dataType: "json",
		success: function (message) {
			//var json_mes=$.parseJSON(message)
			if(message.status=="success")
			{
				if(message.id!=-1)
				{
					if($.cookie("nfls_wiki_wiki_Token")==null||$.cookie("nfls_wiki_wiki_UserID")==null||$.cookie("nfls_wiki_wiki_UserName")==null)
						logout();
				}
			}
			else
			{

			}
				
		},
		error: function (message) {
		}
	});

	$.ajax({
		type: "POST",
		url: "https://app.nfls.io/API/User/User.php?action=GetPersonalShareInfoByToken",
		data: 
		{
			token: $.cookie('token'),
		},
		dataType: "json",
		success: function (message) {
			if(message.status=="success")
			{
				if(message.id!=-1)
				{
					if($.cookie("c_secure_login")==null||$.cookie("c_secure_pass")==null||$.cookie("c_secure_ssl")==null||$.cookie("c_secure_tracker_ssl")==null)
						logout();
				}
			}
			else
			{

			}
				
		},
		error: function (message) {
		}
	});

function logout()
{
	//$.cookie('token', '', {path: '/', domain: 'nfls.io', secure: true, expires: -1});
	//window.location.href='https://nfls.io/quickaction.php?action=logout&noreturn=true';
	//alert("!1");
}
