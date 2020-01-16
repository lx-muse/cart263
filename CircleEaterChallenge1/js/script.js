/*****************

Circle Eater
MC Lariviere

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let player = {
x: 0,
y: 0,
maxSize: 64,
size: 64,
active: true,
}

let food = {
  x: 0,
  y: 0,
  size: 64,
}

// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
createCanvas(windowWidth,windowHeight);
food.x = random(0, width);
food.y = random(0, height);
noCursor();
}


// draw()
//
// Description of draw()

function draw() {
  //darkpurple
  background("#27164D");
  updatePlayer();
  displayPlayer();
}

function updatePlayer() {
  player.x = MouseX;
  player.y = MouseY;
  if (player.size === 0){
    player.active = false;
  }
}

function displayPlayer() {
  push();
  noStroke();
  fill("#fae")
  ellipse(player.x, player.y, player.maxSize);

}
