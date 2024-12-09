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

console.log(getComputerChoice());

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

console.log(getHumanChoice());