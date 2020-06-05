var player;
function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
player = createSprite(displayWidth/4,displayHeight/4);
wolf = createSprite(100,100);
lion = createSprite(100,100);
dog = createSprite(100,100);
panther = createSprite(100,100);
leftbutton = createButton('←');
rightbutton = createButton('→');
upbutton = createButton('↑');
downbutton = createButton('↓');
leftbutton.position(50,displayHeight-200);
rightbutton.position(100,displayHeight-200);
upbutton.position(75,displayHeight-225);
downbutton.position(75,displayHeight-175);
wall1 = createSprite(displayWidth/8,displayHeight/40,displayWidth/2,20);
wall2 = createSprite(displayWidth-200,displayHeight/40,displayWidth/2,20);
wall3 = createSprite(displayWidth/2,displayHeight/8,displayWidth/2+200,20);
wall4 = createSprite(displayWidth/8,displayHeight/4,displayWidth/2,20);
wall5 = createSprite(displayWidth-200,displayHeight/4,displayWidth/2,20);
wall6 = createSprite(displayWidth/2,displayHeight/3+30,displayWidth/2+200,20);
wall7 = createSprite(displayWidth/8,displayHeight/3+130,displayWidth/2,20);
wall8 = createSprite(displayWidth-200,displayHeight/3+130,displayWidth/2,20);
wall9 = createSprite(displayWidth/2,displayHeight/2+110,displayWidth/2+200,20);
wall10 = createSprite(displayWidth/2,displayHeight-200,displayWidth/2+200,20);
//wall11 = createSprite(displayWidth/2,displayHeight/8,displayWidth/2+200,20);
wall12 = createSprite(displayWidth/8,displayHeight-50,displayWidth/2,20);
wall13 = createSprite(displayWidth-200,displayHeight-50,displayWidth/2,20);
}
function draw() {
  background(0); 
  upbutton.mousePressed(()=>{
  player.y = player.y-50;
  })
  downbutton.mousePressed(()=>{
  player.y = player.y+50;
  })
  leftbutton.mousePressed(()=>{
  player.x = player.x-50;
  })
  rightbutton.mousePressed(()=>{
  player.x = player.x+50;
  })

  drawSprites();
}