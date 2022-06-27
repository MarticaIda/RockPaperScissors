const userScore = 0;
const computerScore = 0;
let result = document.getElementById('result');

function playGame() {
  do {
    function playRound() {
      const userSelection = userPlay();
      function userPlay() {
        const buttonRock = document.getElementById('button-rock').addEventListener('click', function chooseRock() {
          return userSelection = 'rock';
          });
        const buttonPaper = document.getElementById('button-paper').addEventListener('click', function choosePaper() {
          return userSelection = 'paper';
          });
        const buttonScissors = document.getElementById('button-scissors').addEventListener('click', function chooseScissors() {
          return userSelection = 'scissors';
          });
      }
      const computerSelection = computerPlay();
      function computerPlay() {
      const hand = ['rock', 'paper', 'scissors'];
      const random = Math.floor(Math.random() * hand.length);
      return hand[random]
    }
    }
    if (userSelection === 'rock' && computerSelection === 'scissors') {
      userScore++;
      return userScore;
    } else if (userSelection === 'scissors' && computerSelection === 'rock') {
      computerScore++;
      return computerScore;
    } else if (userSelection === 'paper' && computerSelection === 'scissors') {
      computerScore++;
      return computerScore;
    } else if (userSelection === 'scissors' && computerSelection === 'paper') {
      userScore++;
      return userScore;
    } else if (userSelection === 'rock' && computerSelection === 'paper') {
      computerScore++;
      return computerScore;
    } else if (userSelection === 'paper' && computerSelection === 'rock') {
      userScore++;
      return userScore;
    } else if (userSelection === computerSelection) {
      return ('Draw!');
    }
  while (i <= userScore || i <= computerScore)

// keep track of score until it reaches 5 DONE
// for every round invite user to click on choice button
// user clicks on the choice button and computer makes a choice DONE
// if statement declares who wins round DONE
// score is incremented and displayed
// when one score reaches 5 game stops
// result is displayed
  return (result = `user Score: ${userScore} Computer Score: ${computerScore}`);
  };
};
playGame();