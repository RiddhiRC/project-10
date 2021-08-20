var runner
var path
function preload(){
  //pre-load images
running_runner=loadAnimation("runner-1.png","runner-2.png")
path=loadImage("path.png")
  
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner=createSprite(200,200, 20,20);
  runner.addAnimation(running_runner);
  
}

function draw() {
  background(0);
drawSprite();
}
