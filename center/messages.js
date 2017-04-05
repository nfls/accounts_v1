$.ajax({
	type: "POST",
	url: "https://app.nfls.io/API/User/User.php?action=GetSystemMessage",
	data: 
	{
		token: $.cookie('token'),
	},
	dataType: "json",
	success: function (message) {
		//var message=$.parseJSON(message)
		if(message.status=="success")
		{
			delete message.status;
			//alert("a");
			$.each(message,function(i,mes){
				addMessage(mes.detail,mes.title,mes.time,mes.type);
			});
			
		}
		else
		{

		}
			
	},
	error: function (message) {
	}
});
function addMessage(mes,s_title,s_time,type)
{
	var notice_box=document.getElementById("system_noticebox");

	//var x_content = document.createElement("div");  
	//x_content.setAttribute("class","x_content");

	//var ul = document.createElement("ul");
	//ul.setAttribute("class","list-unstyled timeline");

	var li = document.createElement("li");
	li.setAttribute("class","collection-item");
	li.innerHTML='<span class="blue-text text-darken-2">'+type+'  </span>'+'<a>'+s_title+'</a>'+'<span>'+s_time+'<br>'+mes;
	notice_box.appendChild(li);
	//li.appendChild(block);
}
/*
	var block = document.createElement("div");  
	block.setAttribute("class","block");

	var tags = document.createElement("div"); 
	tags.setAttribute("class","tags") ;
	tags.innerHTML='<a href="" class="tag"><span>'+type+'</span></a>';

	var block_content = document.createElement("div");  
	block_content.setAttribute("class","block_content");
	
	var title = document.createElement("h2");  
	title.setAttribute("class","title");
	title.innerHTML="<a>"+s_title+"</a>";
	
	var time = document.createElement("div");
	time.setAttribute("class","byline");
	time.innerHTML="<span>"+s_time;

	var detail = document.createElement("p");
	detail.setAttribute("class","excerpt");
	detail.innerHTML=mes;

	block_content.appendChild(title);
	block_content.appendChild(time);
	block_content.appendChild(detail);
	
	block.appendChild(tags);
	block.appendChild(block_content);
	li.appendChild(block);
	//ul.appendChild(li);
	//x_content.appendChild(ul);
	notice_box.appendChild(li);
	//console.log(notice_box.innerHTML);
}
*/
