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

// FUNCTION ALLOWING USER TO PLAY ONE ROUND

let playerSelection = '';
let computerScore = 0;
let playerScore = 0;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log('That\'s a draw!');
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore += 1;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore += 1;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore += 1;
    } else {
        computerScore += 1;
    }
}

// FUNCTION DECIDING WHO WON

function whoWon() {
    if (computerScore === 5) {
        score.textContent = `Computer won with ${computerScore} points.`;
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
    } else if (playerScore === 5) {
        score.textContent = `Player won with ${playerScore} points.`;
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
    } else {
        score.textContent = `Computer: ${computerScore}. Player: ${playerScore}.`;
    }
}

// BUTTONS AND THEIR EVENT LISTENERS

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const scoreDiv = document.querySelector("#result");
const score = document.createElement("h3");
scoreDiv.appendChild(score);

const reset = document.createElement("button");
reset.textContent = 'Play again';
scoreDiv.appendChild(reset);

reset.addEventListener("click", () => {
    location.reload();
});

rock.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    whoWon();
});
paper.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    whoWon();
});
scissors.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    whoWon();
});