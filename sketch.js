const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;
var engine,world;

function preload() {
//preload the images here
backgroundImage=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine=Engine.create();
  world=engine.world;
  // create sprites here
  ground=new Ground(600,600,1200,20);
  hero=new Hero(200,200,600);

}

function draw() {
  background(backgroundImage);
  Engine.update(engine);
ground.display();
hero.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
