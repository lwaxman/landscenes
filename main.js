var brushSize = 15;

function setup(){
	width = window.innerWidth;
	height = window.innerHeight;
	canvas = createCanvas(width, height);
	canvas.id("landscape");
	noLoop();
	noStroke();
	colorMode(HSB, 255);
	// background('#C2EBFF');
}

function draw(){
	drawBackground();
	drawMountains();
}


function drawBackground(){
	//drawbrushstrokes the whole background, 
	//based on perlin noise? -- clouds 
	// background('#C2EEFF');
	var skyPalette = color('#53AD82'); //color(214, 255, 255);
	// skyPalette[0] = color(204, 31, 90);

	for(var i=0; i<width/brushSize; i++){
		for(var j=0; j<height/brushSize; j++){
			tripleStroke(skyPalette, i*brushSize, j*brushSize);
		}
	}

}


function tripleStroke(p, x, y){
	
	fill(hue(p), saturation(p), brightness(p)+random(-10,10), 150);
	ellipse(x+random(-5, 5), y+random(-5,5), brushSize*random(1, 2), brushSize*random(1, 2));

	fill(hue(p)+random(-10,0), saturation(p), brightness(p)+random(-10,10), 150);
	ellipse(x+random(-5, 5), y+random(-5,5), brushSize*random(1, 2), brushSize*random(1, 2));

	fill(hue(p)+random(0,10), saturation(p), brightness(p)+random(-10,10), 150);
	ellipse(x+random(-5, 5), y+random(-5,5), brushSize*random(1, 2), brushSize*random(1, 2));
}


function brushStroke(p, x, y){
	
}
