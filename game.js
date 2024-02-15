// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

playGame();

function playGame(){
    let rounds = parseInt(prompt("Enter the number of times you want to play the game"))
    let decision;
    for(let i = 0; i < rounds; i++){
        playerSelection = prompt("Choose from rock-paper-scissors");
        computerSelection = getComputerChoice();
        decision = playRound(playerSelection, computerSelection);
        prompt(decision);
    }
}


function getComputerChoice() {
 let rand = Math.floor(Math.random() * 3)
 let choice = "";
 if(rand == 0){
    choice = "rock";
 }   
 else if(rand == 1){
    choice = "paper";
 }
 else choice = "scissors";
 return choice;
}

function playRound(playerSelection, computerSelection){
    let result = "";
    if(playerSelection == computerSelection){
        result = "tie";
    }
    else if(playerSelection.toLowerCase() == "rock"  && computerSelection.toLowerCase() == "paper"){
        result = "You Lose! Paper beats Rock"
    }
    else if(playerSelection.toLowerCase() == "rock"  && computerSelection.toLowerCase() == "scissors"){
        result = "You Won! Rock beats Scissors"
    }
    else if(playerSelection.toLowerCase() == "paper"  && computerSelection.toLowerCase() == "rock"){
        result = "You Won! Paper beats Rock"
    }
    else if(playerSelection.toLowerCase() == "paper"  && computerSelection.toLowerCase() == "scissors"){
        result = "You Lose! Scissors beats Paper"
    }
    else if(playerSelection.toLowerCase() == "scissors"  && computerSelection.toLowerCase() == "paper"){
        result = "You Won! Scissors beats Paper"
    }
    else if(playerSelection.toLowerCase() == "scissors"  && computerSelection.toLowerCase() == "rock"){
        result = "You Lose! Rock beats Scissors"
    }

    return result;

}