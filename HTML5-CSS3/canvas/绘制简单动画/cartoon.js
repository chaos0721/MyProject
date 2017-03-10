var i;
function draw(id){
	var canvas = document.getElementById(id);
	context = canvas.getContext('2d');
}
	i=0;
function huas(){
	context.fillStyle = "green";
	context.fillRect(i,i,10,10);
	context.fillRect(400-i,400-i,10,10);
	// i++;进度条
	i=i+20;
}
setInterval(huas,400);
// 另外一种擦除犯法clearRect(x,y,w,h)