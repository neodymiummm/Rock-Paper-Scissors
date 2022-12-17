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
    let input = prompt("What is your throw? (Rock, Paper, Scissors)").toLowerCase();
    if (throws.findIndex(x => x === input) === -1) {
        return -1
    }

    return input;
}

console.log(getPlayerChoice())

function doRound(playerChoice, computerChoice) {
    let playerIdx = throws.findIndex(x => x === playerChoice);
    let computerIdx = throws.findIndex(x => x === computerChoice);
    let outcome = rules[playerIdx][computerIdx];

    return outcome;
}


