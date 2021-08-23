const options = ["rock", "paper", "scissors"];

function computerPlay() {
  let number = Math.floor(Math.random() * 3);
  return options[number];
}

function decideWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let win = 0;
  const winnerChart = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  const msgs = {
    winmsg: `You Win! ${playerSelection} beats ${computerSelection}`,
    losemsg: `You Lose! ${computerSelection} beats ${playerSelection}`,
    drawmsg: "Draw! Your choices are the same. Play one more time.",
  };

  if (playerSelection === computerSelection) {
    win = 0; //we are just counting the wins
  } else if (winnerChart[playerSelection] === computerSelection) {
    // wrong :- winnerChart.playerSelection === computerSelection
    win = 1;
  } else {
    win = 0; // we are just counting the wins
  }
  return win;
}

function game() {
  let myScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose from RPS");
    const computerSelection = computerPlay();
    if (decideWinner(playerSelection, computerSelection)) myScore++;
  }
  displayResult(myScore);
}

function displayResult(myScore) {
  const list = ["You Win", "You Lose"];
  if (myScore >= 3) console.log(list[0]);
  else console.log(list[1]);

  console.log(`Your win: ${myScore}`);
}

game();
