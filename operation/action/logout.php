<?php
	ini_set("session.cookie_domain",'.nfls.io');
	session_start();
	unset($_SESSION['TOKEN']);
	unset($_SESSION['USERID']);
	unset($_SESSION['USERNAME']);
?>