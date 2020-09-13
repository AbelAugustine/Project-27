
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  bobDiameter=40;

	engine = Engine.create();
	world = engine.world;

	bobObject1= new Bob(200,600,50,50);
	bobObject2= new Bob(250,600,50,50);
	bobObject3= new Bob(300,600,50,50);
	bobObject4= new Bob(350,600,50,50);
	bobObject5= new Bob(400,600,50,50);

	roofObject= new Roof(300,470,250,20);
  
  rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
  rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  }
}





