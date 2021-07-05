const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18;
var roof;
var ball;
var rope;


function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height-30, 1200, 30);

  box1 = new Box(600, 100, 50, 50);
  box2 = new Box(600, 100, 50, 50);
  box3 = new Box(600, 100, 50, 50);
  box4 = new Box(600, 100, 50, 50);
  box5 = new Box(600, 100, 50, 50);
  box6 = new Box(600, 100, 50, 50);

  box7 = new Box(670, 100, 50, 50);
  box8 = new Box(670, 100, 50, 50);
  box9 = new Box(670, 100, 50, 50);
  box10 = new Box(670, 100, 50, 50);
  box11 = new Box(670, 100, 50, 50);
  box12 = new Box(670, 100, 50, 50);

  box13 = new Box(740, 100, 50, 50);
  box14 = new Box(740, 100, 50, 50);
  box15 = new Box(740, 100, 50, 50);
  box16 = new Box(740, 100, 50, 50);
  box17 = new Box(740, 100, 50, 50);
  box18 = new Box(740, 100, 50, 50);

  ball = new Ball(200, 200, 70, 70);

  rope = new Rope(ball.body,{x: 200, y: 200});

  //roof = new Ground(600, 100, 100, 30);

}

function draw() {
  background("grey"); 

  Engine.update(engine);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  ball.display();

  rope.display();

  //roof.display();
 
}

function mouseDragged(){
  Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}

