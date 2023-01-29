
var box;

function setup() {
  createCanvas(400,400);

  box = createSprite(200,200,20,20);

}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW) && box.position.x <= 390){

    box.position.x = box.position.x + 10;

  }

  if (keyIsDown(LEFT_ARROW) && box.position.x >= 10){

    box.position.x = box.position.x - 10;

  }

  if (keyIsDown(UP_ARROW) && box.position.y >= 10){

    box.position.y = box.position.y - 10;

  }

  if (keyIsDown(DOWN_ARROW) && box.position.y <= 390){

    box.position.y = box.position.y + 10;

  }




  drawSprites();
}




