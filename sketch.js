var dustbinIMG, dustbin1, Paper1, paperIMG;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
  dustbinIMG = loadImage("dustbingreen.png");
	paperIMG = loadImage("paper.png");
	
}

function setup() {
	createCanvas(1600,500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,470,width,20);

  Paper1 = new paper(200, 450, 70);
  Paper1 = addImage(paperIMG)

  dustbin1 = new dustbin(1200,450);
  dustbin1 = addImage(dustbinIMG)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightgrey");
 
  Paper1.display();
  ground.display();
  dustbin1.display(); 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(Paper1.body, Paper1.body.position,{x:277, y:-277});
  
  }
}