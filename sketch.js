var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle ;
var particles = [];
var plinkos = [];
var divisions = []
var divisionHeight=300;
var score =0;
var count=0;
var gameState="start"
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
  textSize(20)
 text("Score : "+score,20,30);
 text("500",20,680)
 text("500",100,680)
 text("400",180,680)
 text("400",250,680)
 text("300",330,680)
 text("300",410,680)
 text("200",490,680)
 text("200",570,680)
 text("100",650,680)
 text("100",730,680)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(gameState==="end"){
    textSize(40)
    text("GAME OVER",300,400)
   }
   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<160){
         score=score+500
         particle=null
         if(count>=5){
           gameState="end"
          
         }
       }
     }
    }
    if(particle!=null){
      particle.display();
      if(particle.body.position.y>760){
        if(particle.body.position.x<320){
          score=score+400
          particle=null
          if(count>=5){
            gameState="end"
           
          }
        }
      }
     }
     if(particle!=null){
      particle.display();
      if(particle.body.position.y>760){
        if(particle.body.position.x<480){
          score=score+300
          particle=null
          if(count>=5){
            gameState="end"
           
          }
        }
      }
     }
     if(particle!=null){
      particle.display();
      if(particle.body.position.y>760){
        if(particle.body.position.x<640){
          score=score+200
          particle=null
          if(count>=5){
            gameState="end"
           
          }
        }
      }
     }
     if(particle!=null){
      particle.display();
      if(particle.body.position.y>760){
        if(particle.body.position.x<800){
          score=score+100
          particle=null
          if(count>=5){
            gameState="end"
           
          }
        }
      }
     }
    
   
  
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
if(gameState==="start"){
  count++
  particle=new Particle(mouseX,10,10,10)
}
}

