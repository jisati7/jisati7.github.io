let sponge;
let s1;


function preload(){
  sponge = loadImage('spongebob.jpg');
  s1 = loadImage('minisponge.png');
}

function setup() {
  createCanvas(750, 525);
}

function draw() {
  background(220);
  image(sponge, 0, 0);
  
  if(millis() > 1000){
    image(s1, 325, 25);
  }
  
  if(millis() > 2000){
    image(s1, 75, 225);
  }
  
  if(millis() > 3000){
    image(s1, 600, 150);
  }
  
  if(millis() > 4000){
    image(s1, 225, 350);
  }
}