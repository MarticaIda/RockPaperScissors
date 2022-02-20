const computerSelection = computerPlay()
const playerSelection = prompt("Make your selection")

function computerPlay() {
    let hand = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * hand.length)
    return hand[random]
}

function toLowerCase(text) {
    const lowerCased = text.toLowerCase
    return lowerCased
}
toLowerCase(playerSelection)

function singleRound() {
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
//Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//Remember loops? This is a great opportunity to use one to play those five rounds:
function game() {
    for (let i=0; i > 5; i++) {
       console.log(singleRound(i))
    }
}

game()