var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = 80;
}

function draw() {
  background(0);  
  car.velocityX = speed;

    if(isTouching(car,wall)===true){
      car.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed/22509;
      if(deformation>180){
        car.shapeColor = color(255,0,0);
      }
      if(deformation<180 && deformation>100){
        car.shapeColor = color(230,230,0);
      }
      if(deformation<100){
        car.shapeColor = color(0,255,0);
      }
    }





  drawSprites();
}

function isTouching(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
      return true;
  }
  else {
    return false;
    
  }
}