"use strict";

/********************************************************************

Pixel Painter
MC Lariviere

Assignment 1

*********************************************************************/

window.onload = setup;
// window.addEventListener('load', setup);

//variables
let rotation = 0;
let key;

// In setup() we create 1000 new pixels and prepare Events
function setup(){
  console.log("setup()")

    for (let i = 0; i < 1000; i++) {
      //create an HTML elements, here div
    let newPixel = document.createElement('div');
    newPixel.setAttribute('class', 'pixel');

    let pixelDiv = document.getElementById("pixel");
    document.body.appendChild(newPixel);
    //listening to the mouse
    newPixel.addEventListener('mouseover',paint);
  }
  //listening if a key is down
  document.addEventListener('keydown', rotate);
}

function paint(e){
  let pixel = e.target;

//this is not P5 anymore
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  //back tick key `` for template literals
  pixel.style.backgroundColor = `rgb(${r},${g},${b})`;
  // console.log(`rgb(${r},${g},${b})`);
  // console.log(r,g,b);

  //we need to pass the variable to our new function, we do it inside parameters,
  //erasing it after 2 sec, call resetPixel()
  setTimeout(resetPixel, 2000, pixel);

  //listening if a pixel is clicked, call remove()
  pixel.addEventListener('click',remove);
}


function resetPixel(pixel){
  pixel.style.backgroundColor = 'black';
}

function remove(e) {
  e.target.style.opacity = "0";
}

//loops every pixel and rotate them in the arrow directions
function rotate(e){
    let pixel = document.getElementsByClassName("pixel");

  for( var i = 0; i < pixel.length; i++) {
    pixel[i].style.transform = `rotate(${rotation}deg)`;
  }
  //left arrow
  if (e.keyCode === 39) {
    rotation += 3;
    console.log(rotation);
  }
  //right arrow
  if (e.keyCode === 37) {
    rotation -= 3;
    console.log(rotation);

  }
}
