//Ouyang Xinyi 12.11.2023 
//Slide the mouse to view, and pressed "s" to save the picture.
//It simulates the scene and mood of watching fireworks and stars at night.
//My sources of inspiration:https://editor.p5js.org/chuck48/sketches/_FLdoWdVh


let x1=0;//Create a global variable "x1,y1,x2,y2"
let y1=0;
let x2=0;
let y2=0;

let easing=0.01;//X,Y axis moving speed
let Neasing=0.05;

let xf=70;//The X starting value of the face
let yf=400;//The Y starting value of the face


function setup() {
  createCanvas(400, 500);
  
  //Position of the moon
  background(4, 54, 86);
  noStroke();
  fill(231, 228, 225); 
  circle(275, 75, 60); 
  fill(4, 54, 86); 
  circle(265, 65, 60);
 
  
  //Background ball pattern
  drawBackground(); 
  
}


function draw() {
  
  //Mouse follow
  push();
  stroke(0);
  x1+=(mouseX-x1)*easing;
  y1+=(mouseY-y1)*easing;
  x2+=(mouseX-x2)*Neasing;
  y2+=(mouseY-y2)*Neasing;
  line(x1,y1,x2,y2);// The endpoint position of this line segment is smoothly updated every frame based on the mouse position.
  pop();
  
  
  //hills
  drawForeground(); 
  
  // People  
  push();
  
  fill(259,199,136);
  ellipse(xf+20,yf+30,80,100);
  ellipse(xf+40,yf+10,80,80);
  ellipse(xf+55,yf+45,80,80);
  ellipse(xf+10,yf+40,80,80);
  triangle(60, yf, xf, 360, 130, yf);
  triangle(110, 550, xf, 360, 130, yf);
  
  //eyes
  fill(255);
  let mx=map(mouseX,10,width,0,20);//Follow the mouse's range of motion with your eyes
  ellipse(xf,yf+30,mx,30);
  ellipse(xf+40,yf+35,mx,30);
  
  //eyeball
  fill(0);
  ellipse(xf,yf+30,10,20);
  ellipse(xf+40,yf+35,10,20);
  
  //nose
  ellipse(xf+15,yf+45,10,10);
 
  //blush
  fill(225,64,98);
  ellipse(xf+50,yf+60,40,20);
  ellipse(xf-20,yf+55,40,20);

  pop();
}
 

function drawBackground() {
  
  push();
 
  colorMode(HSL);
  var colors=[];
  var startH = random(10,30);
  var changeH = random (5,10);
  
  //generate three colors that are related to each other
  for (var i=0;i<3;i++){
    colors.push(color(startH +random(100,200),100,50));
  }  
  
  //use the colors in the array: four in total
  for (var i=0; i<100; i++){
    fill(random(colors));
    var size=random(1,20);
    ellipse(random(width),random(height),size,size);
  }
  
  pop();
  
}


function drawForeground() {
  
  //hills
  fill(36, 32, 28); 
  rect(0, 400, 400, 100); 
  triangle(0, 400, 105, 245, 200, 400); 
  triangle(210, 400, 270, 340, 330, 400); 
  triangle(180, 400, 210, 370, 240, 400); 
}

function keyPressed(){
  if(key == 's'){
    // save image
    saveCanvas();
  }
}