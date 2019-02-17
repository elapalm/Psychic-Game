// the array to hold the letters 

var  abcOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// counts for wins, wrongGuess etc....

var wins = 0;
var wrongGuess = 0;
var guessesLeft = 9;
var alreadyGuessed = [];
var computerChoice = [];

// refrence variables
var computerChoice = document.getElementById("directions");
var correctGuess = document.getElementById("wins");
var wrongGuess = document.getElementById("losses");
var remainingGuesses = document.getElementById("remaining-guesses");
var currentGuesses = document.getElementById("current-guesses");
var lettersChosen = document.getElementById("current-letters");

// game functions
window.onload = function() {
    var compGuess = computerChoice[Math.floor(Math.random * abcOptions.length)];
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    var alreadyGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    var computerChoice = abcOptions[Math.floor(Math.random() * abcOptions.length)];
    console.log(computerChoice[0])
// scoring

for (var i = 0; i < 10; i++) {

if ((alreadyGuessed === computerChoice) && (guessesLeft > 0)) {
    wins ++;
    guessesLeft = 9;
    computerChoice.length = 0;
    var compGuess = abcOptions[Math.floor(Math.random() * abcOptions.length)];
    console.log(computerChoice[0])
}
else if ((alreadyGuessed !== computerChoice) && (guessesLeft > 0)) {
    guessesLeft = guessesLeft -1;
    console.log(computerChoice[0])
}

else {
    losses++;
    guessesLeft = 9;
    computerChoice.length = 0;
    var compGuess = abcOptions[Math.floor(Math.random() * abcOptions.length)];
    console.log(computerChoice[0])
}
};
// displays the users guess, wins, wrongGuess, etc...
alreadyGuessed.textContent = "You Chose " + alreadyGuessed;
correctGuess.textContent = "Wins " + wins;
wrongGuess.textContent = "Losses " + wrongGuess;
guessesLeft.textContent = "Guesses Remaining: " + guessesLeft;
alreadyGuessed.textContent = "Letters Chosen: " + userGuess;
}









