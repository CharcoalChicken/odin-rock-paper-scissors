
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0){
        return 'Rock';
    }
    else if (computerChoice === 1){
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors? ");

    if(humanChoice === 'Rock'){
        return 'Rock';
    }
    else if (humanChoice === 'Paper'){
        return 'Paper';
    } 
    else if (humanChoice === 'Scissors'){
        return 'Scissors';
    }
    else {
        return 'Invalid answer, choose again.'
    }
}
console.log(getHumanChoice());










