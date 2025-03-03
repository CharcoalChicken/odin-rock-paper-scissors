

// Computers choice & resullt
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
    let computerChoiceResult = getComputerChoice();
}



if (computerChoiceResult === 0) {
    console.log("Rock");
} else if (computerChoiceResult === 1) {
    console.log("Paper");
} else {
    console.log("Scissors");
}
  



