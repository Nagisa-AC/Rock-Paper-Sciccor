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

    if ((modifiedPlayerSelection == "Rock") && (computerSelection == "Rock")) {
        return "Tie! Rock == Rock";
    }

    else if ((modifiedPlayerSelection == "Rock") && (computerSelection == "Paper")) {
        return "Defeat! Paper > Rock"
    }

    else if ( (modifiedPlayerSelection == "Rock") && (computerSelection == "Scissors") ) {
        return "Victory! Rock > Scissors"
    }

    else if ( (modifiedPlayerSelection == "Paper") && (computerSelection == "Paper") ) {
        return "Tie! Paper == Paper"
    }

    else if ( (modifiedPlayerSelection == "Paper") && (computerSelection == "Rock") ) {
        return "Victory! Paper > Rock"
    }

    else if ( (modifiedPlayerSelection == "Paper") && (computerSelection == "Scissors") ) {
        return "Defeat! Paper < Scissors"
    }

    else if ( (modifiedPlayerSelection == "Scissors") && (computerSelection == "Scissors") ) {
        return "Tie! Scissoros == Scissors"
    }

    else if ( (modifiedPlayerSelection == "Scissors") && (computerSelection == "Rock") ) {
        return "Defeat! Scissors < Rock"
    }

    else if ( (modifiedPlayerSelection == "Scissors") && (computerSelection == "Paper") ) {
        return "Victory! Scissors > Paper"
    }
}


// const playerSelection = "rock";
// const computerSelection = computerPlay();
// return playRound(playerSelection, computerSelection));
