var obj_jschool=document.getElementById('junior_school'); 
obj_jschool.options.add(new Option("请选择","not_choose"));
obj_jschool.options.add(new Option("南京外国语学校初中部","nfls_junior"));
obj_jschool.options.add(new Option("南京外国语学校河西分校初中部","nflshx_junior"));
obj_jschool.options.add(new Option("南京外国语学校仙林分校初中部","nflsxl_junior"));
obj_jschool.options.add(new Option("其他学校","other"));
var obj_sschool=document.getElementById('senior_school'); 
obj_sschool.options.add(new Option("请选择","not_choose"));
obj_sschool.options.add(new Option("尚未就读高中","not_attended"));
obj_sschool.options.add(new Option("南京外国语学校普高","nfls_standard"));
obj_sschool.options.add(new Option("南京外国语学校中加实验班","nfls_bca"));
obj_sschool.options.add(new Option("南京外国语学校剑桥国际课程班","nfls_alevel"));
obj_sschool.options.add(new Option("南京外国语学校IB国际课程班","nfls_ib"));
obj_sschool.options.add(new Option("南京外国语学校仙林分校普高","nflsxl_standard"));
obj_sschool.options.add(new Option("南京外国语学校仙林分校中美国际课程班","nflsxl_america"));
obj_sschool.options.add(new Option("南京外国语学校中澳国际课程班（往届）（测试）","nfls_australia"));
obj_sschool.options.add(new Option("南京外国语学校仙林分校德国巴州国际课程班（测试）","nflsxl_german"));
obj_sschool.options.add(new Option("南京外国语学校仙林分校澳洲国际课程班（测试）","nflsxl_australia"));
obj_sschool.options.add(new Option("南京外国语学校仙林分校GAC & ACT美国课程班（测试）","nflsxl_gacact"));
//obj_sschool.options.add(new Option("南京外国语学校圣地亚哥分校金坷垃实验班（误）","nfls_shengdiyage"));
obj_sschool.options.add(new Option("其他学校","other"));
var gender=document.getElementById('gender'); 
gender.options.add(new Option("男","male"));
gender.options.add(new Option("女","female"));
var auth_way=document.getElementById('auth_way'); 
auth_way.options.add(new Option("校内认证","1"));
auth_way.options.add(new Option("在线认证","2"));
var obj_jgyear=document.getElementById('junior_enter_year'); 
document.getElementById("info_box").style.display="none";
var myDate = new Date();
for(i=myDate.getFullYear();i>=1963;i--)
	obj_jgyear.options.add(new Option(i + "年",i));
var obj_sgyear=document.getElementById('senior_enter_year'); 
for(i=myDate.getFullYear();i>=1963;i--)
	obj_sgyear.options.add(new Option(i + "年",i));
