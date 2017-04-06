<?php require "components/Head.php" ?>

   <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="clearfix"></div>

            <div class="row">
                
			  
			  
			  
			  
			  <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2><i class="fa fa-comment-o"></i> 论坛 <small>forum.nfls.io</small></h2>
					
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      
                    </ul>
                    <div class="clearfix"></div>
                  </div>

                   <div class="x_content">
                    <form class="form-horizontal form-label-left">
					<div class="alert alert-success alert-dismissible fade in" role="alert">
					  <p>提示：论坛账户即为您的nfls.io所有服务的登录账户，用户名密码完全一致。</p>
					</div>
					  <div class="form-group"   >
					    <label class="col-md-3 col-sm-3 col-xs-12 control-label">账户关联情况
                          <br>
                        </label>
						<div class="checkbox col-md-9 col-sm-9 col-xs-12" id="forum_not_activated">
					      <label><input type="checkbox" class="flat" disabled="disabled">  未关联</label>
						</div>
						<div class="checkbox col-md-9 col-sm-9 col-xs-12" id="forum_is_activated" >
						<label>
                           <input type="checkbox" class="flat" disabled="disabled" checked="checked">  已关联
                        </label>
                        </div>
					  </div>
					  <div id="details_forum">
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">用户ID</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="forum_id" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">用户名</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="forum_username" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">最近一次登录时间</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="forum_last_login" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">最近一次通知阅读时间</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="forum_last_read" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">帖子数</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="forum_post_no" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">评论数</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="forum_comment_no" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  </div>
					  
                      


                      <div class="ln_solid"></div>
                      <div class="form-group">
						<div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
						  <button type="button" class="btn btn-success" onclick="GotoForum()">进入论坛</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
			  
			  <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2><i class="fa fa-book"></i> 百科 <small>wiki.nfls.io</small></h2>
					
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                     
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <form class="form-horizontal form-label-left">
					<div class="alert alert-success alert-dismissible fade in" role="alert">
					  <p>如果您在2017年1月31日前单独注册过wiki账户，请不要使用生成账户功能，可联系管理员进行关联工作。请不要一人多号，否则多余的账户将会被删除。</p>
					  <p>
					  如果您没有自动登录，请尝试退出并重新登录。创建完新账号后需要退出重新登录后相关账户才能生效！
					  </p>
					</div>
					  <div class="form-group"   >
					    <label class="col-md-3 col-sm-3 col-xs-12 control-label">账户关联情况
                          <br>
                        </label>
						<div class="checkbox col-md-9 col-sm-9 col-xs-12" id="wiki_not_activated">
					      <label><input type="checkbox" class="flat" disabled="disabled">未关联（请关联或生成一个账户）</label>
						  <button class="btn btn-info" onclick="GenerateWikiAccount()" id="wikigen">生成一个账户！</button>
						</div>
						<div class="checkbox col-md-9 col-sm-9 col-xs-12" id="wiki_is_activated" >
						<label>
                           <input type="checkbox" class="flat" disabled="disabled" checked="checked">  已关联
                        </label>
                        </div>
					  </div>
					  <div id="details_wiki">
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">用户ID</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="wiki_id" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">用户名</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="wiki_username" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">真实姓名</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="wiki_realname" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">注册时间</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="wiki_regtime" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">最近一次登录时间</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="wiki_logtime" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">编辑数</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="wiki_editno" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  
					  
                      


                      <div class="ln_solid"></div>
                      <div class="form-group">
						<div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
						  <button type="button" class="btn btn-success" onclick="GotoWiki()">进入百科</button>
                        </div>
                      </div>
					  </div>
                    </form>
                  </div>
                </div>
              </div>
			  <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2><i class="fa fa-file-archive-o"></i>  NFLS车管所（P2P视频下载中心） <small>share.nfls.io</small></h2>
					
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li> 
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <form class="form-horizontal form-label-left">
					<div class="alert alert-success alert-dismissible fade in" role="alert">
					  <p>如果您没有自动登录，请尝试退出并重新登录。创建完新账号后需要退出重新登录后相关账户才能生效！</p>
					</div>
					  <div class="form-group"   >
					    <label class="col-md-3 col-sm-3 col-xs-12 control-label">账户关联情况
                          <br>
                        </label>
						<div class="checkbox col-md-9 col-sm-9 col-xs-12" id="share_not_activated">
					      <label><input type="checkbox" class="flat" disabled="disabled">未关联（请关联或生成一个账户）</label>
						  <button class="btn btn-info" onclick="GenerateShareAccount()" id="sharegen">生成一个账户！</button>
						</div>
						<div class="checkbox col-md-9 col-sm-9 col-xs-12" id="share_is_activated" >
						<label>
                           <input type="checkbox" class="flat" disabled="disabled" checked="checked">  已关联
                        </label>
                        </div>
					  </div>
					  <div id="details_share">
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">用户ID</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="share_id" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">用户名</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="share_username" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">注册时间</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="share_regtime" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">最近一次登录时间</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="share_logtime" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">最近一次访问IP</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="share_ip" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">上传量</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="share_uploaded" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">下载量</label>
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          <input type="text" id="share_downloaded" class="form-control" readonly="readonly" placeholder="正在加载中">
                        </div>
                      </div>
					  
                      <div class="ln_solid"></div>
                      <div class="form-group">
						<div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
						  <button type="button" class="btn btn-success" onclick="GotoShare()">进入车管所</button>
                        </div>
                      </div>
					  </div>
                    </form>
                  </div>
                </div>
              </div>
			  
			  <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2><i class="fa fa-cloud-upload"></i> Minecraft PC (JAVA VER.) Server<small>mc.nfls.io</small></h2>
					
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
					<p>状态：建设中</p>
                    <div class="clearfix"></div>
					<!--
					<div class="ln_solid"></div>
                      <div class="form-group">
						<div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
						  <button type="button" class="btn btn-success" onclick="GotoDl()">进入下载中心</button>
                        </div>
                      </div>
                  </div>
				  -->
                </div>
              </div>
			  </div>
			  
			  <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2><i class="fa fa-cloud-upload"></i> 下载中心（学习资料） <small>dl.nfls.io</small></h2>
					
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
					<p>状态：已激活</p>
                    <div class="clearfix"></div>
					<div class="ln_solid"></div>
                      <div class="form-group">
						<div class="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
						  <button type="button" class="btn btn-success" onclick="GotoDl()">进入下载中心</button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
			  
			  
			  
			  <!--
			  <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2><i class="fa fa-cloud-upload"></i> 论坛 <small>forum.nfls.io</small></h2>
					
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
					<p>状态：已激活</p>
                    <div class="clearfix"></div>

                  </div>
                </div>
              </div>
			  -->
			  
			  
			</div>
          </div>
        </div>
        <!-- /page content -->

      </div>
    </div>

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
	
	<script src="//cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js"></script>
	<script src="head.js"></script>
	<script src="service_inweb.js"></script>
	<script>loaddata();</script>
	<?php
		if(@$_GET['action']=='loginwiki')
			echo "<script>LoginWikiAccount();</script>";
	?>
  </body>
</html>