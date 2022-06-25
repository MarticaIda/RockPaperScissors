let playerScore = 0;
let computerScore = 0;
//let playerPrompt;
//let validChoices = [];
const buttonRock = document.getElementById('buttonRock').addEventListener('click', playRound);
const buttonPaper = document.getElementById('buttonPaper').addEventListener('click', playRound);
const buttonScissors = document.getElementById('buttonScissors').addEventListener('click', playRound);

function playRound() {
  const computerSelection = computerPlay();
  const playerSelectionRock = 'rock';
  const playerSelectionPaper = 'paper';
  const playerSelectionScissors = 'scissors';


  function computerPlay() {
    const hand = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
  };

  // function promptForSelection() {
  //   validChoices = ['rock', 'paper', 'scissors'];
  //   playerPrompt = prompt('Make your selection');
  //   if (playerPrompt != null) {
  //     playerPrompt = playerPrompt.toLowerCase();
  //   } else {
  //     alert('Game aborted');
  //     throw new Error('Game aborted');
  //   };

  //   while (validChoices.indexOf(playerPrompt) === -1) {
  //     alert('Not a valid choice. Pick again');
  //     playerPrompt = promptForSelection();
  //   }
  //   return playerPrompt;
  // };

  if (playerSelectionRock && computerSelection === 'scissors') {
    playerScore++
    return ('You win! Rock beats scissors');
  } else if (playerSelectionScissors && computerSelection === 'rock') {
    computerScore++
    return ('You lose! Rock beats scissors');
  } else if (playerSelectionPaper && computerSelection === 'scissors') {
    computerScore++
    return ('You lose! Scissors beat paper');
  } else if (playerSelectionScissors && computerSelection === 'paper') {
    playerScore++
    return ('You win! Scissors beats paper');
  } else if (playerSelectionRock && computerSelection === 'paper') {
    computerScore++
    return ('You lose! Paper beats rock');
  } else if (playerSelectionPaper && computerSelection === 'rock') {
    playerScore++
    return ('You win! Paper beats rock');
  } else if (playerSelection === computerSelection) {//need to introduce another playerSelection-computerSelection comparison
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
