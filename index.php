<?php
	//ini_set("session.cookie_domain",'.nfls.io');
	session_start();
	
	if(isset($_COOKIE['token']))
		Header("Location:https://login.nfls.io/center");
	else
		Header("Location:https://login.nfls.io/operation");

?>