<?php
ini_set("session.cookie_domain",'.nfls.io');
$user=$_POST['username'];
$pass=$_POST['password'];
$email=$_POST['email'];
$headers = array(
    'content-type:application/vnd.api+json',
);
        $ch = curl_init();
 
        curl_setopt ($ch, CURLOPT_URL, "https://forum.nfls.io/api/users");
 
        curl_setopt ($ch, CURLOPT_POST, 1);
		
		$post_data = '{"data":{"attributes":{"username":"'.$user.'","email":"'.$email.'", "password":"'.$pass.'"}}}';
		
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
		if(isset($detail['data']))
		{
			die(json_encode(array("status"=>"success")));
		}
		if(isset($detail['errors']))
		{
			//die($file_contents);
			die(json_encode(array("status"=>"failure","code"=>$detail['errors'][0]['status'],"general"=>$detail['errors'][0]['code'],"message"=>$detail['errors'][0]['detail'])));
		}
		die(json_encode(array("status"=>"failure","raw"=>$file_contents)));
?> 