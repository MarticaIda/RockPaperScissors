let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', playGame);
});

function playGame () {
  const userChoice = buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const tempUserChoice = e.target.textContent;
      return tempUserChoice;
    });
  });

  const computerChoice = computerSelection();
  function computerSelection () {
    const hand = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
  };
  console.log(computerChoice);
  console.log(userChoice);

  function playRound () {
    console.log(computerChoice);
    if (userChoice === 'rock' && computerChoice === 'scissors') {
      userScore++;
      document.getElementById('call').innerText = 'You win! Rock beats scissors';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      computerScore++;
      document.getElementById('call').innerText = 'You lose! Rock beats scissors';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      computerScore++;
      document.getElementById('call').innerText = 'You lose! Scissors beat paper';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      userScore++;
      document.getElementById('call').innerText = 'You win! Scissors beats paper';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      computerScore++;
      document.getElementById('call').innerText = 'You lose! Paper beats rock';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      userScore++;
      document.getElementById('call').innerText = 'You win! Paper beats rock';
    } else if (userChoice === computerChoice) {
      document.getElementById('call').innerText = 'It\'s a draw!';
    };
  };

  // document.getElementById('invitation').innerText = 'Make Your Choice';
  for (let i = 1; i <= (userScore === 5 || computerScore === 5); i++) {
    document.getElementById('invitation').innerText = 'One More';
    playRound(userChoice, computerChoice);
  } if (userScore > computerScore) {
    document.getElementById('result').innerText = `You won! Player Score: ${userScore} - Computer Score: ${computerScore}`;
  } else {
    document.getElementById('result').innerText = `You lost! Player Score: ${userScore} - Computer Score: ${computerScore}`;
  };
};
