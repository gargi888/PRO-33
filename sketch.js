const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
 
var ground;
var particle;

var divisions = [];
var particles = [particle];
var plinkos = [];
var line;

var count = 0;
var score = 0;
var divisionHeight=300;
var gameState = "PLAY";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  Engine.update(engine);
 
  textSize(35);
  text("Score : "+score,20,40);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  textSize(35);
  text("500", 15,515);
  text("500", 95,515);
  text("500", 175,515);
  text("500", 255,515);
  text("100", 335,515);
  text("100", 415,515);
  text("100", 495,515);
  text("200", 575,515);
  text("200", 655,515);
  text("200", 735,515);

  ground.display();

  if ( gameState =="END") {
    background("black");
    fill("red");
    textSize(100);
    text("Game Over", 200, 400);
  } 

  for(var k = 0; k < plinkos.length; k++) {
   plinkos[k].display();
}

if(particle!=null){

   particle.display();
    
    if (particle.body.position.y>700){

          if (particle.body.position.x < 300) {

              score=score+500;      
              particle=null;
              if ( count>= 5) gameState ="END";                          
          }


          else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) {

                score = score + 100;
                particle=null;
                if ( count>= 5) gameState ="END";

          }
          else if (particle.body.position.x < 900 && particle.body.position.x > 601 ){

                score = score + 200;
                particle=null;
                if ( count>= 5)  gameState ="END";

          }      
          
    }
}





 for (var i = 0; i < divisions.length; i++) {
 
    divisions[i].display();
  }
}


function mousePressed() {

  if(gameState !== "END") {
    count++;
    particle = new Particle(mouseX, 50, 10, 10);
  }
}
