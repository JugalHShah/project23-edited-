var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:2,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 rect1=createSprite(ground.position.x,ground.position.y-5,200,20);
	 rect1.shapeColor="red";
	 rect2=createSprite(ground.position.x-100,ground.position.y-45,20,100);
	 rect2.shapeColor="red";
	 rect3=createSprite(ground.position.x+100,ground.position.y-45,20,100);
	 rect3.shapeColor="red";
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  console.log(rect1.position.x)
 if (packageBody.position.y>597){
	 Matter.Body.setStatic(packageBody,true);
 }
  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW) ) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageSprite.velocityY=3;
	Matter.Body.setStatic(packageBody, false);  }
  }



