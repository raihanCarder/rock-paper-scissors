const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const gameScoreText = document.getElementById("game-score");
const streakText = document.getElementById("streak");
const computerChoiceText = document.getElementById("computer-choice-text");
const resetBtn = document.getElementById("reset-score");
const buttons = [rockBtn, paperBtn, scissorsBtn];

let humanScore = 0;
let computerScore = 0;
let streak = 0;

function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3) + 1);

    if (randomNum === 1) {
        return "Scissors";
    }
    else if (randomNum === 2) {
        return "Rock";
    }
    else {
        return "Paper";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return "win";
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return "win";
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        return "win";
    }
    else if (humanChoice === computerChoice) {
        return "tie";
    }
    else {
        return "loss";
    }
}

function getHumanChoice(btn) {
    if (btn === rockBtn) {
        return "Rock";
    } else if (btn === paperBtn) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playGame(humanChoice) {
    const choice = getHumanChoice(humanChoice);
    const computerChoice = getComputerChoice();
    const results = playRound(choice, computerChoice);

    if (results === "win") {
        humanScore++;
        streak++;
        computerChoiceText.textContent = `You Picked: ${choice} - Computer Picked: ${computerChoice} - You Win!`;
    }
    else if (results === "loss") {
        computerScore++;
        streak = 0;
        computerChoiceText.textContent = `You Picked: ${choice} - Computer Picked: ${computerChoice} - You Lose!`;
    }
    else {
        computerChoiceText.textContent = `You Picked: ${choice} - Computer Picked: ${computerChoice} - Thus Tie!`;
    }
    updateText();
    return;
}

function updateText() {
    gameScoreText.textContent = `Computer: ${computerScore} | Player: ${humanScore}`;
    streakText.textContent = `Winning Streak 🔥: ${streak}`;
}

function resetScore() {
    computerScore = 0;
    humanScore = 0;
    streak = 0;
    computerChoiceText.textContent = "";

    updateText();
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => playGame(btn));
});

resetBtn.addEventListener("click", resetScore);

updateText();