document.getElementById("standard").style.display="none";
document.getElementById("international").style.display="none";
document.getElementById("inschool").style.display="inline";
document.getElementById("qq").style.display="none";
document.getElementById("junior_class_div").style.display="none";
$(document).ready(function(){  

	$('#auth_way').change(function(){
		switch($(this).children('option:selected').val())
		{
			case "1":
				document.getElementById("inschool").style.display="inline";
				document.getElementById("qq").style.display="none";
				break;
			case "2":
				document.getElementById("inschool").style.display="none";
				document.getElementById("qq").style.display="inline";
				break;
		}
	});	
	$('#junior_school').change(function(){  
		var obj_jclass=document.getElementById('junior_class'); 
		obj_jclass.options.length=0; 	
		if($(this).children('option:selected').val()=="nfls_junior")
		{
			document.getElementById("junior_class_div").style.display="inline";
			for(i=1;i<=12;i++)
				obj_jclass.options.add(new Option(i + "班",i));
		}
		else if($(this).children('option:selected').val()=="nflshx_junior")	
		{
			document.getElementById("junior_class_div").style.display="inline";
			for(i=1;i<=10;i++)
				obj_jclass.options.add(new Option(i + "班",i));
		}
		else if($(this).children('option:selected').val()=="nflsxl_junior")	
		{
			document.getElementById("junior_class_div").style.display="inline";
			for(i=1;i<=14;i++)
				obj_jclass.options.add(new Option(i + "班",i));
		}
		else
		{
			document.getElementById("junior_class_div").style.display="none";
		}
	});  
	
	$('#senior_school').change(function(){  
		var obj_sclass=document.getElementById('senior_class'); 
		var obj_sclass1=document.getElementById('senior1_class'); 
		var obj_sclass23=document.getElementById('senior23_class'); 
		obj_sclass.options.length=0; 
		obj_sclass1.options.length=0; 
		obj_sclass23.options.length=0; 
		//alert($(this).children('option:selected').val());
		switch($(this).children('option:selected').val())
		{
			case "not_choose":
				document.getElementById("standard").style.display="none";
				document.getElementById("international").style.display="none";
				break;
			case "nfls_standard":
				document.getElementById("standard").style.display="inline";
				document.getElementById("international").style.display="none";
				for(i=1;i<=8;i++)
				{
					obj_sclass1.options.add(new Option(i + "班",i));
					obj_sclass23.options.add(new Option(i + "班",i));
				}	
				obj_sclass23.options.add(new Option("未到达该年级","not_attended"));				
				break;
			case "nfls_bca":
				document.getElementById("standard").style.display="none";
				document.getElementById("international").style.display="inline";
				obj_sclass.options.add(new Option("A" + "班","A"));
				obj_sclass.options.add(new Option("B" + "班","B"));
				obj_sclass.options.add(new Option("C" + "班","C"));
				obj_sclass.options.add(new Option("D" + "班","D"));
				break;
			case "nfls_ib":
				document.getElementById("standard").style.display="none";
				document.getElementById("international").style.display="inline";
				for(i=1;i<=2;i++)
					obj_sclass.options.add(new Option(i + "班",i));
				break;
			case "nfls_alevel":
				document.getElementById("standard").style.display="none";
				document.getElementById("international").style.display="inline";
				for(i=1;i<=2;i++)
					obj_sclass.options.add(new Option(i + "班",i));
				for(i=3;i<=4;i++)
					obj_sclass.options.add(new Option(i + "班（往届）",i));
				break;
			case "nflsxl_standard":
				document.getElementById("standard").style.display="inline";
				document.getElementById("international").style.display="none";
				for(i=1;i<=6;i++)
				{
					obj_sclass1.options.add(new Option(i + "班",i));
					obj_sclass23.options.add(new Option(i + "班",i));
				}	
				obj_sclass23.options.add(new Option("未到达该年级","not_attended"));				
				break;
			case "nflsxl_america":
				document.getElementById("standard").style.display="none";
				document.getElementById("international").style.display="inline";
				obj_sclass.options.add(new Option("A" + "班","A"));
				obj_sclass.options.add(new Option("B" + "班","B"));
				obj_sclass.options.add(new Option("C" + "班","C"));
				obj_sclass.options.add(new Option("D" + "班","D"));
				obj_sclass.options.add(new Option("E" + "班","E"));
				break;
			case "not_attended":
			case "other":
				document.getElementById("standard").style.display="none";
				document.getElementById("international").style.display="none";
				break;
		}
	});
	
	$('#senior23_class').change(function(){  
		if($(this).children('option:selected').val()=="not_attended")
			document.getElementById("senior23_schoolno_box").style.display="none";
	});
	

})  

document.getElementById("junior_schoolno").placeholder="请填写[入学年份][班级][班级内学号]的八位数学号";
document.getElementById("senior1_schoolno").placeholder="请填写[入学年份][班级][班级内学号]的八位数学号";
document.getElementById("senior23_schoolno").placeholder="请填写[入学年份][班级][班级内学号]的八位数学号";


function leaveAStepCallback(obj, context){
    return validateSteps(context.fromStep); // return false to stay on step and true to continue navigation 
}


