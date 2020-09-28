function setup() {
  createCanvas(800,400);
  wall=createSprite(50,300, 1500, 5);
  wall=createSprite(50,100, 1500, 5);
  wall=createSprite(50,200, 1500, 5);
  wall=createSprite(770,350, 20, 40);
  wall=createSprite(770,350, 20, 40);
  wall=createSprite(770,150, 20, 40);
  wall=createSprite(770,250, 20, 40);
  wall=createSprite(770,150, 20, 40);
  wall=createSprite(770,50, 20, 40);
  car1=createSprite(750,150, 20, 20);
  car1.shapeColor="green";
  car2=createSprite(750,350, 20, 20);
  car2.shapeColor="white";
  car3=createSprite(750,250, 20, 20);
  car3.shapeColor="red";
  car4=createSprite(750,50, 20, 20);
  car4.shapeColor="blue";
  ground=createSprite(1,20,2,800);
  ground.shapeColor="black";


}

function draw() {
  background("black");  

  car4.velocityX=-10;

  if (car4.isTouching(ground)) {
    car4.velocityX=-0; 
  }


  


 
  drawSprites();
}