//Get computers choice
function getComputersChoice(max) {
    let options = [`Rock`, `Paper`, `Scissors`];
    let random = options[Math.floor(Math.random() * options.length)];
    return random
}
getComputersChoice();

console.log(getComputersChoice());