var seaImg; 
var ship, ship_sailing; 

function preload(){
ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(600,600);

  ship = createSprite(150,300,50,50);
  ship.addAnimation("sailing",ship_sailing);
  ship.scale=0.3;

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5
  sea.scale = 0.4
}

function draw() {
  background("blue");
 sea.depth = ship.depth;
 ship.depth = ship.depth+1
  sea.velocityX = -2

 if(sea.x < 0){
  sea.x = sea.width/8;
}
drawSprites();
}