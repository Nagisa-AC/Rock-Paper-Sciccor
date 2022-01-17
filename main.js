// Allow computer to play
function computerPlay() {
    const gameChoices = ["Rock", "Paper", "Scissors"];
    return gameChoices[Math.floor(Math.random() * gameChoices.length)]
}
