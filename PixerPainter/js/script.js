"use strict";

/********************************************************************

Pixel Painter
MC Lariviere

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

window.onload = setup;
// window.addEventListener('load', setup);

function setup(){
  console.log("setup()")

    for (let i = 0; i < 1000; i++) {
      //create an HTML elements
    let newPixel = document.createElement('div');
    newPixel.setAttribute('class', 'pixel');

    let pixelDiv = document.getElementById("pixel");
    document.body.appendChild(newPixel);

    newPixel.addEventListener('mouseover',paint);
  }
}


function paint(e){
  let pixel = e.target;

//this is not P5 anymore
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  //check under your escape key ``
  pixel.style.backgroundColor = `rgb(${r},${g},${b})`;
  console.log(`rgb(${r},${g},${b})`);
  console.log(r,g,b);

  //we need to pass the variable to our new function inside parameters
  setTimeout(resetPixel, 2000, pixel);

  pixel.addEventListener('click',remove);
}

function resetPixel(pixel){
  pixel.style.backgroundColor = 'black';

}

function remove(pixel) {
  pixel.style.opacity = 0;

}
