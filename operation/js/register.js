var working = false;
$('.login').on('submit', function(e) {
	  var pass = document.getElementById("password").value;
	  var user = document.getElementById("username").value;
	  var passchk= document.getElementById("password-repeat").value;
	  var email=document.getElementById("email").value;
	  e.preventDefault();
	  if (pass!=passchk)
	  {
	  	window.alert("Passowrd not match");
	  	return;
	  }
	  if (working) return;
	  working = true;
	  var $this = $(this),
		$state = $this.find('button > .state');
	  $this.addClass('loading');
	  $state.html('Registering');
		$.ajax({
			type: "POST",
			url: "action/register.php",
			data: 
			{
				username: user,
				password: pass,
				email: email,
			},
			dataType: "json",
			success: function (message) {
				if(message.status=="success")
				{
					$this.addClass('ok');
					$state.html('Register Succeeded! Please check the confirm letter in you email! You may need to login again!');
					setTimeout(function () { 
							window.location.href="https://forum.nfls.io";
					}, 5000);
					
				}
				else
				{
					$this.addClass('error');
					$state.html(message.message);
					setTimeout(function () { 
						window.location.href="index.php?action=register";
					}, 5000);

				}
				
			},
			error: function (message) {
				$state.html('Log in');
				$this.removeClass('ok loading');
				working = false;
				alert("请求错误，请稍后再试！");
				window.location.href="index.php";
			}
		});

      
});