let playerScore = 0;
let computerScore = 0;
const buttonRock = document.getElementById('buttonRock').addEventListener('click', playRoundRock);
const buttonPaper = document.getElementById('buttonPaper').addEventListener('click', playRoundPaper);
const buttonScissors = document.getElementById('buttonScissors').addEventListener('click', playRoundScissors);

function playRoundRock() {
  const computerSelection = computerPlay();
  const playerSelectionRock = 'rock';

  function computerPlay() {
    const hand = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
  };

  if (playerSelectionRock && computerSelection === 'scissors') {
    playerScore++
    return ('You win! Rock beats scissors');
  } else if (playerSelectionRock && computerSelection === 'paper') {
    computerScore++
    return ('You lose! Paper beats rock');
  } else if (playerSelectionRock === computerSelection) {
    return ('Draw!');
  };
};

function playRoundPaper() {
  const computerSelection = computerPlay();
  const playerSelectionPaper = 'paper';

  function computerPlay() {
    const hand = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
  };

  if (playerSelectionPaper && computerSelection === 'scissors') {
    computerScore++
    return ('You lose! Scissors beat paper');
  } else if (playerSelectionPaper && computerSelection === 'rock') {
    playerScore++
    return ('You win! Paper beats rock');
  } else if (playerSelectionPaper === computerSelection) {
    return ('Draw!');
  };
};

function playRoundScissors() {
  const computerSelection = computerPlay();
  const playerSelectionScissors = 'scissors';

  function computerPlay() {
    const hand = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
  };

  if (playerSelectionScissors && computerSelection === 'rock') {
    computerScore++
    return ('You lose! Rock beats scissors');
  } else if (playerSelectionScissors && computerSelection === 'paper') {
    playerScore++
    return ('You win! Scissors beats paper');
  } else if (playerSelectionScissors === computerSelection) {
    return ('Draw!');
  };
};

// function playGame () {
//   console.log('game starts');
//   for (let i = 1; i <= 5; i++) {
//     console.log(playRound());
//   } if (playerScore > computerScore) {
//     console.log('You won!');
//   } else if (playerScore === computerScore) {
//     console.log("It's a draw!");
//   } else {
//     console.log('You lost!')
//   };
// };

playGame();
