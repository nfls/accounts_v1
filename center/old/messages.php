<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>NFLS.IO 用户中心 | User Center</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link type="text/css" rel="stylesheet" href="../bower_components/materialize/dist/css/materialize.min.css"
          media="screen,projection"/>
    <script type="text/javascript" src="../bower_components/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="../bower_components/materialize/dist/js/materialize.min.js"></script>
    <script src="../bower_components/jquery.cookie/jquery.cookie.js"></script>
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-92193639-8', 'auto');
        ga('send', 'pageview');

    </script>
<body>
<header>
    <nav class="top-nav blue">
        <div class="container">
            <div class="nav-wrapper blue"><a class="page-title">Account</a>
                <a href="#" data-activates="nav-mobile" class="button-collapse top-nav full hide-on-large-only">
                    <i class="material-icons">menu</i></a>
            </div>
        </div>
    </nav>
    <div class="container">
    </div>
    <ul id="nav-mobile" class="side-nav fixed">
        <li>
            <div class="userView blue">
                <img class="circle" id="avatar"></a>
                <span class="white-text name" id="user_name"></span></a>
                <span class="white-text email">tianzundibei@163.com</span></a>
            </div>
        </li>
        <li><a class="waves-effect" href="personal_info.html">账户综合信息</a></li>
        <li><a class="waves-effect" href="associated_service.html">站内关联服务</a></li>
        <li><a class="waves-effect" href="messages.html">消息与通知</a></li>
        <li><a class="waves-effect" href="user_identity.html">实名认证</a></li>
        <li><a class="waves-effect" href="https://nfls.io/quickaction.php?action=logout&noreturn=true">退出</a></li>
    </ul>
    </nav>
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

        <!-- page content -->
<div class="container">
 <!--
        <div class="container">
          <div class="row">
      <div class="col s12 m9">        
-->
<div class="container">
  <!--  Outer row  -->
  <div class="row">

    <div class="section col s12 m9 l10">
            <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Messages</span>
              <p>Check here to find out latest updates about this server and school events</p>
            </div>
            <div class="card-action">
              <a href="https://blog.oscs.io">Maintainer's blog</a>
              
            </div>
          </div>
          <ul class="collection" id="system_noticebox">
    
    </ul>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

             <!-- <div class="x_panel" >
                <div class="x_title">
                  <h2>系统通知与公告 <small>仅显示最近10条</small></h2>
                  <ul class="nav navbar-right panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="x_content" >
                  <ul class="list-unstyled timeline" id="system_noticebox">
                  </ul>

                </div>
              </div>
            </div> -->
          </div>
        </div>
        <!-- /page content -->
      </div>
    </div>

    <div id="custom_notifications" class="custom-notifications dsp_none">
      <ul class="list-unstyled notifications clearfix" data-tabbed_notifications="notif-group">
      </ul>
      <div class="clearfix"></div>
      <div id="notif-group" class="tabbed_notifications"></div>
    </div>

    <!-- jQuery -->
    <script src="../vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="../vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="../vendors/nprogress/nprogress.js"></script>
    <!-- bootstrap-progressbar -->
    <script src="../vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
    <!-- iCheck -->
    <script src="../vendors/iCheck/icheck.min.js"></script>
    <!-- PNotify -->
    <script src="../vendors/pnotify/dist/pnotify.js"></script>
    <script src="../vendors/pnotify/dist/pnotify.buttons.js"></script>
    <script src="../vendors/pnotify/dist/pnotify.nonblock.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="../build/js/custom.min.js"></script>
	<script src="//cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js"></script>
	<script src="head_material.js"></script>
	<script src="messages.js"></script>


  </body>
</html>