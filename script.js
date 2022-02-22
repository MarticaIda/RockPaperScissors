let playerScore = 0
let computerScore = 0
let playerPrompt
let validChoices = []

function playRound () {
  const computerSelection = computerPlay()
  const playerSelection = promptForSelection()

  function computerPlay () {
    const hand = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * hand.length)
    return hand[random]
  }

  function promptForSelection () {
    validChoices = ['rock', 'paper', 'scissors']
    playerPrompt = prompt('Make your selection')
    if (playerPrompt != null) {
      playerPrompt = playerPrompt.toLowerCase()
    } else {
      alert('Game aborted')
      throw new Error('Game aborted')
    }

    while (validChoices.indexOf(playerPrompt) === -1) {
      alert('Not a valid choice. Pick again')
      playerPrompt = promptForSelection()
    }
    return playerPrompt
  }

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    return ('You win! Rock beats scissors')
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    return ('You lose! Rock beats scissors')
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    return ('You lose! Scissors beat paper')
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return ('You win! Scissors beats paper')
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++
    return ('You lose! Paper beats rock')
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    return ('You win! Paper beats rock')
  } else if (playerSelection === computerSelection) {
    return ('Draw!')
  }
}

function game () {
  console.log('game starts')
  for (let i = 1; i <= 5; i++) {
    console.log(playRound())
  } if (playerScore > computerScore) {
    console.log('You won!')
  } else if (playerScore === computerScore) {
    console.log("It's a draw!")
  } else {
    console.log('You lost!')
  }
}

game()
