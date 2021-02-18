var car1;
var car2;
var car3;
var car4;

var wall;

var speed1;
var speed2;
var speed3;
var speed4;

var deform1;
var deform2;
var deform3;
var deform4;

var weight1;
var weight2;
var weight3;
var weight4;

function setup() {
  createCanvas(650,550);
  car1 = createSprite(50, 100, 20, 20);
  car2 = createSprite(50, 225, 20, 20);
  car3 = createSprite(50, 350, 20, 20);
  car4 = createSprite(50, 475, 20, 20);

  wall = createSprite (600, 200, 20, 700);

  speed1 = Math.round(random(55, 90));
  speed2 = Math.round(random(55, 90));
  speed3 = Math.round(random(55, 90));
  speed4 = Math.round(random(55, 90));

  weight1 = Math.round(random(400, 1500));
  weight2 = Math.round(random(400, 1500));
  weight3 = Math.round(random(400, 1500));
  weight4 = Math.round(random(400, 1500));

  deform1 = (0.5*weight1*speed1*speed1)/22500;
  deform2 = (0.5*weight2*speed2*speed2)/22500;
  deform3 = (0.5*weight3*speed3*speed3)/22500;
  deform4 = (0.5*weight4*speed4*speed4)/22500;

}

function draw() {
  background(10);

  car1.velocityX = speed1;
  car1.collide (wall);

  if (deform1 < 100){
    car1.shapeColor = "green";
  } else if (deform1 > 101 && deform1 < 180){
    car1.shapeColor = "yellow";
  } else if (deform1 > 181){
    car1.shapeColor = "red";
  } 

  car2.velocityX = speed2;
  car2.collide (wall);

  if (deform2 < 100){
    car2.shapeColor = "green";
  } else if (deform2 > 101 && deform2 < 180){
    car2.shapeColor = "yellow";
  } else if (deform2 > 181){
    car2.shapeColor = "red";
  } 

  car3.velocityX = speed3;
  car3.collide (wall);

  if (deform3 < 100){
    car3.shapeColor = "green";
  } else if (deform3 > 101 && deform3 < 180){
    car3.shapeColor = "yellow";
  } else if (deform3 > 181){
    car3.shapeColor = "red";
  } 

  car4.velocityX = speed4;
  car4.collide (wall);

  if (deform4 < 100){
    car4.shapeColor = "green";
  } else if (deform4 > 101 && deform4 < 180){
    car4.shapeColor = "yellow";
  } else if (deform4 > 181){
    car4.shapeColor = "red";
  } 

  drawSprites();
}
