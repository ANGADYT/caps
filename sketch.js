var runner,bg,loin,coin

var lionG,coinG

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
    bgImg = loadImage("background.jpg");
    runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
    lionImg = loadImage("image.png");
    coinImg = loadImage("New Project (2).png");
}

function setup() {
    canvas = createCanvas(400,600);

score = 0
//=============BG==============//
    bg=createSprite(200,300);
    bg.addImage(bgImg);


    
 
    //=============runner==============//
    runner=createSprite(200,530,20,20);
    runner.addAnimation("Running",runnerImg);
      
    lionG=new Group();
    coinG=new Group();

    
}

function draw() {

    
    
    if(gameState===PLAY){
        runner.x=World.mouseX
      

        if (lionG.isTouching(runner)) {
            lionG.destroyEach(); 
            gameState=END 
          }    

          if (coinG.isTouching(runner)) {
             Score =score+1
             coinG.destroyEach(); 
          }  
          createlion();
          coinlion();
       }

    
  

       



    background(0);
    drawSprites();
    textSize(16)
    text("Score "+score,330,15)
    if(gameState===END){


        textSize(40)
        text("GAME OVER",100,300)

        
       }
    }



    function createlion() {
        if (World.frameCount % 200 == 0) {
       var lion = createSprite(Math.round(random(50, 350),40, 10, 10));
       lion.addImage(lionImg);
       lion.velocityY = 3;
        lion.lifetime = 200;
        lionG.add(lion);
       }
    }
    function coinlion() {
        if (World.frameCount % 200 == 0) {
       var coin = createSprite(Math.round(random(50, 20),40, 10, 10));
       coin.addImage(coinImg);
       coin.velocityY = 2;
        coin.lifetime = 200;
        coinG.add(coin);
       }
    }