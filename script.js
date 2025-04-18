const choices = ["Rock", "Paper", "Scissor"];
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


getComputerChoice = function() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    return choice;
};



getHumanChoice = function() {
    choice = prompt('Enter your choice: "Rock", "Paper" or "Scissor"');

    if (!choices.includes(choice)){
        console.warn(choice + " is not a valid option, choose again!");
        getHumanChoice();
    };

    return choice;
};



computerWins = function(humanChoice, computerChoice) {
    console.log("You chose " + humanChoice + " and I chose " + computerChoice + ", so I win!");  
};

humanWins = function(humanChoice, computerChoice) {
    console.log("You chose " + humanChoice + " and I chose " + computerChoice + ", so you win!");
};

tie = function(humanChoice, computerChoice) {
    console.log("You chose " + humanChoice + " and I chose " + computerChoice + ", so it's a tie!");
};



determineWinner = function(humanChoice, computerChoice)  {    
    if (humanChoice === "Rock" & computerChoice === "Scissor") humanWins(humanChoice, computerChoice);
    if (humanChoice === "Rock" & computerChoice === "Paper") computerWins(humanChoice, computerChoice);
    if (humanChoice === "Rock" & computerChoice === "Rock") tie(humanChoice, computerChoice);
    
    if (humanChoice === "Paper" & computerChoice === "Scissor") computerWins(humanChoice, computerChoice);
    if (humanChoice === "Paper" & computerChoice === "Rock") humanWins(humanChoice, computerChoice);
    if (humanChoice === "Paper" & computerChoice === "Paper") tie(humanChoice, computerChoice);

    if (humanChoice === "Scissor" & computerChoice === "Rock") rcomputerWins(humanChoice, computerChoice);
    if (humanChoice === "Scissor" & computerChoice === "Paper") humanWins(humanChoice, computerChoice);
    if (humanChoice === "Scissor" & computerChoice === "Scissor") tie(humanChoice, computerChoice);
};



playRound = function() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    const winner = determineWinner(humanChoice, computerChoice);
};



playGame = function() {
   playRound();
};



playGame();
