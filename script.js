let playerScore = 0
let computerScore = 0


function playRound() {
    const computerSelection = computerPlay()

    const playerSelection = prompt("Make your selection").toLowerCase()

    function computerPlay() {
        let hand = ["rock", "paper", "scissors"]
        let random = Math.floor(Math.random() * hand.length)
        return hand[random]
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return ("You win! Rock beats scissors")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return ("You lose! Rock beats scissors")
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return ("You lose! Scissors beat paper")
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return ("You win! Scissors beats paper")
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return ("You lose! Paper beats rock")
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return ("You win! Paper beats rock")
    }
    else {
        return ("Draw!")
    }
}

function game() {
    console.log("game starts")
    for (let i = 1; i <= 5; i++) {
        console.log(playRound())
    }
    if (playerScore > computerScore) {
        console.log("You won!")
    }
    else if (playerScore===computerScore){
        console.log("It's a draw!")
    }
    else {
        console.log("You lost!")
    }
}

game()