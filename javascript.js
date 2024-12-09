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

// FUNCTION ALLOWING TO PLAY A FULL GAME OF FIVE ROUNDS

function playGame() {

    // VARIABLES COUNTING COMPUTER'S AND PLAYER'S SCORES

    let computerScore = 0;
    let humanScore = 0;

    // FUNCTION ALLOWING TO PLAY A SINGLE ROUND

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log('That\'s a draw!');
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore += 1;
            console.log('You won! Rock beats scissors!');
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore += 1;
            console.log('You won! Paper beats rock!');
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore += 1;
            console.log('You won! Scissors beat paper!');
        } else {
            computerScore += 1;
            console.log('You lost, try again!');
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Your choice: ${humanSelection}`);
        console.log(`Computer choice: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`Your score is: ${humanScore}`);
        console.log(`Computer score is: ${computerScore}`);
    }

    if (computerScore > humanScore) {
        console.log(`Computer won with ${computerScore} points, best luck next time!`);
    } else if (humanScore > computerScore) {
        console.log(`You won! You scored ${humanScore} points!`);
    } else {
        console.log(`Wow, that's a draw!`);
    }
}

playGame();