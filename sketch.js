var x=50;
var y=50;

function setup() {
var myCanvas = createCanvas (800,250);
myCanvas.parent ('mySketch');
}

function draw (){

    noCursor();
    // noFill();
    // stroke(mouseX,100,mouseY);
    // rectMode(CENTER);
    // rect(mouseX,mouseY,x,y);
    stroke(mouseX,100,mouseY);
    noFill();
    ellipse(mouseX, mouseY, x, y);
    x=x+4;
    y=y+4;

    if (x>500) {
      x=0;
      clear();
    }

    if (y>500) {
      y=0;
    }

}

function mousePressed() {
  x=0;
  y=0;
  background(random(0,255),random(0,255),random(0,255),90);
}

function mouseDragged() {
  fill(mouseX,100,mouseY);
  ellipse(mouseX,mouseY,x,y);

}
