
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

    if (humanChoice === 'Paper' && computerChoice === 'Rock'){
        humanScore++;
        console.log('You Win! Paper beats Rock');
    } 
    else if (humanChoice === 'Scissors' && computerChoice === 'Paper'){
        humanScore++;
        console.log('You Win! Scissors beats Paper');
    } 
    else if (humanChoice === 'Rock' && computerChoice === 'Scissors'){
        humanScore++;
        console.log('You Win! Rock beats Scissors');
    } 
    else if (humanChoice === 'Rock' && computerChoice === 'Paper'){
        comupterScore++;
        console.log('You lose! Rock beats Paper!');
    } 
    else if (humanChoice === 'Paper' && computerChoice === 'Scissors'){
        comupterScore++;
        console.log('You lose! Scissors beats Paper!');
    } 
    else if (humanChoice === 'Scissors' && computerChoice == 'Rock'){
        comupterScore++;
        console.log('You lose! Rock beats Scissors');
    } 
    else if (humanChoice === computerChoice){
        console.log(`It's a draw! You both picked ${humanChoice}`);
        //Remeber to use backticks when using ${}
    } 
    else {
        console.log('Invalid answer, choose again.');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);








