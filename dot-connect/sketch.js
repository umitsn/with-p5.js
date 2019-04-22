// umit sen - izmir - 2019
let noktalar = [];
let noktaSayisi = 80;
let sw,clrr;

function setup() {
  createCanvas(600, 400);

  olustur();

  var btn = createButton(" Yenile");
  btn.addClass('fa fa-refresh');
  btn.mousePressed(olustur);
}

function draw() {
  background(230);
  for (var i of noktalar) {
    i.show();
    i.move();
    i.kontrol();
  }
  bagla();
}

function olustur() {
  noktalar = [];
  for (var i = 0; i < noktaSayisi; i++) {
    var n1 = random(-1, 1);
    var n2 = random(-0.1, 0.1);
    noktalar.push(new nokta(random(width), random(height), n1, n2));
  }
}

function bagla() {
  
  for (var i of noktalar) {
    for (var j of noktalar) {
      var d = dist(j.x, j.y, i.x, i.y);
      if (d<=80) {
        sw = map(d,0,80,2,0.1);
        if(d<50){
          clrr = color(0,0,255,150);
        }else {
          clrr = color(255,0,0,150);
        }
        stroke(clrr);
        strokeWeight(sw);
        line(j.x, j.y, i.x, i.y);        
      }
      
    }//for sonu
  }//for sonu
}


class nokta {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }

  show() {
    stroke(0);
    fill(0);
    ellipse(this.x, this.y, 5, 5);
  }

  move(n) {
    this.x += this.dx;
    this.y += this.dy;
  }

  kontrol() {
    if (this.y < 0) {
      this.y = height;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.x > width) {
      this.x = 0;
    }
  }
}