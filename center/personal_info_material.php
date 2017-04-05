<?php require "components/Head_material.php" ?>

        <!-- page content -->
<main>
<div class="container">
 
        <div class="container">
          <div class="row">
      <div class="col s12 m9">        
          


<!--
    <div class="right_col" role="main">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>个人信息</h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <br />
                    <form class="form-horizontal form-label-left">

                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">用户ID</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="id" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
                      <div class="form-group">
                      -->
<div class="container">
  <!--  Outer row  -->
  <div class="row">

    <div class="section col s12 m9 l10">
    <div class="section scrollspy" id="personalinfo">
   <p class="promo-caption">User Info</p>
       <div class="row">
        <div class="input-field col s12">
          <input disabled value="Loading" id="id" type="text" class="validate">
          <label for="disabled">User ID</label>
        </div>
      </div>

                      
        <div class="row">
        <div class="input-field col s12">
          <input disabled value="Loading" id="join_time" type="text" class="validate">
          <label for="disabled">Join_time</label>
        </div>
      </div>

       <div class="row">
        <div class="input-field col s12">
          <input disabled value="Loading" id="username" type="text" class="validate">
          <label for="disabled">Username</label>
        </div>
      </div>

       <div class="row">
        <div class="input-field col s12">
          <input disabled value="Loading" id="email" type="text" class="validate">
          <label for="disabled">email</label>
        </div>
      </div>

       <div class="row">
        <div class="input-field col s12">
          <input disabled value="Loading" id="avatar_path" type="text" class="validate">
          <label for="disabled">avatar address</label>
        </div>
      </div>

       <div class="row">
        <div class="input-field col s12">
          <input disabled value="Loading" id="password" type="password" class="validate">
          <label for="disabled">password</label>
        </div>
      </div>

      <div class="checkbox col-md-9 col-sm-9 col-xs-12" id="not_activated">
          <label><input type="checkbox" class="flat" disabled="disabled">未激活（请验证您的邮箱）</label>
      </div>
      <div class="checkbox col-md-9 col-sm-9 col-xs-12" id="is_activated" >
          <input type="checkbox" class="flat" disabled="disabled" checked="checked">已激活
      </div>

                      <div class="ln_solid"></div>
            
                      <div class="form-group">
                        <div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
              <button type="button" class="btn btn-danger" onclick="edit()">修改</button>
                        </div>
                      </div>

    </div>
  </div>
</div>

      <!--
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">加入时间</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="join_time" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
            <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">用户名</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="username" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
            <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">邮箱</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="email" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
            <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">头像地址</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="avatar_path" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">密码</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input class="form-control" readonly="readonly" value="已隐藏" placeholder="正在加载中">
                        </div>
                      </div>
            <div class="form-group"   >
              <label class="col-md-3 col-sm-3 col-xs-12 control-label">账户激活情况
                          <br>
                        </label>
            <div class="checkbox col-md-9 col-sm-9 col-xs-12" id="not_activated">
                <label><input type="checkbox" class="flat" disabled="disabled">未激活（请验证您的邮箱）</label>
            </div>
            <div class="checkbox col-md-9 col-sm-9 col-xs-12" id="is_activated" >
            <label>
                           <input type="checkbox" class="flat" disabled="disabled" checked="checked">已激活
                        </label>
                        </div>
            </div>
                  -->    

                    </form>
                  </div>
                </div>
              </div>
       </div>
    </div>
  </main>




  
    <!-- jQuery -->
    <script src="../vendors/jquery/dist/jquery.min.js"></script>
  <!-- jQuery-cookie -->
  <script src="//cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js"></script>
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
    <!-- bootstrap-daterangepicker -->
    <script src="js/moment/moment.min.js"></script>
    <script src="js/datepicker/daterangepicker.js"></script>
    <!-- bootstrap-wysiwyg -->
    <script src="../vendors/bootstrap-wysiwyg/js/bootstrap-wysiwyg.min.js"></script>
    <script src="../vendors/jquery.hotkeys/jquery.hotkeys.js"></script>
    <script src="../vendors/google-code-prettify/src/prettify.js"></script>
    <!-- jQuery Tags Input -->
    <script src="../vendors/jquery.tagsinput/src/jquery.tagsinput.js"></script>
    <!-- Switchery -->
    <script src="../vendors/switchery/dist/switchery.min.js"></script>
    <!-- Select2 -->
    <script src="../vendors/select2/dist/js/select2.full.min.js"></script>
    <!-- Parsley -->
    <script src="../vendors/parsleyjs/dist/parsley.min.js"></script>
    <!-- Autosize -->
    <script src="../vendors/autosize/dist/autosize.min.js"></script>
    <!-- jQuery autocomplete -->
    <script src="../vendors/devbridge-autocomplete/dist/jquery.autocomplete.min.js"></script>
    <!-- starrr -->
    <script src="../vendors/starrr/dist/starrr.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="../build/js/custom.min.js"></script>
  
    <script src="personal_info.js"></script>
  <script src="head_material.js"></script>
  
  </body>
</html>