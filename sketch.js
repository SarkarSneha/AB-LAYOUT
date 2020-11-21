const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3=new Box(700,230,70,70)
    box4=new Box(920,230,70,70)
   // Top= new Box(200,30,100,10)
    ground = new Ground(600,400,1200,20)
    pig1 = new Pig(810,350)
    pig2 =new Pig(810,230)
    log1=new Log(810,260,300,PI/2)
    log2=new Log(810,160,300,PI/2)
    log3=new Log(760,140,150,PI/9)
    log4=new Log(870,140,150,-PI/9)
    box5=new Box(810,140,70,70)
    bird=new Bird(100,100,50,50)
    
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body);
    //console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig2.display();
    pig1.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}