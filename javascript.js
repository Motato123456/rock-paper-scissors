function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0){
        return "scissors";
    }
    else if (num === 1){
        return "rock";
    }
    
    else {
        return "paper";
    }
    
}
console.log(getComputerChoice()) 

function getHumanChoice(){
    let input = prompt("Whats your choice?:");
    input = input.toLowerCase();
    return input 
}

console.log(getHumanChoice())
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log( "it is a tie!");
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            humanScore ++;
            console.log("you win!");
        }
        else {
            computerScore++;
            console.log("you lose!");
        }
    }
    else if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
            humanScore ++;
            console.log( "you win!");
        }
        else {
            computerScore++;
            console.log("you lose!");
        }
    }
    else if (humanChoice == "rock"){
        if (computerChoice == "scissors"){
            humanScore ++;
            console.log("you win!");
        }
        else {
            computerScore++;
            console.log("you lose!");
        }
    }

}

