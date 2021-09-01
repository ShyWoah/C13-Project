var garden,rabbit;
var gardenImg,rabbitImg;
var apple, spawnApples, appleImage;
var leaf, spawLeaves, leafImage, spawnOrangeLeaves, Oleaf, OleafImage, spawnRedLeaves, Rleaf, RleafImage;
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
  OleafImage = loadImage("orangeLeaf.png");
  RleafImage = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;
   
  
  function spawnApples(){
   
    apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImage);
  apple.velocityY = +3;
  apple.scale = 0.07;

  }
  function spawnLeaves(){
    
    leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImage);
  leaf.velocityY = +3;
  leaf.scale = 0.05;

  }
  function spawnOrangeLeaves(){
   
    Oleaf = createSprite(random(50,350),40,10,10);
  Oleaf.addImage(OleafImage);
  Oleaf.velocityY = +3;
  Oleaf.scale = 0.05;

  }
  function spawnRedLeaves(){
   
    Rleaf = createSprite(random(50,350),40,10,10);
  Rleaf.addImage(RleafImage);
  Rleaf.velocityY = +3;
  Rleaf.scale = 0.05;

  }
  var select_sprites = Math.round(random(1,2))

  if(frameCount % 80 == 0){
  if(select_sprites == 1){
    spawnApples();
  }
  else{
    spawnRedLeaves();
  spawnOrangeLeaves();
  spawnLeaves();
  }
}
  drawSprites();

}