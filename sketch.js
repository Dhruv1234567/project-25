const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1,dustbin2,dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(600, 500);

	groundSprite=createSprite(width/2, height-100, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1 = new paper();
//dustbin1=new dustbin(390,380,150,20);
//dustbin2=new dustbin(315,325,20,130);
dustbin3=new dustbin(455,325,20,130);

ground = Bodies.rectangle(width/2, 400, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
paper1.display();
  //dustbin1.display();
 // dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}
function keyPressed(){
if(keyCode == 38){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:7,y:-25});
}
}