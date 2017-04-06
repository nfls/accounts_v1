<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>NFLS.IO 用户中心</title>

     <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="../materialize/css/materialize.min.css"  media="screen,projection"/>
       <!--<link href="../materialize/css/prism.css" rel="stylesheet">
    <link href="../materialize/css/ghpages-materialize.css" type="text/css" rel="stylesheet" media="screen,projection">
-->
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    
    <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="../materialize/js/materialize.min.js"></script>
    </body>

    <!-- PNotify -->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-92193639-8', 'auto');
      ga('send', 'pageview');

    </script>
    <!-- Custom Theme Style -->

<!--
<?php // require "parts/Navigation_material.php";?> 
-->
  </head>
<body>
<header>
   <nav class="top-nav blue">
        <div class="container">
          <div class="nav-wrapper blue"><a class="page-title">Account</a>
           <a href="#" data-activates="nav-mobile" class="button-collapse top-nav full hide-on-large-only">
      <i class="material-icons">menu</i>
        </div>
      </nav>
      <div class="container">
     
      </a>
      </div>
      <ul id="nav-mobile" class="side-nav fixed">
        <li><div class="userView blue">
         <img class="circle" id="avatar"></a>
        <span class="white-text name" id="user_name"></span></a>
        <span class="white-text email">tianzundibei@163.com</span></a>
    </div></li>
        <li class="no-padding">
          <ul class="collapsible collapsible-accordion">
            <li class="bold"><a class="collapsible-header  waves-effect waves-teal">Personal Settings</a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="personal_info_material.php">Personal information</a></li>
                  <li><a href="service@io.php">Service @ nfls.io</a></li>
                  <li><a href="service_outsite_io">nothing about this site =_= </a></li>
                </ul>
              </div>
            </li>
            <li class="bold"><a class="collapsible-header  waves-effect waves-teal">Messages</a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="badges.html">System Messages</a></li>
                </ul>
              </div>
            </li>
          </ul>
          <a class="waves-effect" href="https://nfls.io/quickaction.php?action=logout&noreturn=true"><span class="black-text">log out</span></a>
        </li>

      </li>
    </ul>
  </div>
</header>
</body>
 <script>
// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();
   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  </script> 

  

  <?php require "parts/Footer_material.php"; ?>
