// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// playGame();

// function playGame(){
//     let rounds = parseInt(prompt("Enter the number of times you want to play the game"))
//     let decision;
//     for(let i = 0; i < rounds; i++){
//         playerSelection = prompt("Choose from rock-paper-scissors");
//         computerSelection = getComputerChoice();
//         decision = playRound(playerSelection, computerSelection);
//         prompt(decision);
//     }
// }

let rock = document.querySelector('#Rock');
let paper = document.querySelector('#Paper');
let scissors = document.querySelector('#Scissors');

let playerSelection = "";
let computerSelection = "";
let userPoints = 0;
let compPoints = 0;
let count = 0;

let choice = document.querySelector('.choice');

choice.addEventListener('click', (e) => {
    console.log(e.target.id)
    switch (e.target.id) {
        case 'Rock':
            
            playerSelection = e.target.id;
            computerSelection = getComputerChoice();
            break;

        case 'Paper':
            
            playerSelection = e.target.id;
            computerSelection = getComputerChoice();
            break;  
            
        case 'Scissors':
            
            playerSelection = e.target.id;
            computerSelection = getComputerChoice();
            break;     
    }
    let result = document.createElement('div');
    result.textContent = `You chose ${playerSelection.toUpperCase()}! and Computer chose ${computerSelection}!`;
    let currentDecision = document.createElement('p');
    currentDecision.textContent = playRound(playerSelection, computerSelection);
    result.appendChild(currentDecision);

    let userScore = document.createElement('p');
    userScore.textContent = `Your score: ${userPoints}`;
    currentDecision.insertAdjacentElement("afterend", userScore);

    let compScore = document.createElement('p');
    compScore.textContent = `Computer's score: ${compPoints}`;
    userScore.insertAdjacentElement("afterend", compScore);

    choice.appendChild(result);

    if (userPoints == 5) {
        let gameResult = document.createElement('div');
        gameResult.textContent = "You won the game. Yay!";
        userPoints = 0;
        compPoints = 0;
        result.appendChild(gameResult);
    }
    else if (compPoints == 5) {
        let gameResult = document.createElement('div');
        gameResult.textContent = "Computer won the game. Lol!";
        userPoints = 0;
        compPoints = 0;
        choice.appendChild(gameResult);
    }
    
});

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)
    let choice = "";
    if (rand == 0) {
        choice = "ROCK";
    }
    else if (rand == 1) {
        choice = "PAPER";
    }
    else choice = "SCISSORS";
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        result = "Its a tie!";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        compPoints++;
        result = "You Lose! Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        userPoints++;
        result = "You Won! Rock beats Scissors";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        userPoints++;
        result = "You Won! Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        compPoints++;
        result = "You Lose! Scissors beats Paper";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        userPoints++;
        result = "You Won! Scissors beats Paper";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        compPoints++;
        result = "You Lose! Rock beats Scissors";
    }

    return result;

}