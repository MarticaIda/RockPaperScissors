// now need to make sure game fully stops after winning 5 and offer to play again
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
const playAgain = document.getElementById('playAgain');
const btnTryAgain = document.createElement('button');

function playGame () {
  playAgain.textContent = '';
  playerScore = 0;
  computerScore = 0;
  // create player selection
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const val = button.value;
      playerSelection = val;
      // to be able to use playerSelection variable outside of this function need to pass it as argument to the target function
      playRound(playerSelection, computerSelection);
    });
  });

  function playRound (playerSelection, computerSelection) {
  // create randomized computer selection
    computerSelection = computerPlay();
    function computerPlay () {
      const hand = ['rock', 'paper', 'scissors'];
      const random = Math.floor(Math.random() * hand.length);
      return hand[random];
    };
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
      playerScore++;
      document.getElementById('call').innerText = 'You win! Rock beats scissors';
      document.getElementById('result').innerText = `Player: ${playerScore} ` + `Computer: ${computerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      computerScore++;
      document.getElementById('call').innerText = 'You lose! Rock beats scissors';
      document.getElementById('result').innerText = `Player: ${playerScore} ` + `Computer: ${computerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      computerScore++;
      document.getElementById('call').innerText = 'You lose! Scissors beat paper';
      document.getElementById('result').innerText = `Player: ${playerScore} ` + `Computer: ${computerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      playerScore++;
      document.getElementById('call').innerText = 'You win! Scissors beats paper';
      document.getElementById('result').innerText = `Player: ${playerScore} ` + `Computer: ${computerScore}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      computerScore++;
      document.getElementById('call').innerText = 'You lose! Paper beats rock';
      document.getElementById('result').innerText = `Player: ${playerScore} ` + `Computer: ${computerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerScore++;
      document.getElementById('call').innerText = 'You win! Paper beats rock';
      document.getElementById('result').innerText = `Player: ${playerScore} ` + `Computer: ${computerScore}`;
    } else if (playerSelection === computerSelection) {
      document.getElementById('call').innerText = 'It\'s a draw!';
      document.getElementById('result').innerText = `Player: ${playerScore} ` + `Computer: ${computerScore}`;
    };
    // ensure that the game runs till score of 5
    if (playerScore === 5 || computerScore === 5) {
      score();
    } else if (playerScore > 5 || computerScore > 5) {
      playerScore = 0;
      computerScore = 0;
      btnTryAgain.textContent = 'Wanna play again?';
      playAgain.appendChild(btnTryAgain);
      btnTryAgain.addEventListener('click', playGame);
    };
  };

  // function that tallies the score
  function score () {
    playRound(playerSelection, computerSelection);
    if (playerScore > computerScore) {
      document.getElementById('result').innerText = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
      document.getElementById('call').innerText = 'You won!';
    } else {
      document.getElementById('result').innerText = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
      document.getElementById('call').innerText = 'You lost!';
    };
  };
};

playGame();
