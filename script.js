const choices = ["Rock", "Paper", "Scissor"];

getComputerChoice = function() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    return choice;
};

// console.log(getComputerChoice());