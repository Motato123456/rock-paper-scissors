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
let humanScore = 0;
let computerScore = 0;  

function getHumanChoice(){
    let input = prompt("Whats your choice?:");
    input = input.toLowerCase();
    return input 
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log( "it is a tie!");
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            
            console.log("you win! paper beats rock");
            return 'win' ;
        }
        else {
            
            console.log("you lose! scissors beats paper");
            return 'lose';
        }
    }
    else if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
           
            console.log( "you win! scissors beats paper");
            return 'win';
        }
        else {
            
            console.log("you lose! rock beats scissors");
            return 'lose';
        }
    }
    else if (humanChoice == "rock"){
        if (computerChoice == "scissors"){
            
            console.log("you win! rock beats scissors");
            return 'win';
        }
        else {
            
            console.log("you lose! paper beats rock");
            return 'lose';
        }
    }

}


function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);
        if (result == "win") {
            humanScore++;
            
          } else if (result == "lose"){
            computerScore++;
            
          }
          
    }


    if (humanScore > computerScore){
        return "YOU WIN!"
    }
    else {
        return "YOU LOSE!"
    }


}
console.log(playGame())
