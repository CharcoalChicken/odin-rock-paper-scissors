
//Get computers choice
function getComputersChoice(max) {    
    let options = [`rock`, `paper`, `scissors`];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}


//Get humans choice
function getHumansChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

//Player Score tracking variables
let humanScore = 0;
let computerScore = 0;

//Play a single round
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log(`It's a draw! You both picked ${humanChoice}.`);
    } else if (
    (humanChoice == "paper" && computerChoice == "rock") || 
    (humanChoice == "scissors" && computerChoice == "paper") || 
    (humanChoice == "rock" && computerChoice == "scissors") 
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    }
}

const humanSelection = getHumansChoice();
const computerSelection = getComputersChoice();

playRound(humanSelection, computerSelection);