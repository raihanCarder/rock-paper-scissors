let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3) + 1);

    if (randomNum === 1) {
        return "scissors";
    }
    else if (randomNum === 2) {
        return "rock";
    }
    else {
        return "paper";
    }
}

function getHumanChoice() {
    let playerChoice = window.prompt("Rock Paper or Scissors?");
    return playerChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return;
    }
    else if (humanChoice === computerChoice) {
        return;
    }
    else {
        computerScore++;
        return;
    }
}

while (rounds < 5) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(humanChoice);
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);

    rounds++;

    if (rounds === 5) {
        if (humanScore > computerScore) {
            console.log("YOU WIN!!");
        }
        else {
            console.log("YOU LOSE!");
        }
    }

    console.log(`Human: ${humanScore} Robo: ${computerScore}`);
}

