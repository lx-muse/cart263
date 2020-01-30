"use strict";

/********************************************************************

Raving Redactionist
MC Lariviere

class 3 - activity

*********************************************************************/
$(document).ready(setup);

//change hardcoded numbers ex:
const REVEAL_POSSIBILITY = 0.1;
const UPDATE_FREQUENCY = 500;

//variables for Jquery selector
let $spans;
let $secrets;
//number of secrets :
let secretFound = 0;
let secretTotal = 0;

//selecting .classes with jquery selector
function setup() {
  $spans = $('.redacted');
  $secrets = $('.secret');
  //calling update() 
  setInterval(update, UPDATE_FREQUENCY);
  //calling spanClicked() when clicking
  $spans.on('click',spanClicked);

}

function update() {
console.log("update");

$spans.each(updateSpan);

}

function updateSpan(){
console.log("updateSpan()")

  let r = Math.random();
  if( r < REVEAL_POSSIBILITY ) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

function spanClicked() {
  console.log("spanClicked()")
  $(this).removeClass('revealed').addClass('redacted');

}
