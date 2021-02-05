var canvas;
var music;
var surface1,surface2,surface3,surface4,box,edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

 //create 4 different surfaces
    surface1=createSprite(200,400,50,10);
    surface1.shapeColor="red";

    surface2=createSprite(270,400,50,10);
    surface2.shapeColor="yellow";

    surface3=createSprite(340,400,50,10);
    surface3.shapeColor="purple";

    surface4=createSprite(410,400,50,10);
    surface4.shapeColor="orange";

 //create box sprite and give velocity
    box=createSprite(random(20,750),100,40,40);
    box.shapeColor="blue";
    box.velocityX=5;
    box.velocityY=5;
}

function draw() {
    background("white");
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

 //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor = "red";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
      box.shapeColor = "yellow";
   }

   if(surface3.isTouching(box) && box.bounceOff(surface3)){
      box.shapeColor = "purple";
      box.velocityX = 0;
      box.velocityY = 0;
      music.stop();
   }

   if(surface4.isTouching(box) && box.bounceOff(surface4)){
      box.shapeColor = "orange";
      music.play();
   }
   drawSprites();
}
