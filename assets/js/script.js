const gameChoices = document.querySelectorAll('button');
const p1ChoiceShow = document.getElementById('P1_choice');
const p2ChoiceShow = document.getElementById('P2_choice');
const resultShow = document.getElementById('match_result');
let p1Choice;
let p2Choice;
let result;
let p1Score = 0;
let p2Score = 0;

gameChoices.forEach(choice => choice.addEventListener('click', (btn_click) => {
    p1Choice = btn_click.target.id;
    p1ChoiceShow.innerHTML = p1Choice;
    generatep2Choice();
    generateResult();
    increaseWinnerScore();
}));

/*** funtion to generate random selection for the opponent */
function generatep2Choice() {
    // https://www.w3schools.com/js/js_random.asp
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    if (randomNumber === 1) {
        p2Choice = 'rock';
    } else if (randomNumber === 2) {
        p2Choice = 'paper';
    } else if (randomNumber === 3) {
        p2Choice = 'scissors';
    } else if (randomNumber === 4) {
        p2Choice = 'lizard';
    } else {
        p2Choice = 'spock';
    }
    p2ChoiceShow.innerHTML = p2Choice;
}

/*** funtion to determine the result of every choice */
function generateResult() {
    if (p1Choice === p2Choice) {
        result = 'DRAW!';
    } else if (p1Choice === 'rock' && p2Choice === 'paper') {
        result = 'YOU LOSE!';
    } else if (p1Choice === 'rock' && p2Choice === 'scissors') {
        result = 'YOU WIN!';
    } else if (p1Choice === 'rock' && p2Choice === 'lizard') {
        result = 'YOU WIN!';
    } else if (p1Choice === 'rock' && p2Choice === 'spock') {
        result = 'YOU LOSE!';
    } else if (p1Choice === 'paper' && p2Choice === 'rock') {
        result = 'YOU WIN!';
    } else if (p1Choice === 'paper' && p2Choice === 'scissors') {
        result = 'YOU LOSE!';
    } else if (p1Choice === 'paper' && p2Choice === 'lizard') {
        result = 'YOU LOSE!';
    } else if (p1Choice === 'paper' && p2Choice === 'spock') {
        result = 'YOU WIN!';
    } else if (p1Choice === 'scissors' && p2Choice === 'rock') {
        result = 'YOU LOSE!';
    } else if (p1Choice === 'scissors' && p2Choice === 'paper') {
        result = 'YOU WIN!';
    } else if (p1Choice === 'scissors' && p2Choice === 'lizard') {
        result = 'YOU WIN!';
    } else if (p1Choice === 'scissors' && p2Choice === 'spock') {
        result = 'YOU LOSE!';
    } else if (p1Choice === 'lizard' && p2Choice === 'rock') {
        result = 'YOU LOSE!';
    } else if (p1Choice === 'lizard' && p2Choice === 'paper') {
        result = 'YOU WIN!';
    } else if (p1Choice === 'lizard' && p2Choice === 'scissors') {
        result = 'YOU LOSE!';
    } else if (p1Choice === 'lizard' && p2Choice === 'spock') {
        result = 'YOU WIN!';
    } else if (p1Choice === 'spock' && p2Choice === 'rock') {
        result = 'YOU WIN!';
    } else if (p1Choice === 'spock' && p2Choice === 'paper') {
        result = 'YOU LOSE!';
    } else if (p1Choice === 'spock' && p2Choice === 'scissors') {
        result = 'YOU WIN!';
    } else if (p1Choice === 'spock' && p2Choice === 'lizard') {
        result = 'YOU LOSE!';
    }
    resultShow.innerHTML = result;
}

/*** function to determine score value */ 
function increaseWinnerScore() {
    let calculateResult = document.getElementById('match_result').innerHTML;
    if (calculateResult === 'YOU WIN!') {
        p1Score = ++p1Score;
    } else if (calculateResult === 'YOU LOSE!') {
        p2Score = ++p2Score;
    }
    document.getElementById('player_score').innerHTML = p1Score;
    document.getElementById('opponent_score').innerHTML = p2Score;
}
