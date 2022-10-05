// Dom references
const dom = {
  displayMessage: document.querySelector(".message"),
  guessButton: document.querySelector(".check"),
  gameScore: document.querySelector(".score"),
  resetButton: document.querySelector(".again"),
  inputValue: document.querySelector(".guess"),
  bigNumber: document.querySelector(".number"),
  highScore: document.querySelector(".high-score"),
  rootStyles: document.documentElement.style
};

// Useful values
const generateRandomValue = () => {
  return Math.floor(Math.random() * 20) + 1;
};

let randomValue = generateRandomValue();
let score = 20;
let highScore = 0;
dom.gameScore.textContent = score;

const handleGuessButton = () => {
  const value = document.querySelector(".guess").value;
  const attemptNumber = Number(value);
  if (attemptNumber === 0) {
    return;
  };
  if ((attemptNumber < 0 || attemptNumber > 20)) {
    dom.displayMessage.textContent = "🚫 Wrong value";
    return;
  } else if (score === 0) {
    dom.displayMessage.textContent = "You actually lost";
    dom.rootStyles.setProperty("--background-color", "#c22222");
  } else if (attemptNumber === randomValue) {
    dom.displayMessage.textContent = "🎉 Correct value";
    dom.rootStyles.setProperty("--background-color", "#60b347");
    addHighScore(score);
  } else if (attemptNumber > randomValue) {
    dom.displayMessage.textContent = "Too high...";
    score--;
    dom.gameScore.textContent = score;
  } else {
    dom.displayMessage.textContent = "Too low...";
    score--;
    dom.gameScore.textContent = score;
  }
  document.querySelector(".number").innerText = attemptNumber;
};

const addHighScore = (newScore = 0) => {
  if (highScore < newScore) {
    highScore = newScore;
    dom.highScore.textContent = newScore;
  }
};

const handleResetButton = () => {
  randomValue = generateRandomValue();
  score = 20;
  dom.gameScore.textContent = score;
  dom.inputValue.value = "";
  dom.displayMessage.textContent = "Start guessing...";
  dom.bigNumber.textContent = "?";
  dom.rootStyles.setProperty("--background-color", "#222  ");
};

// Events
dom.guessButton.addEventListener("click", handleGuessButton);
dom.resetButton.addEventListener("click", handleResetButton);
