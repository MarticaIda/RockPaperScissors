const playerScore = 0;
const computerScore = 0;
let result = document.getElementById('result');

function playRound() {
  do {
    function computerPlay() {
      const hand = ['rock', 'paper', 'scissors'];
      const random = Math.floor(Math.random() * hand.length);
      return hand[random];
    }
    while (i<=playerScore || i<=computerScore);
  }
}
function playGame() {
  // keep track of score until it reaches 5
  // for every round invite player to click on choice button
  // player clicks on the choice button and computer makes a choice
  // if statement declares who wins round
  // score is incremented and displayed
  // when one score reaches 5 game stops
  // result is displayed
  return (result = `Player Score: ${playerScore} Computer Score: ${computerScore}`)
};

playGame();
