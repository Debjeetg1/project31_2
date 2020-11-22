const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var plinkos = [];
var divisions = [];
var particles = [];

var width = 480;
var height = 800;
var l = 0
var i = 0;
var j = 0;
var k = 0;


var ground;



function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;


  
  // plinkos section
  for( i = 10; i <= width; i += 50 )
  {
   plinkos.push(new Plinko(i , 100));
 
 
  }

  for(i = 35 ; i <= width; i += 50)
  {
    plinkos.push(new Plinko(i , 150));
  }

  for(i = 10 ; i <= width; i += 50 )
  {
    plinkos.push(new Plinko(i , 200));
  }

  for(i = 35; i <= width; i+= 50)
  {
    plinkos.push(new Plinko(i , 250))
  }

  for(i = 10; i <= width; i+= 50)
  {
    plinkos.push(new Plinko(i , 300))
  }

  for(i = 35; i <= width; i+= 50)
  {
    plinkos.push(new Plinko(i , 350));
  }

  //division section

  for(k = 0 ; k <= width ; k += 80)
  {
    divisions.push(new Division(k , 700));
  }

  // particles section

  ground = new Ground(240 , 800);



  

 
  
  
}

function draw() 
{
  background(0);  
  Engine.update(engine)
 
   for( var j = 0 ; j < plinkos.length; j++ )
  {
    plinkos[j].display();  
 
  }

  for(var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }

  for(var j = 0; j< plinkos.length; j++)
  {
    plinkos[j].display();
  }

  for(var j = 0; j< plinkos.length; j++)
  {
    plinkos[j].display();
  }

  for(var j = 0; j< plinkos.length; j++)
  {
    plinkos[j].display();
  }

  for(var j = 0; j< plinkos.length; j++)
  {
    plinkos[j].display();
  }
 
  for(l = 0; l < divisions.length; l++)
  {
    
    divisions[l].display();
  }

  //particles
  
  if(frameCount % 60 === 0 )
  {
    particles.push(new Particles(random(width/2 - 10) , random(height/2 - 100)))
  } 
  
  for(var m = 0 ;m < particles.length; m++)
  {
    particles[m].display();
  }

  ground.display();


 




  

 

 

     
}