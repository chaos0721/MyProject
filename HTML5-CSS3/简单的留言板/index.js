function saveStorage(id){
	var data =document.getElementById(id).value;
	var time = new Date().getTime();
	localStorage.setItem(time,data);
	alert("数据已经被保存");
	loadStorage('msg');
}
function loadStorage(id){
	var reselt = 
}