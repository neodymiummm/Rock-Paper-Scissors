/*
Rock Paper Scissors Project 
*/

const throws = ["rock", "paper", "scissors"];
const rules = [[0, -1, 1]
             , [1, 0, -1]
             , [-1, 1, 0]];

function getComputerChoice() {
    let rand = Math.floor(3 * Math.random());
    return throws[rand];
}

function getPlayerChoice() {
    let input = prompt("What is your throw? (Rock, Paper, Scissors)");
    if (throws.findIndex(x => x === input) === -1) {
        return -1;
    }

    return input.toLowerCase();
}

function doRound(playerChoice, computerChoice) {
    let playerIdx = throws.findIndex(x => x === playerChoice);
    let computerIdx = throws.findIndex(x => x === computerChoice);
    let outcome = rules[playerIdx][computerIdx];

    return outcome;
}

function doGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log(`Beginning Round ${i + 1}`);
        
        let playerChoice = getPlayerChoice();
        if (playerChoice === -1) {
            console.log("Whoops! Something went wrong with your input, let's try again.");
            console.log("")
            continue;
        }

        let computerChoice = getComputerChoice();
        let result = doRound(playerChoice, computerChoice);

        console.log(`You played: ${playerChoice}`);
        console.log(`The Computer played ${computerChoice}`);
        switch (result) {
            case 1:
                console.log(`You won! ${playerChoice} beats ${computerChoice}`)
                break;
            case 0:
                console.log(`You tied, ${playerChoice} ties ${computerChoice}`)
                break;
            case -1:
                console.log(`You lost :( ${computerChoice} beats ${playerChoice}`)
                break;
            default:
                console.log("Whoops! Something went wrong with your input, let's try again.");
                console.log("")
        }
        console.log("")
    }
} 

doGame(3);
