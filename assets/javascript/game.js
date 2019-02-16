// the array to hold the letters 

var imThinking = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]


// counts for wins, losses etc....

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var computerGuess = [];

// refrence variables
var computerChoice = document.getElementById("directions");
var correctGuess = document.getElementById("wins");
var wrongGuess = document.getElementById("losses");
var remainingGuesses = document.getElementById("remaining-guesses");
var currentGuesses = document.getElementById("current-guesses");
var lettersChosen = document.getElementById("current-letters");

// the game
document.onkeyup = function (event) {
    userGuess = event.key; 
    computerGuess = imThinking[Math.floor(Math.random() * imThinking.length)];
    computerChoice.push(imThinking);
    console.log(computerChoice[0])

    if ((userGuess === computerGuess[0]) && (guessesLeft >0)){
        wins ++;
        guessesLeft = 9;
        lettersChosen.length = 0;
        computerGuess.length = 0;
        compGuess = imThinking[Math.floor(Math.random() * imThinking.length)];
        console.log(computerChoice[0]);
    }
    else if ((userGuess !== computerChoice[0]) && (guessesLeft > 0)) {
        losses -1;
    }
    else {
        losses ++;
        guessesLeft =9;
        lettersChosen.length = 0;
        compGuess = 0;
        compGuess = imThinking[Math.floor(Math.random() * imThinking.length)];
        computerGuess.push(compGuess);
        console.log(compGuess)
    }
        

} 







