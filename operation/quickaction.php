<?php
if(@$_GET['action']=='logout')
{
	del("token");
	del("nfls_wiki_wiki_Token");
	del("nfls_wiki_wiki_UserID");
	del("nfls_wiki_wiki_UserName");
	del("nfls_wiki_wiki__session");
	del("flarum_remember");
	del("flarum_session");
	//del("_ga");
	delforum("flarum_session");
	del("c_secure_login");
	del("c_secure_pass");
	del("c_secure_ssl");
	del("c_secure_tracker_ssl");
	del("c_secure_uid");
	delwiki("nfls_wiki_wiki_UserID");
	delwiki("nfls_wiki_wiki_UserName");
	delwiki("nfls_wiki_wiki_Token");
	delwiki("nfls_wiki_wiki__session");
	@$url=$_SERVER['HTTP_REFERER'];
	if(isset($_GET['return']))
	{
		if($_GET['return']=='wiki')
			Header("Location:https://wiki.nfls.io");
	}	
	else if(!isset($_GET['noreturn']))
		Header("Location:$url");
	else
		Header("Location:https://login.nfls.io/operation/?reason=logout");
	return 0;
}
if(@$_GET['action']=='refreshwiki')
{
	delwiki("nfls_wiki_wiki_UserID");
	delwiki("nfls_wiki_wiki_UserName");
	delwiki("nfls_wiki_wiki_Token");
	delwiki("nfls_wiki_wiki__session");
	if(isset($_GET['return']))
		$url=urldecode($_GET['return']);
	else if(isset($_SERVER['HTTP_REFERER']))
		$url=$_SERVER['HTTP_REFERER'];
	else
		return 0;
	Header("Location:$url");
	return 0;
}
if(@$_GET['action']=='loginwiki')
{
	Header("Location:https://login.nfls.io/center/service_inweb.php?action=loginwiki");
	return 0;
}

function del($name)
{
	setCookie($name,"",time()-3600,"/","nfls.io");
}
function delwiki($name)
{
	setCookie($name,"",time()-3600,"/","wiki.nfls.io");
}
function delforum($name)
{
	setCookie($name,"",time()-3600,"/","forum.nfls.io; HttpOnly");
}
?>