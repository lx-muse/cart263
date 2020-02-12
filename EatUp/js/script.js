"use strict";

/********************************************************************

Eat Up
MC Lariviere

This is an activity

  We see an image of an animal and a fly on screen
  The fly starts making a buzzing sound on mouse down (and stops on mouse up)
  We can drag the fly around on the screen
  If we drop the fly on the animal, the fly vanishes and the animal starts chewing (and making a chewing sound)


*********************************************************************/
let $mouth ;
let $fly ;
let $newfly ;

let buzzSFX = new Audio("assets/sounds/buzz.mp3");
let crunchSFX = new Audio("assets/sounds/crunch.wav");

let randomTopPos = Math.floor(Math.random() * (400));
let randomLeftPos = Math.floor(Math.random() * (377));

$(document).ready(setup);

//# for ID selection
function setup(){
  $mouth = $('#open');
  $fly = $('#fly');
  buzzSFX.loop = true;
  //give the fly a draggable widget
  //https://api.jqueryui.com/draggable/#option-helper
  $fly.draggable({
    start: function(){
      buzzSFX.play();
      $(this).effect("shake");
    },
    stop: function(){
      buzzSFX.pause();
    }
  }).css({
    'top' : -randomTopPos,
    'left': randomLeftPos
});
  //https://jqueryui.com/droppable/
  $mouth.droppable({
    drop: function(event, ui){
      console.log("drop");
      ui.draggable.remove();
      $mouth.attr('src','assets/images/chewing.gif');
    }
  });
  //new fly button
    $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();

    $( "button" ).click( function( event ) {

      console.log("new fly");

      $('#img').prepend('<img src="assets/images/fly.png" id="fly" alt="fly" height="50" width="50">');

      $fly.draggable({
        start: function(){
          buzzSFX.play();
        },
        stop: function(){
          buzzSFX.pause();
        }
      })
      .css({
        'top' : randomTopPos,
        'left': randomLeftPos
    });

      $mouth.attr('src','assets/images/open.png');
    } );
  } );
}
