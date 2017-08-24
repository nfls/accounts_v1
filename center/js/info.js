$.ajax({
	type: "GET",
	url: "https://api.nfls.io/center/generalInfo",
	dataType: "json",
    xhrFields: {
        withCredentials: true
    },
	success: function (message) {
		//var json_mes=$.parseJSON(message)
		if(message.status=="succeed")
		{
			//alert(message);
			info = message.info;
			document.getElementById("id").value=info.id;
			document.getElementById("username").value=info.username;
			document.getElementById("email").value=info.email;
			document.getElementById("avatar_path").value="https://forum.nfls.io/assets/avatars/"+info.avatar_path;
			document.getElementById("join_time").value=info.join_time;
			if(info.is_activated==0)
			{
				var obj = document.getElementById("is_activated");
				obj.style.display= "none";
			}
			else
			{
				var obj = document.getElementById("not_activated");
				obj.style.display= "none";
			}
				
			//document.getElementById("username").value=message.username;
		}
		else
		{

		}
			
	},
	error: function (message) {
	}
});

function edit()
{
	window.location.href="https://forum.nfls.io/settings";
}