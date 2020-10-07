
var car,wall;
var speed,weight;
function setup() {
  createCanvas(1000,400);
  car  = createSprite(50, 50, 30, 20);
  wall = createSprite(800,50,20,50);
  speed = random(+5,+15);
  weight = random(400,1500);
}

function draw() {
  background("black");  
  car.velocityX=speed;
    if (wall.x - car.x  < car.width/2 + wall.width/2){
      car.velocityX=0;
      var deformation = 0.5*weight*speed*speed/20
      if (deformation>1800){
        car.shapeColor=color(230,230,0);
      }
      if (deformation<1800 && deformation>100){
        car.shapeColor=color(255,0,0);
      }
      if (deformation<1000){
        car.shapeColor=color(0,255,0);
      }
    } 
  
  drawSprites();
} 
