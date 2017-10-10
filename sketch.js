function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
   background(0,0,0);
  frameRate(20);
}
function draw() {
translate(width/2,height/2);
rotate(frameCount*2);
stroke(lerpColor(color(255,0,0), color(255,255,255), frameCount/100));
line(200,120,100*sin(frameCount*100),100);
line(100*cos(frameCount*10),10,10,100*sin(frameCount*10));
 noFill()
  if (frameCount == 200) {
    noLoop();
  }
  }