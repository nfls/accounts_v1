var working = false;
$('.login').on('submit', function(e) {
	  var email = document.getElementById("email").value;
	  e.preventDefault();
	  if (working) return;
	  working = true;
	  var $this = $(this),
		$state = $this.find('button > .state');
	  $this.addClass('loading');
	  $state.html('Authenticating');
		$.ajax({
			type: "POST",
			url: "https://api.nfls.io/center/recover",
			data: 
			{
				email: email,
			},
			dataType: "json",
			success: function (message) {
				if(message.status=="success")
				{
					$this.addClass('ok');
					$state.html('An email with a password-reset link has sent to your email. 密码恢复邮件已发送至您的邮箱。');
					setTimeout(function () { 
						window.location.href="https://login.nfls.io/operation";
					}, 5000);
				}
				else
				{
					$this.addClass('error');
					$state.html('Your email is not associated with any accounts. 没有账户与此邮箱关联。');
					setTimeout(function () { 
						window.location.href="forget.php";
					}, 3000);

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