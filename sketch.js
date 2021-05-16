
var bgImg;
var Ballon,hotAirBallonImg;
var database,positions;

function preload(){
  hotAirBallonImg=loadAnimation("ballon1.png","ballon2.png","ballon3.png");
  bgImg=loadImage("bgImage.png");
}
function setup() {
  createCanvas(1350,600);

  database=firebase.database();

  Ballon = createSprite(400, 200, 50, 50);
  Ballon.addAnimation("ground",hotAirBallonImg);
  Ballon.scale=0.5;

  var Ballonposition=database.ref('Ballon/height');
  Ballonposition.on("value",showError)
}
//readHeight
function draw() {
  background(bgImg); 
  if(keyDown(LEFT_ARROW)){
    // changePosition(-1,0);
    Ballon.x = Ballon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
    // changePosition(1,0);
    Ballon.x = Ballon.x +10;
}
else if(keyDown(UP_ARROW)){

  Ballon.addAnimation("ground",hotAirBallonImg);
  Ballon.scale=Ballon.scale -0.01;
  Ballon.y = Ballon.y -10;
}
else if(keyDown(DOWN_ARROW)){
    // changePosition(0,+1);
    Ballon.addAnimation("ground",hotAirBallonImg);
    Ballon.scale=Ballon.scale +0.01;

    Ballon.y = Ballon.y +10;

}
  drawSprites();
}
function updateHeight(x,y){
database.ref('Ballon/height').set({
  'x' : height.x + x ,
  'y' : height.y + y
})}

function showError(){
console.log("error");
}