"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

// BIG STANDARD
// $ is the jquery thing, function $()
// jQuery(document).ready(setup);

// $(document).ready(function () {
//   // This code will run when the document is ready
// });

$(document).ready(setup);

function setup() {
  //$variables = jQuery
  let $divs = $('div');
  // Same DOM logic, manipulate css under.
  // Most efficient - May have a flicker on load - display then hide
  $divs.hide();
  $divs.fadeIn(2000);

  // // same effect, worst efficiency
  // $('div').hide(); // Select all divs AND THEN hide them
  // $('div').fadeIn(2000); // Select all divs AND THEN fade them in

//write clear parameters
  $('div')
    .hide()
    .fadeIn(2000);

    // event handler
    $('div').on('click',divClicked); // Add a click listener to ever div
    function divClicked() {
      $(this).fadeOut(2000, fadeCompleted); // Tell the div cliked to fade out, =display none
    }
    function fadeCompleted(){
      $('body').css({
        backgroundColor: 'blue'
      });
    }
  }
