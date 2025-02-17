<?php
  if(!isset($_COOKIE["token"])){
    header("Location:login.php");
    die();
  }
  $status = json_decode(file_get_contents("https://api.nfls.io/center/auth?token=".$_COOKIE['token']),true);
  if($status["code"] != 200){
    header("Location:login.php");
    die();
  }
  if($status["info"]["phone"] == true){
    header("Location:ic.php");
    die();
  }
?>
<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">
    <title>实名认证 - 南京外国语学校在线社区 | Nanjing Foreign Language School Online Community</title>
	  <meta name="keywords" content="NFLS, 南外, 南京外国语学校, 南京外校, Nanjing Foreign Language School">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="//cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <script src='https://www.recaptcha.net/recaptcha/api.js'></script>
    <link rel="stylesheet" href="css/normalize.css">

    
        <style>
      /* NOTE: The styles were added inline because Prefixfree needs access to your styles and they must be inlined if they are on local disk! */
      body {
  font-family: "Open Sans", sans-serif;
  height: 100vh;
  background: url("https://nfls.io/background1.jpg") 50% fixed;
  background-size: cover;
}

@keyframes spinner {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(359deg);
  }
}
* {
  box-sizing: border-box;
}

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  background: rgba(4, 40, 68, 0.85);
}

.login {
  border-radius: 2px 2px 5px 5px;
  padding: 10px 20px 20px 20px;
  width: 90%;
  max-width: 345px;
  background: #ffffff;
  position: relative;
  padding-bottom: 80px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
}
.login.loading button {
  max-height: 100%;
  padding-top: 50px;
}
.login.loading button .spinner {
  opacity: 1;
  top: 40%;
}
.login.ok button {
  background-color: #8bc34a;
}
.login.ok button .spinner {
  border-radius: 0;
  border-top-color: transparent;
  border-right-color: transparent;
  height: 20px;
  animation: none;
  transform: rotateZ(-45deg);
}
.login.error button {
  background-color: #ff0000;
}
.login.error button .spinner {
  border-radius: 0;
  border-top-color: transparent;
  border-right-color: transparent;
  height: 20px;
  animation: none;
  transform: rotateZ(-45deg);
}
.login input {
  display: block;
  padding: 15px 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ddd;
  transition: border-width 0.2s ease;
  border-radius: 2px;
  color: #ccc;
}
.login input + i.fa {
  color: #fff;
  font-size: 1em;
  position: absolute;
  margin-top: -47px;
  opacity: 0;
  left: 0;
  transition: all 0.1s ease-in;
}
.login input:focus {
  outline: none;
  color: #444;
  border-color: #2196F3;
  border-left-width: 35px;
}
.login input:focus + i.fa {
  opacity: 1;
  left: 30px;
  transition: all 0.25s ease-out;
}
.login a {
  font-size: 0.8em;
  color: #2196F3;
  text-decoration: none;
}
.login .title {
  color: #444;
  font-size: 1.2em;
  font-weight: bold;
  margin: 10px 0 30px 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}
.login button {
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  background: #2196F3;
  color: #fff;
  display: block;
  border: none;
  margin-top: 20px;
  position: absolute;
  left: 0;
  bottom: 0;
  max-height: 60px;
  border: 0px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 2px 2px;
  transform: rotateZ(0deg);
  transition: all 0.1s ease-out;
  border-bottom-width: 7px;
}
.login button .spinner {
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  border: 4px solid #ffffff;
  border-top-color: rgba(255, 255, 255, 0.3);
  border-radius: 100%;
  left: 50%;
  top: 0;
  opacity: 0;
  margin-left: -20px;
  margin-top: -20px;
  animation: spinner 0.6s infinite linear;
  transition: top 0.3s 0.3s ease, opacity 0.3s 0.3s ease, border-radius 0.3s ease;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
}
.login:not(.loading) button:hover {
  box-shadow: 0px 1px 3px #2196F3;
}
.login:not(.loading) button:focus {
  border-bottom-width: 4px;
}

footer {
  display: block;
  padding-top: 50px;
  text-align: center;
  color: #ddd;
  font-weight: normal;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.2);
  font-size: 0.8em;
}
footer a, footer a:link {
  color: #fff;
  text-decoration: none;
}

    </style>

    
        <script src="js/prefixfree.min.js"></script>

    
    
  </head>

  <body>

    <div class="wrapper">
  <form class="login">
    <p class="title">手机号认证</p>
    <p>根据网信办相关规定，在使用本站服务前，您需要绑定您的手机号并提交相关信息。<br/>如果出现任何问题（如没收到短信），请点击重新开始，验证码每个手机号超出一定次数后将无法收到。</p>
    <input type="text" placeholder="手机号" id="phone" name="phone" autofocus/>
    <i class="fa fa-mobile"></i>
    <div id="code_region" hidden>
      <input type="text" placeholder="6位验证码" id="code" name="code"/>
      <i class="fa fa-key"></i>
    </div>
    <div class="g-recaptcha" data-sitekey="6Lc0GTMUAAAAAARFMMHvdwE14X3nIgoLXx7SF2F5"></div>
    <button type="button" onclick="submitForm()">
      <i class="spinner"></i>
      <span class="state">提交</span>
    </button>
    <a href="phone.php">重新开始</a>
  </form>
  </p>
</div>
        <script src="ajax/libs/jquery/2.1.3/jquery.min.js"></script>

        <script src="js/phone.js?v=1"></script>

    
    
  </body>
</html>
