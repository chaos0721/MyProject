function draw(id){
	var canvas = document.getElementById(id);
	var ctx = canvas.getContext('2d');
	ctx.fillStyle ='#000'
	ctx.strokeStyle = '#f60';
	ctx.lineWidth = 10;
	ctx.fillRect(0,0,400,300)
	ctx.strokeRect(50,50,180,120)
	ctx.strokeRect(100,100,180,120)
}