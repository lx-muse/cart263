"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
//dialog box with wiggle

$(document).ready(function() {
$('#question').dialog({
buttons: {
  "Good": function() {
    $(this).dialog('close');
  },
  "Bad": function() {
    $(this).parent().effect('shake');
  }
}
});
});



//simple dialog box
// $(document).ready(function () {
//   $('#question').dialog();
// });


//comment back in for animation example
// $(document).ready(setup);

const ANIMATION_TIME = 2000;

function setup() {
// This code will run when the document is ready!
$('.square').draggable();


$('.square').animate({
  backgroundColor: 'green'
},{
  duration: ANIMATION_TIME,
  done: function () {
    $(this).animate({
      backgroundColor: 'red'
    },ANIMATION_TIME);
  }
});


$('.square2').animate({
  backgroundColor: 'green',
  width: '500px',
  height: '500px',
  borderRadius: '10%'
}, {
  duration: ANIMATION_TIME,
});


}
