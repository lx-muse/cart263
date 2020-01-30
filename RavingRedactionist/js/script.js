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
  //calling spanClicked() when clicked
  $spans.on('click',spanClicked);
  //Total secrets of the page
  secretTotal = $secrets.length;
  //calling secretMouseover()
  $secrets.on('mouseover', secretMouseover)
}

//calling the updateSpan() on each element of the selection the intervall set above
function update() {
console.log("update");
$spans.each(updateSpan);

}
//randomly reveals part of the text
function updateSpan(){
console.log("updateSpan()")

  let r = Math.random();
  if( r < REVEAL_POSSIBILITY ) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

//switching back to .redacted style on click
function spanClicked() {
  console.log("spanClicked()")
  $(this).removeClass('revealed').addClass('redacted');

}

//Addind the .found class
function secretMouseover(){
  $(this).addClass('found');
  //mouseover only once
  $(this).off('mouseover');

  secretFound ++;
  console.log(secretfound);
}
