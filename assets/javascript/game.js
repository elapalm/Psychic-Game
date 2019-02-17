// the array to hold the letters 

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// counts for wins, losses etc....

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = [];

// refrence variables
var computerChoice = document.getElementById("directions");
var correctGuess = document.getElementById("wins");
var wrongGuess = document.getElementById("losses");
var remainingGuesses = document.getElementById("remaining-guesses");
var currentGuesses = document.getElementById("current-guesses");
var lettersChosen = document.getElementById("current-letters");

// the game
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    var userGuess = event.key;
    var computerChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
};

// scoring
if (userGuess.indexOf(userGuess) > -1) {
    wins++;
    guessesLeft = 9;
    userGuess = [];
};
if (userGuess != computerGuess) {
    guessesLeft - 1;
    userGuess.push(userGuess);
}
if (userGuess === 0) {
    losses++;
    userGuess = [];
};

// displays the users guess, wins, losses, etc...
var html =
    currentGuesses.textContent = "You chose: " + userGuess;
    correctGuess.textContent = "Wins: " + computerGuess;
    wrongGuess.textContent = "Losses: " + losses;
    remainingGuesses.textContent = "Guesses remaining: " + guessesLeft;
    lettersChosen.textContent = "Letters Guessed: " + userGuess;

    document.querySelector("#game").innerHTML = html;