function validateSteps(stepnumber){
	switch(stepnumber)
	{
		case 1:			
			$.ajax({
				
				type: "POST",
				url: "https://app.nfls.io/API/User/User.php?action=SubbmitPersonalInfo&step=1",
				data: 
				{
					token: $.cookie('token'),
					junior_school: $("#junior_school").children('option:selected').val(),
					junior_class: $("#junior_class").children('option:selected').val(),
					junior_enter_year: $("#junior_enter_year").children('option:selected').val(),
					junior_schoolno: $("#junior_schoolno").val(),
				},
				dataType: "json",
				success: function (message) {
					//var json_mes=$.parseJSON(message)
					if(message.status=="success")
					{
						document.getElementById("info_box").style.display="none";
						return true;
					}
					else
					{
						showwronginfo(message.message);
						return false;
					}
						
				},
				error: function (message) {
					showwronginfo("服务器内部错误！");
					return false;
				}
			});
			break;
		case 2:
			$.ajax({
				
				type: "POST",
				url: "https://app.nfls.io/API/User/User.php?action=SubbmitPersonalInfo&step=2",
				data: 
				{
					token: $.cookie('token'),
					senior_school: $("#senior_school").children('option:selected').val(),
					senior_class: $("#senior_class").children('option:selected').val(),
					senior_schoolno: $("#senior_schoolno").val(),
					senior1_class: $("#senior1_class").children('option:selected').val(),
					senior1_schoolno: $("#senior1_schoolno").val(),
					senior23_class: $("#senior23_class").children('option:selected').val(),
					senior23_schoolno: $("#senior23_schoolno").val(),
					senior_enter_year: $("#senior_enter_year").children('option:selected').val(),
				},
				dataType: "json",
				success: function (message) {
					//var json_mes=$.parseJSON(message)
					if(message.status=="success")
					{
						document.getElementById("info_box").style.display="none";
						return true;
					}
					else
					{
						showwronginfo(message.message);
						return false;
					}
						
				},
				error: function (message) {
					showwronginfo("服务器内部错误！");
					return false;
				}
			});
			break;
		case 3:
			$.ajax({
				
				type: "POST",
				url: "https://app.nfls.io/API/User/User.php?action=SubbmitPersonalInfo&step=3",
				data: 
				{
					token: $.cookie('token'),
					realname: $("#realname").val(),
					birthday: $("#birthday").val(),
					gender: $("#gender").val(),
				},
				dataType: "json",
				success: function (message) {
					//var json_mes=$.parseJSON(message)
					if(message.status=="success")
					{
						document.getElementById("info_box").style.display="none";
						return true;
					}
					else
					{
						showwronginfo(message.message);
						return false;
					}
						
				},
				error: function (message) {
					showwronginfo("服务器内部错误！");
					return false;
				}
			});
			break;
		case 4:
			$.ajax({
				
				type: "POST",
				url: "https://app.nfls.io/API/User/User.php?action=SubbmitPersonalInfo&step=2",
				data: 
				{
					token: $.cookie('token'),
					senior_school: $("#auth_way").children('option:selected').val(),
				},
				dataType: "json",
				success: function (message) {
					//var json_mes=$.parseJSON(message)
					if(message.status=="success")
					{
						document.getElementById("info_box").style.display="none";
						return true;
					}
					else
					{
						showwronginfo(message.message);
						return false;
					}
						
				},
				error: function (message) {
					showwronginfo("服务器内部错误！");
					return false;
				}
			});
			break;
	}
	
}

function showwronginfo(str)
{
	$("#notice_info").html(str);
	document.getElementById("info_box").style.display="inline";
}
function validateAllSteps(){
    var isStepValid = true;
    // all step validation logic     
    return isStepValid;
}   

function padNumber(num, fill) {
    var len = ('' + num).length;
    return (Array(
        fill > len ? fill - len + 1 || 0 : 0
    ).join(0) + num);
}

function fillnum(str){
    str ='00000'+str;
    return str.substring(str.length-2,str.length);
}


/*$.ajax({
	type: "POST",
	url: "https://app.nfls.io/API/User/User.php?action=GetPersonalGeneralInfoByToken",
	data: 
	{
		token: $.cookie('token'),
	},
	dataType: "json",
	success: function (message) {
		//var json_mes=$.parseJSON(message)
		if(message.status=="success")
		{
			//alert(message);
			document.getElementById("id").value=message.id;
			document.getElementById("username").value=message.username;
			document.getElementById("email").value=message.email;
			document.getElementById("avatar_path").value="https://forum.nfls.io/assets/avatars/"+message.avatar_path;
			document.getElementById("join_time").value=message.join_time;
			if(message.join_time==1)
			{
				var obj = document.getElementById("is_activated");
				obj.style.display= "none";
			}
			else
			{
				var obj = document.getElementById("not_activated");
				obj.style.display= "none";
			}
				
			//document.getElementById("username").value=message.username;
		}
		else
		{

		}
			
	},
	error: function (message) {
	}
});
*/

