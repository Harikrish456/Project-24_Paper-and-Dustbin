
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball;
var dustbin1,dustbin2,dustbin3;
var ground;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    ball = new Paper(200,350,50);
	dustbin1 = new Dustbin(1400,640,20,200); 
	dustbin2 = new Dustbin(1500,640,20,1000);
	dustbin3 = new Dustbin(1450,680,100,10);
	ground = new Ground(800,700,1600,10);
}

function draw() {
  Engine.update(engine);
 
 
  
  background("blue");
  stroke("yellow");
  text("hello",400,350);
 	
  ball.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  ground.display();
  keyPressed();
  
}

function keyPressed(){
	stroke("yellow");
  text("hi",400,1);
	
	if (keyCode === UP_ARROW){
		
		var paperObject = ball;
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85,y:-40});
	}
}


