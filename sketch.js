var PLAY=1;
var END=0;
var gameState=PLAY;
var iss,issImg,spct,spct1,spct2,spct3,spct4,space,spacebg;
var spct_Img1,spct_Img2,spct_Img3,spct_Img4 

function preload(){
  issImg=loadImage("iss.png");
  space=loadImage("spacebg.jpg");
  spct_Img1=loadAnimation("spacecraft1.png");
  spct_Img2=loadAnimation("spacecraft2.png");
  spct_Img3=loadAnimation("spacecraft3.png");
  spct_Img4=loadAnimation("spacecraft4.png");


}


function setup() {
  createCanvas(windowWidth,windowHeight);

  spct=createSprite(1000,800,50,50);
  spct.addAnimation("spct",spct_Img1);
  spct.addAnimation("spct1",spct_Img2);
  spct.addAnimation("spct2",spct_Img3);
  spct.addAnimation("spct3",spct_Img4);
 
  
  spct.scale=0.3;

  iss=createSprite(400, 330, 50, 50);
  iss.addImage(issImg);
  iss.scale=1.5
}


function draw() {
  background(space); 
  if(gameState===PLAY){
  if(keyDown("down")){
     spct.y=spct.y+5;
     spct.changeAnimation("spct1",spct_Img2);
}
if(keyDown("up")){
  spct.y=spct.y-5;
  spct.changeAnimation("spct4",spct_Img3);
  }
if(keyDown("right")){
spct.x=spct.x+5;
spct.changeAnimation("spct3",spct_Img4);
}
if(keyDown("left")){
spct.x=spct.x-5;
spct.changeAnimation("spct2",spct_Img1);

}}else if(gameState===END){
  if(spct.isTouching(iss)){
  text("DOCKING SUCCESSFUL",600,500)
  spct.x=spct.x+0;
  spct.y=spct.Y+0;
  }
}


  drawSprites();
}