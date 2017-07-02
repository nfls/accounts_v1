<?php
	ini_set("session.cookie_domain",'.nfls.io');
	session_start();
	
	if(isset($_COOKIE['token']))
		Header("Location:https://login.nfls.io");
	else
		if(isset($_GET['action']))
		{
			if($_GET['action']=="register")
				require "register.php";
			else if($_GET['action']=="forget")
				require "forget.php";
			else if($_GET['action']=="privacy")
				require "privacy.php";
			else require "login.php";
		}
		else require "login.php";
?>