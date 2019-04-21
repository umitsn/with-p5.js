// umit sen - izmir - 2019
let noktalar=[];
let noktaSayisi =120;

function setup() {
  createCanvas(600, 400);
  
  olustur();
  
  var btn = createButton("yenile");
  btn.mousePressed(olustur);
}

function draw() {
  background(230);
  for(var i of noktalar){
    i.show();
    i.move();
    i.kontrol();
  }
  bagla();
}

function olustur(){
  noktalar = [];
    for(var i=0;i<noktaSayisi;i++){
    var n1 = random(-1,1);
    var n2 = random(-0.1,0.1);
    noktalar.push(new nokta(random(width),random(height),n1,n2));
  }
}

function bagla(){
    for(var i of noktalar){
      for(var j of noktalar){
        var d = dist(j.x,j.y,i.x,i.y);
        if( d<=50){
          stroke(0,0,255,150);
          strokeWeight(0.5);
          line(j.x,j.y,i.x,i.y);
        }
        if(50<d && d<=80){
          stroke(255,0,0,100);
          strokeWeight(0.5);
          line(j.x,j.y,i.x,i.y);
        }      
      }
    }
}


class nokta{
  constructor(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }
  
  show(){
    stroke(0);
    fill(0);
    ellipse(this.x,this.y,5,5);
  }
  
  move(n){
    this.x += this.dx; 
    this.y += this.dy; 
  }
  
  kontrol(){
  	if(this.y<0){this.y=height;}
	if(this.y>height){this.y=0;}
	if(this.x<0){this.x=width;}
	if(this.x>width){this.x=0;}
  }
}