let angle = 0;
let eyeSpacing = 35;
let eyeMotion = 0;

function setup() {
  createCanvas(400, 400);
  background(102);
  noStroke();
  fill(0, 102);
     //dress
  fill (149,200,216);
  triangle(202, 257, 104, 400, 297, 400); 
  
  fill (223, 185, 151)
  ellipse (width/2, height/2, 160, 200);
    fill(203,132,66);
  ellipse(width/2, height/2, 160,200);
}
function draw() {
 
                       
   // background(230,230,250);
  eyeMotion= constrain(map(mouseX,0, width,-5,5),-5,5);
  //noStroke();
  fill(203,132,66);
  console.log("x: " + mouseX + ", y: " + mouseY);





  
  
  // Draw only when mouse is pressed
  if (mouseIsPressed === true) {
    angle += 5;
    let val = cos(radians(angle)) * 12.0;
    for (let a = 0; a < 360; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill(0);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(255);
    ellipse(mouseX, mouseY, 2, 2);
  }
 
 //eyes
  push();
    fill(255);
    translate(0,175);
    //eye on left
    push();
      translate(width/2-eyeSpacing, 0);
      ellipse(0, 0, 30, 20);
      push();
      translate(eyeMotion,0);
        fill(0,0,0);
        ellipse(0,0,15,15);
        push();
          fill(0);
          ellipse(0,0,5,5);
        pop();
      pop();
    pop();
  
    //eye on right
    push();
      translate(width/2+eyeSpacing, 0);
      ellipse(0, 0, 30, 20);
      push();
       translate(eyeMotion,0)
        fill(0,0,0);
        ellipse(0,0,15,15);
        push();
          fill(0);
          ellipse(0,0,5,5);
        pop();
      pop();
    pop();
  pop();
  
  
 
     

  
}