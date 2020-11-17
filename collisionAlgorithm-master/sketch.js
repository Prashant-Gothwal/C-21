var fixedRect, movingRect;
var car, wall;
function setup() {
  createCanvas(1200, 800);
  movingRect = createSprite(600, 400, 50, 80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(400, 200, 80, 30);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  car = createSprite(50, 400, 20, 20);
  car.velocityX = 2;
  car.shapeColor = "white";
  wall = createSprite(550, 400, 20, 50)
  wall.shapeColor = "yellow";
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(car, wall)) {
    car.shapeColor = "blue";
    wall.shapeColor = "blue";
  }
  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  if (isTouching(fixedRect, movingRect)) {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(car,wall);

  drawSprites();
}
