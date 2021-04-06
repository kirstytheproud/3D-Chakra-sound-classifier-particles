var Attractor = function(){
  
  this.pos = createVector(0, 0, 0);
  this.mass = 40;
  this.G = 2
  
  
  this.calculateAttraction = function(p) {
    
    //Calculate direction of force
  var force = p5.Vector.sub(this.pos, p.pos);
    
    //distance between objections
    var distance = force.mag();
    
    //Limiting the distance to eliminate "extreme" results for velocity
    distance = constrain(distance, 5, 25);
    
    // Normalize vector (distance doesn't matter here, we just want...
    force.normalize();
    
    // Calculate gravitational force magnitude
    var strength = (this.G * this.mass * p.mass) / (distance * distance);
                                                  //Get force vector ---> magnitude * direction  
  force.mult(strength);
    return force;
  }
    //Method to display
    this.display = function(){
    
      
      ellipseMode(CENTER);
      noFill();
      ellipse(this.pos.x, this.pos.y, this.mass*2, this. mass*2, 50);
      
    }
}