/*
// Your Step validation logic
function validateSteps(stepnumber){
    var isStepValid = true;
    // validate step 1
    switch(stepnumber){
		case 1:
			switch($("#junior_school").children('option:selected').val())
			{
				case "not_choose":
					showwronginfo("请选择您的初中学校！");
					return false;
					break;
				case "nfls_junior":
					if($("#junior_class").children('option:selected').val()<0 || $("#junior_class").children('option:selected').val()>12)
					{
						showwronginfo("初中所在班级选项范围不正确！");
						return false;
					}
					break;
				case "nflsxl_junior":
					if($("#junior_class").children('option:selected').val()<0 || $("#junior_class").children('option:selected').val()>14)
					{
						showwronginfo("初中所在班级选项范围不正确！");
						return false;
					}
					break;
				case "nflshx_junior":
					if($("#junior_class").children('option:selected').val()<0 || $("#junior_class").children('option:selected').val()>10)
					{
						showwronginfo("初中所在班级选项范围不正确！");
						return false;
					}		
					break;
				case "other":
					return true;
				default:
					showwronginfo("您提交的内容存在错误！");
					return false;
			}
			if($("#junior_school").children('option:selected').val()=="")
			{
				showwronginfo("您没有选择初中所在学校！");
				return false;
			}
			if($("#junior_enter_year").children('option:selected').val()=="")
			{
				showwronginfo("您没有选择初中入学年份！");
				return false;
			}
			if($("#junior_class").children('option:selected').val()=="")
			{
				showwronginfo("您没有选择初中所在班级！");
				return false;
			}
			if($("#junior_schoolno").val()=="")
			{
				showwronginfo("您没有输入您的初中学号！");
				return false;
			}
			if($("#junior_schoolno").val().length!=8)
			{
				showwronginfo("学号长度不正确！请检查您的学号是否为八位数。格式应该为[入学年份][班级][班级内学号]的八位数学号。");
				return false;
			}
			if($("#junior_schoolno").val().substr(0,4)!=$("#junior_enter_year").children('option:selected').val())
			{
				showwronginfo("学号与入学时间不符！请检查您的学号开头四位数是否为"+$("#junior_enter_year").children('option:selected').val()+"，或者是您的入学年份是否选择正确！");
				return false;
			}
			if($("#junior_schoolno").val().substr(4,2)!=fillnum($("#junior_class").children('option:selected').val()))
			{
				showwronginfo("学号与入学时间不符！请检查您的学号开头五-六位数是否为"+fillnum($("#junior_class").children('option:selected').val())+"，或者是您的初中所在班级是否选择正确！");
				return false;
			}
			break;
		case 2:
			switch($("#senior_school").children('option:selected').val())
			{
				case "not_choose":
					showwronginfo("请选择您的高中学校！");
					return false;
					break;
				case "nfls_standard":
					if($("#junior_class").children('option:selected').val()<0 || $("#junior_class").children('option:selected').val()>8)
					{
						showwronginfo("初中所在班级选项范围不正确！");
						return false;
					}
					
					break;
				case "nflsxl_standard":
					if($("#junior_class").children('option:selected').val()<0 || $("#junior_class").children('option:selected').val()>6)
					{
						showwronginfo("初中所在班级选项范围不正确！");
						return false;
					}
					break;
				case "nflshx_junior":
					if($("#junior_class").children('option:selected').val()<0 || $("#junior_class").children('option:selected').val()>10)
					{
						showwronginfo("初中所在班级选项范围不正确！");
						return false;
					}		
					break;
				case "other":
					return true;
				default:
					showwronginfo("您提交的内容存在错误！");
					return false;
			}
			if($("#junior_school").children('option:selected').val()=="")
			{
				showwronginfo("您没有选择初中所在学校！");
				return false;
			}
			if($("#junior_enter_year").children('option:selected').val()=="")
			{
				showwronginfo("您没有选择初中入学年份！");
				return false;
			}
			if($("#junior_class").children('option:selected').val()=="")
			{
				showwronginfo("您没有选择初中所在班级！");
				return false;
			}
			if($("#junior_schoolno").val()=="")
			{
				showwronginfo("您没有输入您的初中学号！");
				return false;
			}
			if($("#junior_schoolno").val().length!=8)
			{
				showwronginfo("学号长度不正确！请检查您的学号是否为八位数。格式应该为[入学年份][班级][班级内学号]的八位数学号。");
				return false;
			}
			if($("#junior_schoolno").val().substr(0,4)!=$("#junior_enter_year").children('option:selected').val())
			{
				showwronginfo("学号与入学时间不符！请检查您的学号开头四位数是否为"+$("#junior_enter_year").children('option:selected').val()+"，或者是您的入学年份是否选择正确！");
				return false;
			}
			if($("#junior_schoolno").val().substr(4,2)!=fillnum($("#junior_class").children('option:selected').val()))
			{
				showwronginfo("学号与入学时间不符！请检查您的学号开头五-六位数是否为"+fillnum($("#junior_class").children('option:selected').val())+"，或者是您的初中所在班级是否选择正确！");
				return false;
			}
			break;
			
		
    }
	document.getElementById("info_box").style.display="none";
	return true;
    
}
*/