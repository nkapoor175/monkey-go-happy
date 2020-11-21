
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600);
  
  monkey = createSprite(100,480);
  monkey.scale = 0.2;
  monkey.addAnimation("running", monkey_running);
  monkey.velocityY = 0;

  ground = createSprite(300,545,600,10);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
}


function draw() {
  background("pink");
  
  score =  Math.ceil(frameCount/frameRate());
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+ score, 200,50);
  
  if(keyDown("space") && monkey.y >= 400){
    monkey.velocityY = -23;
  }
  monkey.velocityY = monkey.velocityY + 1;
  
  monkey.collide(ground);
  
  Food();
  stone();

  drawSprites();
}

function Food(){
  
  if(frameCount%80 === 0){
    banana = createSprite(600,0);
    banana.scale = 0.2
    banana.y = Math.round(random(150,230));
    banana.addImage("banana",bananaImage);
    banana.velocityX = -3;
    banana.lifetime = 250;
    FoodGroup.add(banana);
  }
}

function stone(){
  if(frameCount%300 === 0){
   obstacle = createSprite(600,480);
   obstacle.addImage("stone",obstacleImage);
   obstacle.scale = 0.3;
   obstacle.velocityX = -3;
   obstacle.lifetime = 250;
   obstacleGroup.add(obstacle);
  }
}




