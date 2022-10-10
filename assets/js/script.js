// STEP 1
// create a function to allow player choice the same button value
// e.g.; if spock button is pressed, assign spock_value to player choice
const gameChoices = document.querySelectorAll('button');
const playerChoiceShow = document.getElementById('player_choice');
const opponentChoiceShow = document.getElementById('opponent_choice');
const resultShow = document.getElementById('match_result');
// const resetGame = document.getElementById('reset');
let playerChoice;
let opponentChoice;
let result;
let playerScore = 0;
let opponentScore = 0;

// when the function is called, it also calls functions to assign opponent value choice and generate result
gameChoices.forEach(choice => choice.addEventListener('click', (btn_click) => {
    playerChoice = btn_click.target.id
    playerChoiceShow.innerHTML = playerChoice;
    // also generate choice for the opponent
    generateOpponentChoice();
    // also generate the result
    generateResult();
    // increase the winner score
    increaseWinnerScore()
}))

// STEP 2
// funtion to generate random selection for the opponent
function generateOpponentChoice() {
    // https://www.w3schools.com/js/js_random.asp
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    if (randomNumber === 1) {
        opponentChoice = 'rock'
    } else if (randomNumber === 2) {
        opponentChoice = 'paper'
    } else if (randomNumber === 3) {
        opponentChoice = 'scissors'
    } else if (randomNumber === 4) {
        opponentChoice = 'lizard'
    } else {
        opponentChoice = 'spock'
    }
    // without this, the opponent choice won't be displayed
    opponentChoiceShow.innerHTML = opponentChoice;
}

// STEP 3
// funtion to determine the result of every choice
function generateResult() {
    if (playerChoice === opponentChoice) {
        result = 'IT\'S A DRAW!'
    } else if (playerChoice === 'rock' && opponentChoice === 'paper') {
        result = 'YOU LOSE!'
    } else if (playerChoice === 'rock' && opponentChoice === 'scissors') {
        result = 'YOU WIN!'
    } else if (playerChoice === 'rock' && opponentChoice === 'lizard') {
        result = 'YOU WIN!'
    } else if (playerChoice === 'rock' && opponentChoice === 'spock') {
        result = 'YOU LOSE!'
    } else if (playerChoice === 'paper' && opponentChoice === 'rock') {
        result = 'YOU WIN!'
    } else if (playerChoice === 'paper' && opponentChoice === 'scissors') {
        result = 'YOU LOSE!'
    } else if (playerChoice === 'paper' && opponentChoice === 'lizard') {
        result = 'YOU LOSE!'
    } else if (playerChoice === 'paper' && opponentChoice === 'spock') {
        result = 'YOU WIN!'
    } else if (playerChoice === 'scissors' && opponentChoice === 'rock') {
        result = 'YOU LOSE!'
    } else if (playerChoice === 'scissors' && opponentChoice === 'paper') {
        result = 'YOU WIN!'
    } else if (playerChoice === 'scissors' && opponentChoice === 'lizard') {
        result = 'YOU WIN!'
    } else if (playerChoice === 'scissors' && opponentChoice === 'spock') {
        result = 'YOU LOSE!'
    } else if (playerChoice === 'lizard' && opponentChoice === 'rock') {
        result = 'YOU LOSE!'
    } else if (playerChoice === 'lizard' && opponentChoice === 'paper') {
        result = 'YOU WIN!'
    } else if (playerChoice === 'lizard' && opponentChoice === 'scissors') {
        result = 'YOU LOSE!'
    } else if (playerChoice === 'lizard' && opponentChoice === 'spock') {
        result = 'YOU WIN!'
    } else if (playerChoice === 'spock' && opponentChoice === 'rock') {
        result = 'YOU WIN!'
    } else if (playerChoice === 'spock' && opponentChoice === 'paper') {
        result = 'YOU LOSE!'
    } else if (playerChoice === 'spock' && opponentChoice === 'scissors') {
        result = 'YOU WIN!'
    } else if (playerChoice === 'spock' && opponentChoice === 'lizard') {
        result = 'YOU LOSE!'
    }
    // without this, the result won't be displayed
    resultShow.innerHTML = result;
}

// STEP 4
// create function to determine score value
function increaseWinnerScore() {
    let calculateResult = document.getElementById('match_result').innerHTML;
    if (calculateResult === 'YOU WIN!') {
        playerScore = ++playerScore;
    } else if (calculateResult === 'YOU LOSE!') {
        opponentScore = ++opponentScore;
    }
    document.getElementById('player_score').innerHTML = playerScore;
    document.getElementById('opponent_score').innerHTML = opponentScore;
}

