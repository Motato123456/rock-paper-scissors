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


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log( "it is a tie!");
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            
            console.log("you win! paper beats rock");
            humanScore++;
            human.textContent = humanScore;
            
        }
        else {
            console.log("you lose! scissors beats paper");
            computerScore++;
            computer.textContent = computerScore;
            
        }
    }
    else if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
           
            console.log( "you win! scissors beats paper");
            humanScore++;
            human.textContent = humanScore;
        }
        else {
            
            console.log("you lose! rock beats scissors");
            computerScore++;
            computer.textContent = computerScore;
        }
    }
    else if (humanChoice == "rock"){
        if (computerChoice == "scissors"){
            
            console.log("you win! rock beats scissors");
            humanScore++;
            human.textContent = humanScore;
        }
        else {
            
            console.log("you lose! paper beats rock");
            computerScore++;
            computer.textContent = computerScore;
        }
    }

}

const computer = document.querySelector(".computer")
const human = document.querySelector(".human")
const results = document.querySelector(".results")
const rock = document.querySelector(".roc");
const paper = document.querySelector(".pap");
const scissors = document.querySelector(".sci");



computer.style.border = "thick solid #000000";
computer.style.backgroundColor = 'pink';
computer.style.padding = '40px';
human.style.border = "thick solid #000000";
human.style.backgroundColor = 'pink';
human.style.padding = '40px';
results.style.border = "thick solid #000000";
results.style.backgroundColor = 'pink';
results.style.padding = '40px';

rock.addEventListener("click", () => {

    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    

});

scissors.addEventListener("click", () => {

    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    

});

paper.addEventListener("click", () => {

    const humanSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    

});


    

