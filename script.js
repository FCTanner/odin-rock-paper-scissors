const choices = ["Rock", "Paper", "Scissor"];
const maxRounds = 5;
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 1;

// Get player choices
getComputerChoice = function () {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const choice = choices[randomIndex];
  return choice;
};

getHumanChoice = function () {
  choice = prompt('Enter your choice: "Rock", "Paper" or "Scissor"');

  if (!choices.includes(choice)) {
    console.warn(choice + " is not a valid option, choose again!");
    getHumanChoice();
  }

  return choice;
};

// Determine round winner
computerWins = function (humanChoice, computerChoice) {
  console.log(
    "Round " +
      roundsPlayed +
      ": You chose " +
      humanChoice +
      " and I chose " +
      computerChoice +
      ", so I win!"
  );
  computerScore += 1;
};

humanWins = function (humanChoice, computerChoice) {
  console.log(
    "Round " +
      roundsPlayed +
      ": You chose " +
      humanChoice +
      " and I chose " +
      computerChoice +
      ", so you win!"
  );
  humanScore += 1;
};

tie = function (humanChoice, computerChoice) {
  console.log(
    "Round " +
      roundsPlayed +
      ": You chose " +
      humanChoice +
      " and I chose " +
      computerChoice +
      ", so it's a tie!"
  );
};

determineWinner = function (humanChoice, computerChoice) {
  if ((humanChoice === "Rock") & (computerChoice === "Scissor"))
    humanWins(humanChoice, computerChoice);
  if ((humanChoice === "Rock") & (computerChoice === "Paper"))
    computerWins(humanChoice, computerChoice);
  if ((humanChoice === "Rock") & (computerChoice === "Rock"))
    tie(humanChoice, computerChoice);

  if ((humanChoice === "Paper") & (computerChoice === "Scissor"))
    computerWins(humanChoice, computerChoice);
  if ((humanChoice === "Paper") & (computerChoice === "Rock"))
    humanWins(humanChoice, computerChoice);
  if ((humanChoice === "Paper") & (computerChoice === "Paper"))
    tie(humanChoice, computerChoice);

  if ((humanChoice === "Scissor") & (computerChoice === "Rock"))
    computerWins(humanChoice, computerChoice);
  if ((humanChoice === "Scissor") & (computerChoice === "Paper"))
    humanWins(humanChoice, computerChoice);
  if ((humanChoice === "Scissor") & (computerChoice === "Scissor"))
    tie(humanChoice, computerChoice);
};

// Play a round
playRound = function () {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  const winner = determineWinner(humanChoice, computerChoice);
  roundsPlayed += 1;
};

judgeFinalScore = function (humanScore, computerScore) {
  const intro =
    "Final score after " +
    maxRounds +
    " rounds: My score was " +
    computerScore +
    " and your score was " +
    humanScore +
    " →";

  if (humanScore == computerScore) {
    console.log(intro + " Tie overall.");
  }
  if (humanScore > computerScore) {
    console.log(intro + " You win overall!");
  }
  if (humanScore < computerScore) {
    console.log(intro + " I win overall!");
  }
};

// Play entire game
playGame = function () {
  console.warn("New game of " + maxRounds + " rounds starts!");
  while (roundsPlayed <= maxRounds) {
    playRound();
  }

  judgeFinalScore(humanScore, computerScore);
};

playGame();
