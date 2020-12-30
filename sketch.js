var fruits, sword,score,fruitgroup;
var fruitimage1,fruitimage2,fruitimage3,fruitimage4,board;
var fruit1image;
function preload(){

    fruitimage1=loadImage("fruit1.png");
    fruitimage2=loadImage("fruit2.png");
    fruitimage3=loadImage("fruit3.png");
    fruitimage4=loadImage("fruit4.png");
    swordimage=loadImage("sword.png");
    board=loadImage("board.jpg");
}  
function setup(){
  score=0;
    createCanvas(1200,600);
    sword=createSprite(200,400,50,10);
    sword.addImage(swordimage);
    fruitgroup=new Group();

}           

function draw(){
 background(board);
 textSize(100);
 text(score,600,100);
 sword.x=mouseX;
 sword.y=mouseY;
 fruitsFunc();
 drawSprites();

 if (sword.isTouching(fruitgroup)) {    

  for(var i=0;i<fruitgroup.length;i++)
  { if(sword.isTouching(fruitgroup.get(i)))
    { fruitgroup.get(i).destroy();
}}
score=score+1;
 }
 

  for(var i=0;i<fruitgroup.length;i++)
  { if(fruitgroup.get(i).y>800)
    { fruitgroup.destroyEach();
      fruitgroup.setVelocityYEach(0);
      textSize(300);
      text("Game Over",600,300);

}}

}

function fruitsFunc(){
    if(frameCount%5==0){
      fruits=createSprite(random(200,1000),-100,10,10);   
      fruits.velocityX=(random(-15,15));
      fruits.velocityY=(random(10,18));
      
      var randomN=Math.round(random(1,4));
      switch (randomN){
        case 1:fruits.addImage("fruitss1",fruitimage1);
          fruits.scale= 0.6;
          break;
        case 2:fruits.addImage("fruitss2",fruitimage2);
          fruits.scale=0.6;
          break;
        case 3:fruits.addImage("fruitss3",fruitimage3);
          fruits.scale= 0.6;
          break;
        case 4:fruits.addImage("fruitss4",fruitimage4);
          fruits.scale=0.6;
          break;
          
          default:break;
      
          
      }
      
    fruitgroup.add(fruits);


    fruits.lifetime=width/Math.abs(fruits.velocityX);
}
}
