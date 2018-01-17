function setup() {
var myCanvas = createCanvas (500,500);
myCanvas.parent ('mySketch');
background(255);
}

function draw (){
  // if (mouseIsPressed==true){
  //   fill(255);
  //   rectMode(CENTER);
  //   rect(mouseX, mouseY, 80, 80);
  // }else{
    noCursor();
    stroke(mouseX,100,mouseY);
    ellipse(mouseX, mouseY, 50, 50);

}

function mousePressed() {
  clear();
}
