console.log('hello');

// FUNCTION GENERATING RANDOM ITEM FOR THE COMPUTER SIDE

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// FUNCTION PROMPTING THE USER FOR THEIR CHOICE

function getHumanChoice() {
    let humanChoice = prompt('Please choose: rock paper or scissors.');

    if (humanChoice.toLowerCase() === 'rock') {
        return 'rock';
    } else if (humanChoice.toLowerCase() === 'paper') {
        return 'paper';
    } else if (humanChoice.toLowerCase() === 'scissors') {
        return 'scissors';
    } else {
        return 'error';
    }
}

// VARIABLES COUNTING COMPUTER'S AND PLAYER'S SCORES

let computerScore = 0;
let humanScore = 0;

// FUNCTION ALLOWING TO PLAY A SINGLE ROUND

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'That\'s a draw!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        return 'You won! Rock beats scissors!';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        return 'You won! Paper beats rock!';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        return 'You won! Scissors beat paper!';
    } else {
        computerScore += 1;
        return 'You lost, try again!';
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`Your choice: ${humanSelection}.`);
console.log(`Computer\'s choice: ${computerSelection}.`);

console.log(playRound(humanSelection, computerSelection));
console.log(humanScore);
console.log(computerScore);