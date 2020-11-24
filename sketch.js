var ball,bal2,ball,ball4,ball5,ground,bin;
var rope1,rope2,rope3,rope4,rope5;


var world;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    

	engine = Engine.create();
	world = engine.world;

	

		var options = {
			isStatic: true,	
					
			}

			var options2 = {
				//bodyA: paper.body
				
						
				}

			

	//Create the Bodies Here.
	ground = Bodies.rectangle(400,671,801,20, options);
	
	
	
	
	

	fill("pink");

	ball = new Paper(330,200,30,30);
	ball2 = new Paper(330,200,30,30);
	ball3 = new Paper(330,200,30,30);
	ball4 = new Paper(330,200,30,30);
	ball5 = new Paper(330,200,30,30);

	

	 bin = new Bin();
	 
	 rope1 = new Rope(ball.body,bin.body,120,0);
	 rope2 = new Rope(ball2.body,bin.body,70,0);
	 rope3 = new Rope(ball3.body,bin.body,40,0);
	 rope4 = new Rope(ball4.body,bin.body,20,0);
	 rope4 = new Rope(ball4.body,bin.body,-10,0);
	 rope5 = new Rope(ball5.body,bin.body,-50,0);
	 
	
	
	   World.add(world, ground);
	   
		
		
		

	Engine.run(engine);
  
 
	
	

}


function draw() {
  rectMode(CENTER);
  
  background(rgb(81,111,181));

   
    

	
	rect(ground.position.x,ground.position.y,801,60);

	
	
	
	ball.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	bin.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-120}); 

 }
 }