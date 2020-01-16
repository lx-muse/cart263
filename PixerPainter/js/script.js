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

    newPixel.addEventListener('mouseover',paint)
  }
}


function paint(e){
  let pixel = e.target;
  pixel.style.backgroundColor = 'white';
  //we need to pass the variable to our new function inside parameters
  setTimeout(resetPixel, 2000, pixel);
}

function resetPixel(pixel){
  pixel.style.backgroundColor = 'black';

}
