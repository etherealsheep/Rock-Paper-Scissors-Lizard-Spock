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
