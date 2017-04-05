<?php
ini_set("session.cookie_domain",'.nfls.io');
$user=$_POST['username'];
$pass=$_POST['password'];
$headers = array(
    'content-type:application/vnd.api+json',
);
        $ch = curl_init();
 
        curl_setopt ($ch, CURLOPT_URL, "https://forum.nfls.io/api/token");
 
        curl_setopt ($ch, CURLOPT_POST, 1);
		
		$post_data = '{"identification":"'.$user.'","password":"'.$pass.'"}';
		
        if($post_data != ''){
 
            curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
 
        }
 
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1); 
 
        curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 120);
		
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
 
        curl_setopt($ch, CURLOPT_HEADER, false);
 
        $file_contents = curl_exec($ch);
 
        curl_close($ch);
		
		$detail=(array)json_decode($file_contents,true);
		if(isset($detail['token']))
		{
			session_start();
			//setcookie("username", $row['username'], time()+24*60*60); 
			//setcookie("username", $row['username'], time()+24*60*60); 
			include "../../function/UserControl.php";
			$token = userlogin($detail['userId']);
			//$_SESSION['TOKEN']=$detail['token'];
			//$_SESSION['USERID']=$detail['userId'];
			//$_SESSION['USERNAME']=$user;
			die(json_encode(array("status"=>"success","token"=>$token)));
		}
		if(isset($detail['errors']))
		{
			if($detail['errors'][0]['code']=='permission_denied')
				die(json_encode(array("status"=>"failure","message"=>'用户名或密码错误！Wrong username or passwords!')));
			else die(json_encode(array("status"=>"failure","message"=>$detail['errors'][0]['code'])));
		}
		die($file_contents);
?> 