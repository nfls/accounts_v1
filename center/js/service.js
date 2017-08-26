$(document).ready(function(){
    $('ul.tabs').tabs();
});
function loaddata()
{
	$.ajax({
		type: "GET",
		url: "https://api.nfls.io/center/forumInfo",
		dataType: "json",
        xhrFields: {
            withCredentials: true
        },
		success: function (message) {
			//var json_mes=$.parseJSON(message)
			if(message.status=="succeed")
			{
				//alert(message);
				message = message.info;
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
		type: "GET",
		url: "https://api.nfls.io/center/wikiInfo",
		dataType: "json",
        xhrFields: {
            withCredentials: true
        },
		success: function (message) {
			//var json_mes=$.parseJSON(message)
			if(message.status=="succeed")
			{
				message = message.info;
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
}

function GenerateWikiAccount()
{
	$("#wikigen").attr({"disabled":"disabled"});
	$.ajax({
		type: "GET",
		url: "https://api.nfls.io/center/wikiRegister",
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
		type: "GET",
		url: "https://api.nfls.io/center/shareRegister",
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

