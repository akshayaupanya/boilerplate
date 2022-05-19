const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground;
function setup(){
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var body_option = {
  isStatic: true
}
ground = Bodies.rectangle(200,390,20,20,body_option);
World.add(world,ground);
console.log(ground);
console.log(ground.position);

}
function draw(){
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
}