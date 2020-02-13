"use strict";

/********************************************************************

Responsive Voice Exercice
MC Lariviere - cart 263

This is a template + https://responsivevoice.org/api/
https://pippinbarr.github.io/cart263-2020/slides/responsivevoice/#15
*********************************************************************/

$(document).ready(setup);


function setup(){
  $(document).on('click',talk)
}

function talk(){
  // responsiveVoice.speak("hello world");

  responsiveVoice.speak("Hello world", "UK English Male", {
  pitch: 2,
  rate: 2,
  volume: 1,
  onstart: showSpeaking,
  onend: hideSpeaking
});

function showSpeaking() {
  $('body').css('background-color', 'green');
}
function hideSpeaking() {
  $('body').css('background-color', 'white');
}

}
