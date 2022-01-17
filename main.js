// Allow computer to play
function computerPlay() {
    const gameChoices = ["Rock", "Paper", "Scissors"];
    return gameChoices[Math.floor(Math.random() * gameChoices.length)]
}

/** Allow user to play round */
function playRound(playerSelection, computerSelection) {
    let modifiedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const gameChoices = ["Rock", "Paper", "Scissors"];

    if (!(gameChoices.includes(modifiedPlayerSelection))) {
        throw `Value not supported. Value must be one of  
            Rock, Paper, Scissors`
    }

    
}


// If user input != one of three choices, raise an error
    // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// Run conditional tests on RPS. For example --> (See below)
    // Rock > Scissor
    // Paper > Rock
    // Scissor > Paper
