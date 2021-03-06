var balloon;
var database;
var position;

function preload(){
 bg=loadImage("Hot Air Ballon-01.png");
 balloonbg=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
}

function setup() {
  database=firebase.database();

  createCanvas(800,400);

  balloon=createSprite(400,200,50,50);
  balloon.addAnimation("balloon moving",balloonbg);
  balloon.scale=0.5;

  var balloonPosition=database.ref('balloon/height');
  //balloonPosition.on("value",readPosition,showError);

}

function draw() {
  background(bg);

  fill(0);
  strokeWeight(2);
  stroke("red");
  textSize(15);
  text("**Use arrows keys to move  Hot Air Balloon!",20,30);
  
if(keyDown(LEFT_ARROW)){
    balloon.x-=3;
}
else if(keyDown(RIGHT_ARROW)){
    balloon.x+=3;
}
else if(keyDown(UP_ARROW)){
  //updateHeight(0,-10);
  balloon.addAnimation("hotAirBalloon",balloonbg);
  balloon.scale=balloon.scale+0.01;
  
if(balloon.scale>=0.9){
  if(balloon.scale=0.9){
    balloon.y-=3;
  }
}
}
else if(keyDown(DOWN_ARROW)){
  //updateHeight(0,-10);
  balloon.addAnimation("hotAirBalloon",balloonbg);
  balloon.scale=balloon.scale-0.01;

if(balloon.scale<=0.1){
  if(balloon.scale=0.1){
      balloon.y+=3;
    }
  }
}
  
  drawSprites();

}

function readPosition(data){
position=data.val();
  balloon.x=position.x;
  balloon.y=position.y;
}

function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x + x,
    'y': height.y + y
})}

function readHeight(data){
  height.data.val();
  balloon.x=height.x;
  balloon.y=height.y;
}

function showError(){
console.log("Error in writing to the database");
}