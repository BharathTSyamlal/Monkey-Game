
var monkey , monkey_running , ground;
var bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(80,300,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  
  ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  
  monkey.setCollider("circle",0,0,300)
  monkey.debug = true;
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
  
}


function draw() {
  background(400);
  
  stroke("black");
  textSize(20);
  fill("black");
  score = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + score,100,50)
  
  ground.velocityX = -4
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 170) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  drawSprites()
  food()
  obstacle()

  monkey.collide(ground)
}

function food(){
  if (frameCount % 80 === 0){
   var banana = createSprite(400,200,40,10);
    banana.scale = 0.1
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.velocityX = -4;
    banana.lifetime = 400
  FoodGroup.add(banana)
  }
  
  
  
}

function obstacle(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(500,310,20,20)
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2
  }
  
}


