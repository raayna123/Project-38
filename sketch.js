

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PLAY = 1
var END = 0;
var gameState = PLAY;
var cactuses = [];
var clouds = [];
var trexImg;
var trex;
var cactusImage;
var groundImage;
var cloudImage;
var gamrOverImage;

function preload() {
  trexImg = loadImage("images/trexImage.png");
  cactusImage = loadImage("images/cactus.png");
  groundImage = loadImage("images/ground2.png");
  cloudImage = loadImage("images/cloudImg.png");
  gamrOverImage = loadImage("images/gameOverImg.png");
}

function setup() {
  createCanvas(displayWidth - 20,displayHeight - 30);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  trex = createSprite(235, displayHeight - 160, 60, 60);
  trex.addImage("trex", trexImg);
  trex.scale = 0.15;
  trex.velocityX = 5;
  
  ground = createSprite(200, displayHeight - 130, displayWidth*4, 20)
  // ground.addImage("ground", groundImage);

  for(i = 0; i < 2; i++) {
    
    spawnCactus();
  }

  for(i = 0; i < 4; i++) {
    spawnClouds();
  }
    
}

function draw() {
  background("white");

  trex.collide(ground);

  if(gameState == PLAY) {
    if(trex.x - ground.x >= 1000) {
      ground.x = trex.x + 1000;
  }
  // if (ground.x > 600){
  //   ground.x = ground.width/6;
  // }
    
  
  
    for(i = 0; i < clouds.length; i++) {
      displayCactus();
      displayCloud();
    }
      
   
      if(keyDown("space")){
        trex.velocityY = -14 ;
      }
      

    trex.velocityY = trex.velocityY + 0.8;
  
    camera.position.x = trex.x;
   
    if(trex.isTouching(cactuses)) {
      gameState = END;  
    }
  
  } else if(gameState == END) {
    trex.velocityX = 0;
    var gameOver = createSprite(trex.x, trex.y - 200);
    gameOver.addImage("gamrOver", gamrOverImage);
  }
    



  
  drawSprites();
}


function spawnCactus() {
  for(i = 0; i < 2; i++) {
    cactus = createSprite(935 + (i *730), displayHeight - 160, 30, 30);
    cactus.addImage("cactus", cactusImage);
    cactus.setCollider("rectangle", 0, 0, 10, 10);
    cactuses.push(cactus);
  }
}

function displayCactus() {
  if(trex.x - cactus.x >= 1000) {
    cactus.x = trex.x + 400;
}
}

function spawnClouds() {
  for(i = 0; i < 4; i++) {
    cloud = createSprite(935 + (i*830), displayHeight - 560, 30, 30);
    cloud.addImage("cloud", cloudImage);
    cloud.setCollider("rectangle", 0, 0, 10, 10);
    clouds.push(cloud);
  }
}

function displayCloud() {
  if(trex.x - cloud.x >= 600) {
    cloud.x = trex.x + 400;
  }
}