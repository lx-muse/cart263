"use strict";

/********************************************************************

Responsive Voice Exercice
MC Lariviere - cart 263

This is a template + https://responsivevoice.org/api/
https://pippinbarr.github.io/cart263-2020/slides/responsivevoice/#15
*********************************************************************/

$(document).ready(setup);

let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];

const NUM_OPTIONS = 5;

let $correctButton;
let buttons = [];

function setup() {
  // $(document).one('click', newRound)
  // addButton("kitten")
  newRound();
  //Annyang Speech Recognition commands
  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'I give up': function() {
        console.log("I give up");
        newRound();
        $correctButton.css({
          "background-color": "#4CAF50",
          "border": "none",
          "color": "white"
          // }
        })},

      'Say it again': function(){
        console.log("Say it again");
        sayBackwards($correctButton.text());
      }

    };
    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }

}


// addButton(label)
function addButton(label) {
  //create an html elements from jQuery
  let $button = $('<div></div>');
  $button.addClass("guess");
  //see API https://api.jqueryui.com/button/#option-label
  $button.text(label);
  //turn the variable in a button widget
  $button.button();
  //make it respond to click
  $button.on('click', handleGuess);
  //add it to html
  // $('body').append($button); ===
  $button.appendTo('body');
  //give the variable back to acces it again
  return $button;

  // consider .chaining()
}

function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}

function newRound() {
  //clear the array every new round
  buttons = [];

  for (let i = 0; i < NUM_OPTIONS; i++) {
    //creating a variable to get an animal name from the array
    let name = getRandomElement(animals);
    // create a button out of it
    let $button = addButton(name);
    //add something to the array
    buttons.push($button);
  }
  //get random element from an array = buttons [] no $
  $correctButton = getRandomElement(buttons);

  //calling sayBackward()
  sayBackwards($correctButton.text());

}

function handleGuess() {
  if ($(this).text() === $correctButton.text()) {
    $('.guess').remove();
    //call method, then the timing
    setTimeout(newRound, 1000);
  } else {
    $(this).effect('shake');
    sayBackwards($correctButton.text());

  }
}

function sayBackwards(text) {
  //splits every letter and join them backwards
  let backwardsText = text.split('').reverse().join('');
  //create an object litterals
  let options = {
    pitch: Math.random(),
    rate: Math.random(),
  };
  //parameter from api
  responsiveVoice.speak(backwardsText, 'UK English Male', options);
}
