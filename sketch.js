var player;
var score=0;
var wormgroup;

function preload(){
  wormImage=loadImage('images/worm.png')
  swampImage=loadImage("images/swampImg.png")
  playerImage=loadImage("images/frog.png")
}


function setup() {
  createCanvas(600,600);
  swamp=createSprite(300,300);
  swamp.scale=2.5;
  swamp.addImage(swampImage);

player=createSprite(40,550,30,30);
player.addImage(playerImage);
player.scale=0.4;

wormgroup= new Group();
}

function draw() {
  background("black");  
  stroke("red");
  
  player.x=mouseX;
  player.y=mouseY;
  

  generateWorms();

  for(var i = 0 ; i< (wormgroup).length ;i++){
    var temp = (wormgroup).get(i) ;
    if (player.isTouching(temp)) {
      score++;
      temp.destroy();
      temp=null;
      }   
    }
  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}
function generateWorms(){
  if (frameCount%30===0){
    console.log(frameCount);
    var worm = createSprite(random(40,380),random(290,380),40,5);
    worm.scale =random(0.1,0.3);
  worm.addImage(wormImage);
    worm.VelocityX=random(-4,4);
    worm.velocityY=random(-4,4);
    wormgroup.add(worm);
  }
  }
