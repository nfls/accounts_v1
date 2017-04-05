function loaddata()
{
	$.ajax({
		type: "POST",
		url: "https://app.nfls.io/API/User/User.php?action=GetPersonalForumInfoByToken",
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
				document.getElementById("forum_id").value=message.id;
				document.getElementById("forum_username").value=message.username;
				if(message.last_seen_time==null)
					document.getElementById("forum_last_login").placeholder="无";
				document.getElementById("forum_last_login").value=message.last_seen_time;
				if(message.notifications_read_time==null)
					document.getElementById("forum_last_read").placeholder="无";
				document.getElementById("forum_last_read").value=message.notifications_read_time;
				document.getElementById("forum_comment_no").value=message.comments_count;
				document.getElementById("forum_post_no").value=message.discussions_count;
				if(message.id==-1)
				{
					var obj = document.getElementById("forum_is_activated");
					obj.style.display= "none";
					var obj = document.getElementById("detail_forum");
					obj.style.display= "none";
				}
				else
				{
					var obj = document.getElementById("forum_not_activated");
					obj.style.display= "none";
				}
					
				//document.getElementById("forum_username").value=message.username;
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
				//alert(message);
				document.getElementById("wiki_id").value=message.user_id;
				document.getElementById("wiki_username").value=message.user_name;
				if(message.user_real_name=="")
					document.getElementById("wiki_realname").placeholder="无";
				document.getElementById("wiki_realname").value=message.user_real_name;
				document.getElementById("wiki_regtime").value=message.user_registration;
				document.getElementById("wiki_logtime").value=message.user_touched;
				document.getElementById("wiki_editno").value=message.user_editcount;
				if(message.id==-1)
				{
					var obj = document.getElementById("wiki_is_activated");
					obj.style.display= "none";
					var obj = document.getElementById("details_wiki");
					obj.style.display= "none";
				}
				else
				{
					var obj = document.getElementById("wiki_not_activated");
					obj.style.display= "none";
				}
					
				//document.getElementById("wiki_username").value=message.username;
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
			//var json_mes=$.parseJSON(message)
			if(message.status=="success")
			{
				//alert(message);
				document.getElementById("share_id").value=message.user_id;
				document.getElementById("share_username").value=message.user_name;
				document.getElementById("share_regtime").value=message.user_registration;
				document.getElementById("share_logtime").value=message.user_touched;
				document.getElementById("share_ip").value=message.user_ip;
				if(message.user_ip=="")
					document.getElementById("share_ip").placeholder="无";
				document.getElementById("share_downloaded").value=message.user_downloaded;
				document.getElementById("share_uploaded").value=message.user_uploaded;
				if(message.id==-1)
				{
					var obj = document.getElementById("share_is_activated");
					obj.style.display= "none";
					var obj = document.getElementById("details_share");
					obj.style.display= "none";
				}
				else
				{
					var obj = document.getElementById("share_not_activated");
					obj.style.display= "none";
				}
					
				//document.getElementById("wiki_username").value=message.username;
			}
			else
			{

			}
				
		},
		error: function (message) {
		}
	});
}

function GenerateWikiAccount()
{
	$("#wikigen").attr({"disabled":"disabled"});
	$.ajax({
		type: "POST",
		url: "https://app.nfls.io/API/User/User.php?action=CreateWikiAccountByToken",
		data: 
		{
			token: $.cookie('token'),
		},
		dataType: "json",
		success: function (message) {	
			location.reload(true);
		},
		error: function (message) {
			location.reload(true);
		}
	});
	
}

function GenerateShareAccount()
{
	$("#sharegen").attr({"disabled":"disabled"});
	$.ajax({
		type: "POST",
		url: "https://app.nfls.io/API/User/User.php?action=CreateShareAccountByToken",
		data: 
		{
			token: $.cookie('token'),
		},
		dataType: "json",
		success: function (message) {	
			location.reload(true);
		},
		error: function (message) {
			location.reload(true);
		}
	});
	
}



function GotoShare()
{
	window.location.href="https://share.nfls.io";
}

function GotoWiki()
{
	window.location.href="https://wiki.nfls.io";
}

function GotoForum()
{
	window.location.href="https://forum.nfls.io";
}

function GotoDl()
{
	window.location.href="https://dl.nfls.io";
}

