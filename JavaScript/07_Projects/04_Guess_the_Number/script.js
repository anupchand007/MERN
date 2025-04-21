const randomValue = Math.floor(Math.random() * 100) + 1;
const userInput = document.getElementById('userGuess');
const button = document.getElementById('submit');
const msg = document.getElementById('status');
const displayGuesses = document.getElementById("guess");
const remainingGuesses = document.getElementById("Remaining");
const form = document.getElementById("gameForm")

let totalGuess = [];
let chances = 10;
let gameOver = false;

console.log(randomValue);


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (gameOver) return;
    const guess = parseInt(userInput.value);
    validateGuess(guess);
});

function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage("Please enter a valid number.");
    } else if (guess < 1 || guess > 100) {
        displayMessage("Please enter a number between 1 and 100.");
    } else {
        totalGuess.push(guess);
        updateGuesses(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomValue) {
        displayMessage("🎉 You guessed it right!");
        endGame();
    } else {
        chances--;
        if (chances === 0) {
            displayMessage(`❌ Game over! The number was ${randomValue}.`);
            endGame();
        } else {
            let hint = guess < randomValue ? "Too low!" : "Too high!";
            displayMessage(hint);
        }
    }
}

function updateGuesses(guess) {
    displayGuesses.innerHTML += `${guess}, `;
    remainingGuesses.innerHTML = `Remaining Guesses: ${chances}`;
    userInput.value = "";
}

function displayMessage(message) {
    msg.innerHTML = message;
}

function endGame() {
    gameOver = true;
    userInput.disabled = true;
    button.disabled = true;
}