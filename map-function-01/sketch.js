// umit sen - izmir - 2019
let alfa = 12;
let rds = 15; // radius
let cx,cy,sw; // centerX,centerY,strokeWeight
let speed = 0.5;

function setup() {
  createCanvas(450, 450);
  cx=width/2;
  cy=height/2;
}

function draw() {
  background(220);
  for(var i=0;i<360; i+=alfa){
    angleMode(DEGREES);
    var x = cx+rds*cos(i);
    var y = cy+rds*sin(i);
    stroke(0);
    strokeWeight(1);
    ellipse(x,y,10,10);
    stroke(0);
    strokeWeight(sw);
    line(cx,cy,x,y);
  }

  if(rds<=200){
    sw = map(rds,0,200,5,0.01);
    clrr = map(rds,0,200,0,255);
  }
  if(rds>210){speed = -0.5}
  if(rds<10){speed = 0.5}
  rds +=speed;
}

