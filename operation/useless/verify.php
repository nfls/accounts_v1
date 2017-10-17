<!DOCTYPE html>
<html lang="en">

<head>
    <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
   <!--Import jQuery before materialize.js-->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
	    <div class="row">
        <div class="col s12">
          <div class="card green">
            <div class="card-content white-text">
              <span class="card-title">实名认证页面</span>
              <p>您可以通过本页面提交学生身份认证，认证成功后，您将享有直播特殊弹幕、资料库完整访问等特殊权限。</p>
			  
            </div>
          </div>
        </div>
      </div>
	  <div class="row">
        <div class="col s12">
          <div class="card orange">
            <div class="card-content white-text">
              <span class="card-title">表格填写说明</span>
              <p>1.请认真并按照实际情况填写表格，提交后除初中升高中等情况以外您将无法修改您的信息。</p>
			  <p>2.表格除备注以外都需要填写，身份认证材料可上传与任何与您身份相关联的物品，如学生证、图书馆借阅卡、饭卡等物品的照片。（照片内必须有本人姓名）</p>
			  <p>3.目前暂时不支持教务系统一键认证。</p>
			  <p>4.材料审核需要1-7天的时间，审核通过后，您可以在login.nfls.io的个人中心内查询到相关信息。</p>
			  <p>5.您的身份默认不会被公开，我们也不会用于除身份认证以外的任何用途，如果您想公开你的身份，可以前往个人中心设置。</p>
			  
            </div>
          </div>
        </div>
      </div>
		<div class="row">
		<form class="col s12">
		  <div class="row">
			<div class="input-field col s12">
			  <i class="material-icons prefix">account_circle</i>
			  <input id="icon_prefix" type="text" class="validate">
			  <label for="icon_prefix">姓名</label>
			</div>
		  </div>
		  <div class="row">
			   <div class="input-field col s12">
			   <i class="material-icons prefix">library_books</i>
				<select>
				  
				  <option value="1">南京外国语学校初中部</option>
				  <option value="2">其他学校</option>
				</select>
				<label>初中就读学校</label>
			  </div>
		  </div>
		  <div class="row">
			  <div class="input-field col s6">
			  <i class="material-icons prefix"> av_timer</i>			 
				  <select>
				  <option value="2016">2016</option>
				  <option value="2017">2017</option>
				  </select>
				  <label>毕业年份</label>
			  </div>
			  <div class="input-field col s6">
			   <i class="material-icons prefix"> class</i>
			  
				  <select>
				  <option value="01">01</option>
				  <option value="02">02</option>
				  </select>
				  <label>班级</label>
			  </div>
		  </div>
		  <div class="row">
		  <div class="input-field col s12">
		  <i class="material-icons prefix">library_add</i>
			<select>
			  
			  <option value="0">尚未就读高中</option>
			  <option value="1">南京外国语学校普高</option>
			  <option value="2">南京外国语学校国际部 - 中加</option>
			  <option value="3">南京外国语学校国际部 - 中英A-Level</option>
			  <option value="4">南京外国语学校国际部 - IB</option>	  
			  <option value="5">其他学校</option>
			</select>
			<label>高中就读学校</label>
		  </div>
		  </div>
		  <div class="row">
			  <div class="input-field col s6">
			  <i class="material-icons prefix"> av_timer</i>			 
				  <select>
				  <option value="2016">2016</option>
				  <option value="2017">2017</option>
				  </select>
				  <label>毕业年份</label>
			  </div>
			  <div class="input-field col s6">
			   <i class="material-icons prefix"> class</i>
			  
				  <select>
				  <option value="01">01</option>
				  <option value="02">02</option>
				  </select>
				  <label>班级</label>
			  </div>
		  </div>
		  <div class="file-field input-field ">
			  <div class="btn col s2" >
				<span>File</span>
				<input type="file">
			  </div>
			  <div class="input-field col s10">
				<input class="file-path validate" type="text">
				<label>验证材料</label>
			  </div>
			  
		  </div>
		   <div class="row">
			  <div class="row col s12">
				<div class="input-field col s12">
				  <i class="material-icons prefix">mode_edit</i>
				  <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
				  <label for="icon_prefix2">备注说明</label>
				</div>
			  </div>
		  </div>
		  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
			<i class="material-icons right">send</i>
		  </button>
		</form>
	  </div>
	  <script>
	   $(document).ready(function() {
    $('select').material_select();
  });
            $('.datepicker').pickadate({
    selectMonths: false, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
			</script>

</body>
</html>