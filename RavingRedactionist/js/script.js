"use strict";

/********************************************************************

Raving Redactionist
MC Lariviere

class 3 - activity

*********************************************************************/
$(document).ready(setup);

//change hardcoded numbers ex:
let $spans;

function setup() {
  console.log("setup()");
  setInterval(update, 500);
  $('span').on('click',spanClicked);

}

function update() {
console.log("update");

$('span').each(updateSpan);

}

function updateSpan(){
console.log("updateSpan()")

  let r = Math.random();
  if( r < 0.1 ) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

function spanClicked() {
  console.log("spanClicked()")
  $(this).removeClass('revealed').addClass('redacted');

}
