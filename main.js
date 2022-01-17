// Allow computer to play
function computerPlay() {
    const gameChoices = ["Rock", "Paper", "Scissors"];
    return gameChoices[Math.floor(Math.random() * gameChoices.length)]
}

// Allow user to play round 
function playRound(playerSelection, computerSelection) {
    let modifiedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const gameChoices = ["Rock", "Paper", "Scissors"];

    if (!(gameChoices.includes(modifiedPlayerSelection))) {
        throw `Value not supported. Value must be one of  
            Rock, Paper, Scissors`
    }

    // Game rules
    if (playerSelection == computerSelection) {
        return `Tie! ${playerSelection} equals ${playerSelection}`
    }
    else if ((playerSelection == "Rock") && (computerSelection == "Scissor")) {
        return `You Win! Rock beats Scissor`;
    }
    else if ((playerSelection == "Rock") && (computerSelection == "Paper")) {
        return `You Lose! Paper beats Rock`;
    }

    else if ((playerSelection == "Paper") && (computerSelection == "Rock")) {
        return `You Win! Paper beats Rock`;
    }

    else if ((playerSelection == "Paper") && (computerSelection == "Scissor")) {
        return `You Lose! Scissor beats Paper`;
    }

    else if ((playerSelection == "Scissor") && (computerSelection == "Rock")) {
        return `You Lose! Rock beats Scissor`;
    }

    else if ((playerSelection == "Scissor") && (computerSelection == "Paper")) {
        return `You Win! Scissor beats Paper`;
    }
}

