let ground;
let lander;
var lander_img;
var bg_img;

var vy = 0;
var vx =0;
var g = 0.05;


function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg_sur.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(500,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  lander.position.x+=vx;
  
  //if lander x position is less than width/2+100 and less than width/2-100
  //and y position is less than height/2+50 and more than height/2-50
  //change x and y velocity to 0
  if(lander.x<width/2+100 &&lander.x>width/2-100&&lander.y<height-50&&lander.y>height-150){
    vx=0
    vy=0
  }
  




  drawSprites();
}

function keyPressed()
{
  
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
    
  }
  if(keyCode==RIGHT_ARROW)
  {
    rightward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
  if(keyCode==LEFT_ARROW)
  {
    leftward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }

}

function upward_thrust()
{
  vy = -1;
}

function rightward_thrust()
{
  
  vx = 1;
}

function leftward_thrust()
{
  vx = -1;
}




