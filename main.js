"use strict";

function computerPlay() {
	const computerChoices = ["Rock", "Paper", "Scissors"];
	return computerChoices[Math.floor(Math.random() * 3)];
}

function round(playerSelection, computerSelection) {
	// Keeping score of user and AI
	let userScore = 0;
	let computerScore = 0;
	
	// Unifying playerSelection to to be be in Title format
	let modifiedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

	// Edge cases
	const gameChoices = ["Rock", "Paper", "Scissors"];
	
	if (!(gameChoices.includes(modifiedPlayerSelection))) {
        throw `Value not supported. Value must be one of  
            Rock, Paper, Scissors`;
    }

	// Game Rules
	if (modifiedPlayerSelection == computerSelection) {
		return `Tie! ${modifiedPlayerSelection} = ${computerSelection}`;
	} else if (modifiedPlayerSelection == "Rock" && computerSelection == "Paper") {
		computerScore++;
		return `Defeat! Paper beats rock`
	} else if (modifiedPlayerSelection == "Rock" && computerSelection == "Scissors") {
		userScore++;
		return `Victory! Rock beats Scissors`
	} else if (modifiedPlayerSelection == "Paper" && computerSelection === "Rock") {
		userScore++;
		return `Victory! Paper beats Rock`;
	} else if (modifiedPlayerSelection == "Paper" && computerSelection == "Scissors") {
		computerScore++;
		return `Defeat! Scissors beats paper`;
	} else if (modifiedPlayerSelection == "Scissors" && computerSelection == "Rock") {
		computerScore++;
		return `Defeat! Rock beats Scissors`;
	} else if (modifiedPlayerSelection == "Scissors" && computerSelection == "Paper") {
		userScore++;
		return `Victory! Scissors beats Paper`;
	}

	// Show score after game
	(userScore > computerScore) ? console.log(`Your score: ${userScore}`) : console.log(`AI Score: ${computerScore}`);
}

// Repeat game
function Game() {
	let rounds = 5;
	for (let i=0; i<rounds; i++) {
		let userPlay = prompt("What is your choice?");
		let computerChoice = computerPlay();
		console.log(
			round(userPlay, computerChoice)
		)
	}
	
}

Game();
