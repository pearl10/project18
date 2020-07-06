//Global Variables
var player,player_running;
var banana,bananaImage,bananaGroup;
var obstacle,obstaclesImage,obstaclesGroup;
var backround,backround_running;
var score=0;
var ground,groundImage;
var edges
function preload(){


player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

backround_running=loadImage("jungle.jpg");

 
  bananaImage = loadImage("Banana.png")


  obstaclesImage = loadImage("stone.png")


}

function setup() {
  createCanvas(600,500);


  backround= createSprite(300,150);
 backround.velocityX=-2
backround.scale=1.5;
backround.addImage("stop",backround_running );


   
  ground=createSprite(300,400,600,5);
 // ground.addImage("ground",groundImage);
 ground.scale=0.2
ground.visible = false;
  
  player = createSprite(250,300,20,50);
  player.addAnimation("run",player_running );
  player.scale = 0.1;


  bananaGroup = new Group();

  obstaclesGroup = new Group();



}


function draw(){
 
  
  if(backround.x<0){
  backround.x=backround.width/2;   
 
  }
  

  
  if(keyDown("space") ){ 
player.velocityY=-10;
}
 if (player.isTouching(bananaGroup)){
  score=score +2;   
 bananaGroup.destroyEach();    
     
   switch (score){
    case 10:player.scale=0.12;
      break;
    case 20:player.scale=0.14;
      break;
    case 30:player.scale=0.16;
      break;
    case 40:player.scale=0.18;
      break;
    default:break;
   
   }
    
 } 
  
 
 if (player.isTouching(obstaclesGroup)){
 player.scale=0.1;
 } 
  
  
  
  
 
  
  player.velocityY=player.velocityY+0.8;
 
player.collide(ground);
  
  spawnObstacles();
  spawnBanana();
  
  
  
  drawSprites();
stroke("white");
textSize(20);
 fill("white"); 
  text("Score: "+ score, 450,50);

}

function spawnBanana() {
  //write code here to spawn the clouds
  if(frameCount%100===0){
var banana = createSprite(590,300,10,10);
    banana.y = random(250,300);
    banana.addImage("cloud",bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
banana.lifetime=190 ;  
bananaGroup.add(banana);

}
    
     
  
  
}

function spawnObstacles(){
 if(frameCount%250===0){
var obstacle = createSprite(590,400,10,10);
   
    obstacle.addImage("cloud",obstaclesImage);
   obstacle.scale = 0.1;
  obstacle .velocityX = -3;
 
obstacle.lifetime=190;   
obstaclesGroup.add(obstacle);
}


}