// the array to hold the letters 

var  abcOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// counts for wins, wrongGuess etc....

var wins = 0;
var losses = 0;
var wrongGuess = 0;
var guessesLeft = 9;
var alreadyGuessed = [];
var computerChoice = [];

// refrence variables
var compWord = document.getElementById("directions"); // directions and the computers word choice
var correctGuess = document.getElementById("wins"); // the users guess that matches the computers guess
var wrongGuess = document.getElementById("wrong-guesses"); //the users wrong guess. user gets 9 guesses
var remainingGuesses = document.getElementById("remaining-guesses"); //users remaining guesses
var currentGuesses = document.getElementById("current-guesses"); // useres current guesses. user gets 9 total
var lettersChosen = document.getElementById("current-letters"); // letters user guessed
var userlosses = document.getElementById("losses"); // counts users losses

// game functions
window.onload = function() {
    var compGuess = abcOptions[Math.floor(Math.random() * abcOptions.length)];
    computerChoice.push(compGuess);
    console.log(computerChoice);
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    alreadyGuessed.push(userGuess);
    console.log(alreadyGuessed);
    //var alreadyGuessed = String.fromCharCode(event.keyCode).toLowerCase()
    // scoring

    for (var i = 0; i < 10; i++) {

        if ((alreadyGuessed[i] === computerChoice[0]) && (guessesLeft > 0)) {
            wins++;
            console.log("A winner is you")
            // Reset the game
            guessesLeft = 9;
            computerChoice = [];
            var compGuess = abcOptions[Math.floor(Math.random() * abcOptions.length)];
            computerChoice.push(compGuess);
            console.log(computerChoice[0])
        }
        else if ((alreadyGuessed[i] !== computerChoice[0]) && (guessesLeft > 0)) {
            guessesLeft = guessesLeft -1;
            //console.log(computerChoice[0])
            console.log("Working")
        }

        else {
            losses++;
            // Reset the game
            guessesLeft = 9;
            computerChoice = [];
            var compGuess = abcOptions[Math.floor(Math.random() * abcOptions.length)];
            computerChoice.push(compGuess);
            console.log(computerChoice[0])
        }
    };
    // displays the users guess, wins, wrongGuess, etc...
    correctGuess.textContent = "Wins " + wins;
    wrongGuess.textContent = "Wrong Guesses " + 9 - guessesLeft;
    userlosses.textContent = "Losses" + losses;
    guessesLeft.textContent = "Guesses Remaining: " + guessesLeft;
    lettersChosen.textContent = "Letters Chosen: " + alreadyGuessed;
}









