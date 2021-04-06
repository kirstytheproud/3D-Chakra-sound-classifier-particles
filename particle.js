var Particle = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  
  this.pos = createVector(random(150), random(250), random(100));
  this.vel = createVector(0, 1,3);
  this.acc = createVector(1, 1,1);
  this.mass = 1;
    
  this.applyForce = function(force){
    var f = force.copy(); //protective measure since there are more objects, make copies before modifications
    
    f.div(this.mass);
    this.acc.add(f);
  }
  
  //runs the physics algorithm using velocity and acceleration
  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
    
  let boxSz = 250;
    this.display = function(){
      noStroke();
      push();
      translate(this.x, this.y, this.z);
      sphere(boxSz/50, 16);
      pop();
      
      this.x = random(-300, 500);
      this.y = random(-500, 500);
      this.z = random(-500, 300);
    }
      
}
      
//        if (label == 'Root (LAM)'){
//    fill(255, 0 ,0);
       
//   sphere(this.x, this.y, this.z);
//         // ellipse( this.pos.x, this.pos.y, this.mass*8, this.mass*8, 10);
               
//                // w, h, detail);

//   } else if(label == 'Sacral (Vam)'){
//   fill(255, 140, 0);
     
//       ellipse(this.pos.x, this.pos.y, this.mass*8, this.mass*8, 10);
  
//   }else if(label == 'Solar Plexus (Ram)'){
//    fill(255, 215, 0);
         
//     ellipse(this.pos.x, this.pos.y, this.mass*8, this.mass*8, 10);
 
//   } else if (label == 'Heart (Yam)'){
//   fill(0, 255, 0);
      
//       ellipse(this.pos.x, this.pos.y, this.mass*8, this.mass*8, 10);
  
//   } else if (label == 'Throat (Ham)'){
//     fill(0, 206, 209);
        
//       ellipse(this.pos.x, this.pos.y, this.mass*8, this.mass*8, 10);
//   }  else if (label == 'Third Eye (OM)'){
//    fill(0, 0, 128);
         
//       ellipse(this.pos.x, this.pos.y, this.mass*8, this.mass*8, 10);
 
//   } else if (label == 'Crown (AH)'){
//    fill(148, 0, 211);
        
//       ellipse(this.pos.x, this.pos.y, this.mass*8, this.mass*8, 10);
              
 
//   } 
    
//     }