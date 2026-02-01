function PlayGame() {

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);

    if (computerSelection === 0){
        return 'Rock';
    }
    else if (computerSelection === 1){
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    let humanSelection = prompt("Rock, Paper or Scissors? ");

    if(humanSelection === 'Rock'){
        return 'Rock';
    }
    else if (humanSelection === 'Paper'){
        return 'Paper';
    } 
    else if (humanSelection === 'Scissors'){
        return 'Scissors';
    }
    else {
        return 'Invalid answer, choose again.'
    }
}

let humanScore = 0;
let comupterScore = 0;


function playRound(humanChoice, computerChoice) {

    if (humanChoice === 'Paper' && computerChoice === 'Rock' || 
        humanChoice === 'Scissors' && computerChoice === 'Paper' || 
        humanChoice === 'Rock' && computerChoice === 'Scissors'){
        humanScore++;
        console.log(`You Win! ${humanChoice} defeats ${computerChoice}`);
    }
    else if (humanChoice === 'Rock' && computerChoice === 'Paper' || 
            humanChoice === 'Paper' && computerChoice === 'Scissors' ||
            humanChoice === 'Scissors' && computerChoice == 'Rock'){
            comupterScore++;
            console.log(`You Lose! ${computerChoice} defeats ${humanChoice}`);
    } 
    else if (humanChoice === computerChoice){
        console.log(`It's a draw! You both picked ${humanChoice}`);
        //Remeber to use backticks when using ${}
    } 
    else {
        console.log("Invalid input. No round played.");

    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

for (let i = 1; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

}



PlayGame();







// I DONT KNOW HOW TO MAKE FUNCTION'S humanChoice PARAMETER CASE-INSENSITIVE

