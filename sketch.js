var fixedRect, movingRect;
var box1,box2,box3,box4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(100,100,30,40)
  box1.shapeColor = "green"
  
  box2 = createSprite(200,100,30,40)
  box2.shapeColor = "green"
  
  box3 = createSprite(400,100,30,40)
  box3.shapeColor = "green"
  
  box4 = createSprite(600,100,30,40)
  box4.shapeColor = "green"
  
  
  

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if( isTouching(movingRect,box2)){
  movingRect.shapeColor = "white";
  box2.shapeColor = "white";
}

else{
  movingRect.shapeColor = "green";
  box2.shapeColor = "green"
}
  drawSprites();
}

