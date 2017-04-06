$.ajax({
	type: "POST",
	url: "https://app.nfls.io/API/User/User.php?action=GetPersonalGeneralInfoByToken",
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
			document.getElementById("id").value=message.id;
			document.getElementById("username").value=message.username;
			document.getElementById("email").value=message.email;
			document.getElementById("avatar_path").value="https://forum.nfls.io/assets/avatars/"+message.avatar_path;
			document.getElementById("join_time").value=message.join_time;
			if(message.is_activated==0)
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