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
        return ("You win! Rock beats scissors")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You lose! Rock beats scissors")
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You lose! Scissors beat paper")
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beats paper")
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You lose! Paper beats rock")
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock")
    }
    else {
        return ("Draw!")
    }
}

function game() {
    console.log("game starts")
    for (let i = 1; i <= 5; i++) {
        console.log('i: ' + i.toString())
        console.log(playRound())
    }
}

game()