var xmlhttp ;
function getData(){
	var userName = document.getElementById("username").value;

	if(window.XMLHttpRequest){
		//针对除IE6以外的浏览器
		 xmlhttp =new XMLHttpRequest();
		//针对特定版本的Mozillar浏览器bug
		if(xmlhttp.overrideMimeType){
			xmlhttp.overrideMimeType("text/xml");
		}
	}else if(window.ActiveXObject){
		//针对IE6、IE6以下
		//两个用于创建xmlreqest对象的控件
		var activeName = ["MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
		for(var i=0;i<activeName.length;i++){
			try{
				xmlhttp =new ActiveXObject(activeName[i]);
				break ;
			}catch(e){
			}
		}
	}
	//确认对象xmlhttprequest对象创建成功
	if(!xmlhttp){
		alert("对象创建失败") ;
		return ;
	}else{
		alert(xmlhttp);
	}
	
	//2.注册回调函数
	xmlhttp.onreadystatechange = callback ;
	//3.设置链接信息
	//第三个参数true表示异步
	//GET
	//xmlhttp.open("GET","AjaxService?naem="+userName,true) ;
	//POST
	xmlhttp.open("POST","AjaxService",true) ;
	//POST方式需要自己设置http请求头
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//POST方式发送信息
	xmlhttp.send("name="+userName) ;
	
	
	//4.发送数据
	//同步方式下，send会等到服务器数据回来才执行
	//异步立即执行,
	//GET发送数据
	//xmlhttp.send(null);
		
}
//回调函数
function callback(){
	if(xmlhttp.readyState == 4){
		if(xmlhttp.status == 200){
			//获取服务器返回的数据
			var responseText = xmlhttp.responseText ;
			//下面操作BOM
		}
	}
}
