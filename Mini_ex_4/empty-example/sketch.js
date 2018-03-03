
var button;
var song;
function preload(){
  song = loadSound('Musixa/Vengaboys - Were Going to Ibiza!.mp3');// The song that plays when the buttons are pressed
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(235,100,109);
  textSize(32);
  fill(37,31,221);
text('How are you feeling?', width/2-170, 200);
  button = createButton('SAD');// here I used the createbutton function from p5 dom
   button.position(width/2, height/2);//the position of the button
   button.mousePressed(Ibiza);// Then I made a function that would run when the mouse is pressed

   button = createButton('HURT');// another button
    button.position(width/2-100, height/2);// position of button
    button.mousePressed(Ibiza);
}

function Ibiza () {// When the buttons are pressed, this function will run
background(255,205,0)
  textSize(32);
  fill(255,31,221);
text('Here is something to cheer you up!', width/2-270, 200);
song.loop();
}
