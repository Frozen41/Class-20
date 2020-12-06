var movingRect, fixedRect;
var a1, a2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  a1 = createSprite(600, 50, 50, 50);
  a2 = createSprite(600, 350, 50, 50);
  a1.velocityY = 2;
  a2.velocityY = -2;
}

function draw() {
  background("lightblue");  
  console.log("Hi!")
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  console.log(movingRect.x);
  console.log(fixedRect.x);
  if(a1.y - a2.y < a1.height/2 + a2.height/2 &&
    a2.y - a1.y < a1.height/2 + a2.height/2 ){
      a1.velocityY = a1.velocityY * (-1);
      a2.velocityY = a2.velocityY *(-1);
    }
  drawSprites();
}