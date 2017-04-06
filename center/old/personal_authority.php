<?php require "components/Head.php" ?>

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="clearfix"></div>

            <div class="row">
			
			<div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2><i class=""></i> 认证信息 <small>状态</small></h2>
					
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
					<p>您可以通过本页面提交学生身份认证，认证成功后，您将享有ss免费账户、资料库完整访问等特殊权限。</p>
                    <div class="col-xs-3">
					
                      <!-- required for floating -->
                      <!-- Nav tabs -->
                      <ul class="nav nav-tabs tabs-left">
                        <li class="active"><a href="#status" data-toggle="tab">状态</a>
                        </li>
                        <li><a href="#info" data-toggle="tab">具体信息</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-xs-9">
                      <!-- Tab panes -->
                      <div class="tab-content">
                        <div class="tab-pane active" id="status">
                          <p class="lead">实名认证状态</p>
                          <p></p>
                        </div>
                        <div class="tab-pane" id="info">
                          <p class="lead">实名认证信息</p>
                          <p></p>
                        </div>
                      </div>
                    </div>

                    <div class="clearfix"></div>

                  </div>
                </div>
              </div>
			  
			  <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2><i class=""></i> 实名认证 <small>说明</small></h2>
					
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
                 <div class="alert alert-success alert-dismissible fade in" role="alert">
					<p>1.请认真并按照实际情况填写表格，提交后除初中升高中，高一升高二等情况以外您将无法修改您的信息。</p>
			  <p>2.表格除备注以外都需要填写，身份认证材料照片认证可上传与任何与您身份相关联的物品，如学生证、图书馆借阅卡、饭卡等物品的照片（照片内必须有本人姓名）。如果没有，请选择人工（qq）认证。</p>
			  <p>3.材料审核需要1-7天的时间，审核通过后，您可以在login.nfls.io的个人中心内查询到相关信息。</p>
			  <p>4.您的身份默认不会被公开，我们也不会用于除身份认证以外的任何用途，如果您想公开你的身份，可以前往个人中心设置。</p>
			  <p>5.我们目前仅支持南外本部、南外仙林（仅高中部）等学校的认证，其他学校暂不支持，部分学校标记为“测试”，表示相关功能可能尚未完善，审核时间可能较长。部分学校标记为“往届”，表示该课程现在可能已经关闭，仅作为过往学生认证使用。我们目前仅支持南外相关学校的认证，其他学校暂不支持</p>
			  <p>6.教务系统认证由于学校相关服务十分不稳定，暂时关闭</p>
                    <div class="clearfix"></div>

                  </div>
                </div>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>实名认证 <small>向导</small></h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
						<!--
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
						-->
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
				  <div id="info_box" >
					<div class="alert alert-success alert-dismissible fade in" role="alert">
					<p id="notice_info">提示信息</p>
					</div>
					<div class="ln_solid"></div>
					</div>

                    <!-- Smart Wizard -->
                    <div id="wizard" class="form_wizard wizard_horizontal">
                      <ul class="wizard_steps">
                        <li>
                          <a href="#step-1">
                            <span class="step_no">1</span>
                            <span class="step_descr">
                                              第一步<br />
                                              <small>初中信息</small>
                                          </span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-2">
                            <span class="step_no">2</span>
                            <span class="step_descr">
                                              第二步<br />
                                              <small>高中信息</small>
                                          </span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-3">
                            <span class="step_no">3</span>
                            <span class="step_descr">
                                              第三步<br />
                                              <small>基础信息</small>
                                          </span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-4">
                            <span class="step_no">4</span>
                            <span class="step_descr">
                                              第四步<br />
                                              <small>认证材料</small>
                                          </span>
                          </a>
                        </li>
                      </ul>
                      <div id="step-1">
                        <form class="form-horizontal form-label-left" style="height:300px;">

                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">初中就读学校</label>
							<div class="col-md-9 col-sm-9 col-xs-12">
							  <select id="junior_school" class="form-control">
							  </select>
							</div>
							</div> 
							<div id="junior_class_div">
							  <div class="form-group" >
								<label class="control-label col-md-3 col-sm-3 col-xs-12">初中所在班级</label>
								<div class="col-md-9 col-sm-9 col-xs-12">
								  <select id="junior_class" class="form-control">
								  </select>
								</div>
							  </div>
							  <div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">学号</label>
								<div class="col-md-9 col-sm-9 col-xs-12">
								   <input type="text" id="junior_schoolno" class="form-control">
								</div>
							  </div>
							</div>
							  <div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">入学年份</label>
								<div class="col-md-9 col-sm-9 col-xs-12">
								  <select id="junior_enter_year" class="form-control">
								  </select>
								</div>
							  </div>
							  
                          
						  
                        </form>

                      </div>
                      <div id="step-2">
					  <form class="form-horizontal form-label-left" style="height:400px;">
                        <div class="form-group">
						
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">高中就读学校</label>
							<div class="col-md-9 col-sm-9 col-xs-12">
							  <select id="senior_school" class="form-control">
							  </select>
							</div>
						</div>
						<div id="standard">
                          <div class="form-group" id="senior_class_div">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">高一所在班级</label>
							<div class="col-md-9 col-sm-9 col-xs-12">
							  <select id="senior1_class" class="form-control">
								<option>请选择</option>
							  </select>
							</div>
						  </div>
						  <div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">高一学号</label>
								<div class="col-md-9 col-sm-9 col-xs-12">
								   <input type="text" id="senior1_schoolno" class="form-control">
								</div>
						  </div>
						  <div class="form-group" id="senior_class_div">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">高二高三所在班级</label>
							<div class="col-md-9 col-sm-9 col-xs-12">
							  <select id="senior23_class" class="form-control">
								<option>请选择</option>
							  </select>
							</div>
						  </div>
						  <div class="form-group" id="senior23_schoolno_box">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">高二高三学号</label>
								<div class="col-md-9 col-sm-9 col-xs-12">
								   <input type="text" id="senior23_schoolno" class="form-control">
								</div>
						  </div>
						  </div>
						 <div id="international">
							 <div class="form-group" id="senior_class_div">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">高中所在班级</label>
								<div class="col-md-9 col-sm-9 col-xs-12">
								  <select id="senior_class" class="form-control">
									<option>请选择</option>
								  </select>
								</div>
							  </div>
						 </div>
							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">入学年份</label>
								<div class="col-md-9 col-sm-9 col-xs-12">
								  <select id="senior_enter_year" class="form-control">
								  </select>
								</div>
							  </div>
                          
						  </form>
                      </div>
					  <div id="step-3">
                        <form class="form-horizontal form-label-left" style="height:300px;">
							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">姓名</label>
								<div class="col-md-9 col-sm-9 col-xs-12">
								   <input type="text" id="realname" class="form-control">
								</div>
							  </div>
							
							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">出生日期</label>
								<div class="col-md-9 col-sm-9 col-xs-12">
								   <input type="text" id="birthday" class="form-control" placeholder="八位数字，如2000年1月1日就填写20000101">
								</div>
							  </div>
							  
							<div class="form-group" id="senior_class_div">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">性别</label>
								<div class="col-md-9 col-sm-9 col-xs-12">
								  <select id="gender" class="form-control">
								  </select>
								</div>
							  </div>
							  
                          
						  
                        </form>
                      </div>
                      <div id="step-4">
						  <form class="form-horizontal form-label-left" style="height:300px;">
							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">请选择您认为最快的认证方式</label>
								<div class="col-md-9 col-sm-9 col-xs-12">
								  <select id="auth_way" class="form-control">
								  </select>
								</div>
							 </div>
							 <div class="ln_solid"></div>
							 <div id="inschool">
								<p>请按照后续指示在校内寻找以下人员并汇报您的信息：</p>
								<p>南京外国语学校本部：高二（4）班 刘瑞楷</p>
								<p>南京外国语学校分部：PreIB-2 胡清阳</p>
							 </div>
							 <div id="qq">
								<p>请按照后续指示在QQ或者B站上以下人员并汇报您的信息（如果二维码无法清除扫描请长按或右击并选择“在新标签页中打开图片”：</p>
								<p>B站：<a href="http://space.bilibili.com/14289681/#!/index">液氢NFLS [http://space.bilibili.com/14289681/#!/index]</a></p>
								<p>[推荐方法]QQ：胡清阳 1105052411（请注明“实名认证”以及您的班级和姓名）</a></p>
								<p><img src="images/bilibili.png" width="45%"/>        <img src="images/qq.jpg" width="45%"/>
							 </div>
						  </form>
					  </div>
                    </div>
                    <!-- End SmartWizard Content -->
   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /page content -->


    <!-- jQuery -->
    <script src="../vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="../vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="../vendors/nprogress/nprogress.js"></script>
    <!-- jQuery Smart Wizard -->
    <script src="../vendors/jQuery-Smart-Wizard/js/jquery.smartWizard.js"></script>
    <!-- Custom Theme Scripts -->
    <script src="../build/js/custom.min.js"></script>

    <!-- jQuery Smart Wizard -->
    <script>
      $(document).ready(function() {
        $('#wizard').smartWizard(
		{
			onLeaveStep:leaveAStepCallback,
		});

        $('#wizard_verticle').smartWizard({
          transitionEffect: 'slide'
        });

        $('.buttonNext').addClass('btn btn-success');
        $('.buttonPrevious').addClass('btn btn-primary');
        $('.buttonFinish').addClass('btn btn-default');
      });
    </script>
	<script src="//cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js"></script>
	<script src="head.js"></script>
	<script src="personal_authority.js"></script>
	
    <!-- /jQuery Smart Wizard -->
  </body>
</html>