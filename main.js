canvas= document.getElementById("myCanvas")
ctx= canvas.getContext("2d")

cw=75
ch=100
cx=5
cy=225

var background_image = "parkingLot.jpg";
 var greencar_image = "car2.png";



function add() {
	background_imageTag=new Image()
	background_imageTag.onload = uploadBackground
	background_imageTag.src= background_image

	greencar_imageTag=new Image()
	greencar_imageTag.onload = uploadgreencar
	greencar_imageTag.src= greencar_image
}

function uploadBackground() {
	ctx.drawImage(background_imageTag,0,0,canvas.width, canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag,cx,cy,cw, ch)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (cy >= 0 ){
		cy=cy-10
		console.log(cx + "," + cy)
		uploadBackground()
		uploadgreencar()

	}
}

function down()
{
	if (cy <= 300 ){
		cy=cy+10
		console.log(cx + "," + cy)
		uploadBackground()
		uploadgreencar()

	}
}

function left()
{
	if (cx >= 0 ){
		cx=cx-10
		console.log(cx + "," + cy)
		uploadBackground()
		uploadgreencar()

	}
}

function right()
{
	if (cx <= 700 ){
		cx=cx+10
		console.log(cx + "," + cy)
		uploadBackground()
		uploadgreencar()

	}
}
