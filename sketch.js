
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola
var chao

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var op ={
    isStatic: true	
	}
    chao = Bodies.rectangle(400,650,800,21,op)
	Engine.run(engine);
    World.add(world,chao)

    bola = Bodies.circle(27,21,28)
    Engine.run()
	World.add(world,bola)
}   


function draw() {
  rectMode(CENTER);
  background(0);
  rect(chao.position.x,chao.position.y,800,21)
  drawSprites();
  
  ellipse(bola.position.x,bola.position.y,28)

}



