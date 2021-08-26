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
    win = -1; // we are just counting the wins
  }
  return win;
}
let computerwin = 0;
let mywin = 0;

function game(e) {
  let winner = document.querySelector(".winner");
  if (mywin === 5 || computerwin === 5) {
    mywin = 0;
    computerwin = 0;
    winner.textContent = "";
  }
  // for (let i = 0; i < 5; i++) {
  //   //   const playerSelection = prompt("Choose from RPS");
  //   const computerSelection = computerPlay();
  //   if (decideWinner(playerSelection, computerSelection)) myScore++;
  // }
  const playerSelection = e.target.classList[0];
  const computerSelection = computerPlay();

  if (decideWinner(playerSelection, computerSelection) === 1) {
    mywin++;
  } else if (decideWinner(playerSelection, computerSelection) === -1) {
    computerwin++;
  }

  let myScore = document.querySelector(".my-score");
  myScore.textContent = `My wins: ${mywin}`;
  let computerScore = document.querySelector(".computer-score");
  computerScore.textContent = `Computer wins: ${computerwin}`;

  if (mywin === 5 || computerwin === 5) {
    const list = ["You Win", "You Lose"];
    if (myScore == 5) winner.textContent = list[0];
    else {
      winner.textContent = list[1];
    }
  }
}

function displayResult(myScore) {
  const list = ["You Win", "You Lose"];
  if (myScore >= 3) console.log(list[0]);
  else console.log(list[1]);

  console.log(`Your win: ${myScore}`);
}

//game();

const buttonsList = document.querySelectorAll("button");
buttonsList.forEach((button) => button.addEventListener("click", game));
