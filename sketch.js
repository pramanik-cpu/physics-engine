const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,ball1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);



    var ball_options ={
        restitution: 1.0,
    }
    ball=Bodies.circle(50,100,20,ball_options);
    World.add(world,ball);
    console.log(ground);

    var ball1_options ={
        restitution: 1.0,
    }
   
    ball1=Bodies.circle(100,100,20,ball1_options)
    World.add(world,ball1);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    
    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,20,20);
}