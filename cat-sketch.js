function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255,228,225);
  
  //tail
  fill(240,230,140);
	stroke(204,102,0);
  ellipse(255, 240, 175, 175);
  fill(255,228,225);
	noStroke();
  ellipse(250, 200, 175, 175);

  //body
  fill(240,230,140);
  stroke(204,102,0);
  ellipse(200, 250, 175, 175);
  
  //head
  fill(240,230,140);
	stroke(204,102,0);
	ellipse(200,140,120,120);
  
  //ears
  fill(204,102,0);
  triangle(125, 59, 151, 119, 175, 90);
  fill(0);
  fill(204,102,0);
  triangle(275, 60, 251, 123, 225, 95);
  fill(0);
  
  //eyes
  fill(255);
  fill(255);
  fill(0);
	fill(255,255,255);
	stroke(204,102,0);
	ellipse(182,135,20,25);
	fill(0);
	ellipse(182, 139, 17, 15);
	fill(255,255,255);
	stroke(204,102,0);
	ellipse(217,135,20,25);
	fill(0);
  ellipse(217, 139, 17, 15);
	
  //boca
  noFill();
  arc(189, 164, 20, 35, 	QUARTER_PI,PI-QUARTER_PI);
	arc(170, 127, 150, 80, 	QUARTER_PI,PI-QUARTER_PI);
	arc(170, 130, 150, 80, 	QUARTER_PI,PI-QUARTER_PI);
	arc(206, 164, 20, 35, 	QUARTER_PI,PI-QUARTER_PI);
	arc(228, 130, 150, 80, 	QUARTER_PI,PI-QUARTER_PI);
	arc(228, 127, 150, 80, 	QUARTER_PI,PI-QUARTER_PI);
  
  //nose
	fill(0);
	stroke(204,102,0);
  ellipse(198, 165, 14, 14); 
}