function draw(id){
	var canvas = document.getElementById(id);
	var context = canvas.getContext("2d");
	context.fillStyle = 'green';
	context.fillRect(0,0,800,300);
	context.fillStyle = '#fff';
	context.strokeStyle = 'white';
	context.font = "bold 40px '啥意思啊','微软雅黑','宋体'";
	context.textBaseline = 'hanging';
	context.textAlign = 'start';
	context.fillText('我是谁',0,0);	
	context.strokeText('我是谁',0,40);
	window.location = canvas.toDataURL('image/jpeg');
}