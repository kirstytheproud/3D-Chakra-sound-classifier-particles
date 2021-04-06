 // Global variable to store the classifier
let classifier;

// Label
let label = 'listening...';

// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/vRqYJEol/';

let mic;

//Textures
let rootTexture;
let sacralTexture;
let solarTexture;
let heartTexture;
let throatTexture;
let eyeTexture;
let crownTexture;
  
let angle = 0;

var particles =[];
var attractor;

function preload() {
  // Load the teachable machine model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
  
  fontHelvetica = loadFont('Helvetica 400.ttf');
  //Load the textures
 rootTexture = loadImage('Root Chakra.jpg');
  sacralTexture = loadImage('Sacral Chakra.jpg');
 solarTexture = loadImage('Solar Plexus Chakra.jpg');
  heartTexture = loadImage('Heart Chakra.png');
throatTexture = loadImage('Throat Chakra.jpg');
eyeTexture = loadImage('Third Eye Chakra.jfif');
crownTexture = loadImage('Crown Chakra.jpg');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
    
  mic = new p5.AudioIn()
  mic.start();
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
  
 
  attractor = new Attractor(width/2, height/2);
  
  for(var i=0; i < 400; i++){
    
    particles[i] = new Particle;
  }
attractor = new Attractor(width/2, height/2);
}

//STEP 2 CLASSIFY SOUND 

function draw() {
  background(20);
   micLevel = mic.getLevel();
  
    
  directionalLight(250, 250, 250, 0, 0, -1);
  noStroke();
  
  
//   let chakrac = constrain(chakra, 70, 550)
  drawChakra(label);
  
    for(var i = 0; i <=particles.length-1; i++){
    particles[i].display();
     var force  =            attractor.calculateAttraction(particles[i]);
     particles[i].applyForce(force);
     particles[i].update();
  }
// attractor.display();
}
  


// // The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  console.log(results[0]);
  label = results[0].label;

}

// The model recognizing a sound will trigger this event
function drawChakra(label) {
  let chakracinput= (micLevel * 500);
   // let micLevelx = micLevel*500;
  let chakrac = constrain(chakracinput, 40, 400);
  
  // let chakrac= constrain(chakra, 30, 500);
  

 ambientLight(255);

   angle+=micLevel*4
  
  
  if (label == 'Root (LAM)'){
   // fill(255, 0, 0);
     
    ambientMaterial(255, 0, 0);
    texture(rootTexture);
      rotateY(angle);
    
    sphere(chakrac); 
    
  //    textFont(fontHelvetica);
  // fill(255);
  // text('Root (LAM)', width/2, 400); 

    
   
  } else if(label == 'Sacral (Vam) '){
  // fill(255, 140, 0);
    texture(sacralTexture);
     rotateY(angle);
    sphere(chakrac);  
  //       textFont(fontHelvetica);
  // fill(255);
  // text('Sacral (VAM)', width/2, 400); 
  
  }else if(label == 'Solar Plexus (Ram)'){
   fill(255, 215, 0);
    texture(solarTexture);
     rotateY(angle);
    sphere(chakrac); 
  //       textFont(fontHelvetica);
  // fill(255);
  // text('Solar Plexus (RAM)', width/2, 400); 
 
  } else if (label == ' Heart (Yam)'){
  fill(0, 255, 0);
    texture(heartTexture);
    rotateY(angle);
    
    sphere(chakrac);  
//     textFont(fontHelvetica);
//   fill(255);
//   text('Heart (YAM)', width/2, 400); 
    
  } else if (label == 'Throat (Ham)'){
    // fill(0, 206, 209);
    texture(throatTexture);
     rotateY(angle);
    sphere(chakrac);  
//         textFont(fontHelvetica);
//   fill(255);
//   text('Throat (HAM)', width/2, 400); 
   

  }  else if (label == 'Third Eye (OM)'){
   // fill(0, 0, 128);
     texture(eyeTexture);
     rotateY(angle);
    sphere(chakrac); 
    
    
//         textFont(fontHelvetica);
//   fill(255);
//   text('Third Eye (OM)', width/2, 400); 
   

 
  } else if (label == 'Crown (AH)'){
   // fill(148, 0, 211);
    texture(crownTexture);
     rotateY(angle);
    sphere(chakrac); 
//         textFont(fontHelvetica);
//   fill(255);
//   text('Crown (AH)', width/2, 400); 
 
  } 
}
