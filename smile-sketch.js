function setup() { 
  createCanvas(400,400);
  background(250,250,250);
}

function draw() {
  //face
  fill(500,300,20);
	strokeWeight(2);
  ellipse(200,200,350,350);
  //olhos
  fill(0,0,0);
  stroke(0,0,0);
  ellipse(150,150,70,120);
  ellipse(250,150,70,120);
  //boca
  noFill();
	strokeWeight(5);
 arc(200, 220, 180, 180, 	QUARTER_PI,PI-QUARTER_PI);
  
} 