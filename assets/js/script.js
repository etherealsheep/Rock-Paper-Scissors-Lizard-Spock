// STEP 1
// create a function to allow player choice the same button value
// e.g.; if spock button is pressed, assign spock_value to player choice
const gameChoices = document.querySelectorAll('button');
const playerChoiceShow = document.getElementById('player_choice');
const opponentChoiceShow = document.getElementById('opponent_choice');
const resultShow = document.getElementById('fight_result');
let playerChoice;
let opponentChoice;
let result;

// when the function is called, it also calls functions to assign opponent value choice and generate result
gameChoices.forEach(choice => choice.addEventListener('click', (btn_click) => {
    playerChoice = btn_click.target.id
    playerChoiceShow.innerHTML = playerChoice;
    // also generate choice for the opponent
    // also generate the result
}))

// STEP 2
//**funtion to generate random selection for the opponent */
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
    // without this the opponent choice wont be shown
    opponentChoiceShow.innerHTML = opponentChoice;
}