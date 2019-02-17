// the array to hold the letters 

var  abcOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// counts for wins, wrongGuess etc....

var wins = 0;
var wrongGuess = 0;
var guessesLeft = 9;
var alreadyGuessed = [];
var computerChoice = [];

// refrence variables to add inputs and scores to html
var directionText = document.getElementById("directions");
var correctGuess = document.getElementById("wins");
var wrongGuess = document.getElementById("wrongGuess");
var guessesLeft = document.getElementById("remaining-guesses");
var alreadyGuessed = document.getElementById("current-letters");

// game functions

document.onkeyup = function (event) {
    var userGuess = event.key;
    var alreadyGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    var computerChoice = abcOptions[Math.floor(Math.random() * abcOptions.length)];

// scoring

for (var i = 0; i < 10; i++) {

if ((alreadyGuessed === computerChoice)) {
    wins ++;
}
if ((alreadyGuessed !== computerChoice)) {
    wrongGuess ++;
    guessesLeft -1;
    userGuess ++;
}

// displays the users guess, wins, wrongGuess, etc...
alreadyGuessed.textContent = "you-chose: " + alreadyGuessed;
correctGuess.textContent = "wins: " + wins;
wrongGuess.textContent = "wrongGuess: " + wrongGuess;
guessesLeft.textContent = "guesses-remaining: " + guessesLeft;
alreadyGuessed.textContent = "letters-guessed: " + userGuess;
}
};








