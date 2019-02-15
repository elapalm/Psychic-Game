// the array to hold the letters 

var imThinking = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

// possible choices

var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

// counts for wins, losses etc....

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachOfLetters = null;

// refrence variables
var computerChoice = document.getElementById("directions");
var correctGuess = document.getElementById("wins");
var wrongGuess = document.getElementById("losses");
var remainingGuesses = document.getElementById("remaining-guesses");
var currentGuesses = document.getElementById("current-guesses");
var lettersChosen = document.getElementById("current-letters");

// the game
document.onkeyup = function (event) {
    var userGuess = event.key; 
    var computerGuess = imThinking[Math.floor(Math.random() * imThinking.length)];
} 







