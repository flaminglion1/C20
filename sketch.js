var fr,mr,ob;

function setup() {
  createCanvas(800,400);
  
ob=createSprite(400,200,50,90);
//sob.velocityY = -3;
ob.velocityX = -3;


  fr=createSprite(200,300,40,70);
fr.shapeColor = "orange"

mr=createSprite(500,200,70,40);
mr.shapeColor = "yellow"
}

function draw() {
  background("cyan");  
  
  
mr.x=mouseX;
mr.y=mouseY;

if(mr.x-fr.x<fr.width/2+mr.width/2 && fr.x-mr.x<fr.width/2+mr.width/2 &&
  mr.y-fr.y<fr.height/2+mr.height/2 && fr.y-mr.y<fr.height/2+mr.height/2){//300===55
  mr.shapeColor="red";
  fr.shapeColor="red";
}else{
  mr.shapeColor="green";
  fr.shapeColor="green";
}
if(mr.x-ob.x<ob.width/2+mr.width/2 && ob.x-mr.x<ob.width/2+mr.width/2){
ob.velocityX *=(-1);

}
if(mr.y-fr.y<fr.height/2+mr.height/2 && fr.y-mr.y<fr.height/2+mr.height/2){
  ob.velocityY *=(-1);
}
  drawSprites();
}



