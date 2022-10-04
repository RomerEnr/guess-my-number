// Dom references
const displayMessage = document.querySelector(".message");
const guessButton = document.querySelector(".check");
const gameScore = document.querySelector(".score");
const againButton = document.querySelector(".again");
const inputValue = document.querySelector(".guess");
const bigNumber = document.querySelector(".number");
const rootStyles = document.documentElement.style;
// Useful values
const generateRandomValue = () => {
  return Math.floor(Math.random() * 20) + 1;
};

let randomValue = generateRandomValue();
let score = 20;
gameScore.textContent = score;

const handleGuessButton = () => {
  const boxValue = Number(document.querySelector(".guess").value);

  if ((boxValue < 0 || boxValue > 20)) {
    displayMessage.textContent = "🚫 Wrong value";
    return;
  } else if (score === 0) {
    displayMessage.textContent = "You actually lost";
    rootStyles.setProperty("--background-color", "#c22222");
  } else if (boxValue === randomValue) {
    displayMessage.textContent = "🎉 Correct value";
    rootStyles.setProperty("--background-color", "#60b347");
  } else if (boxValue > randomValue) {
    displayMessage.textContent = "Too high...";
    score--;
    gameScore.textContent = score;
    gameScore.textContent = score;
  } else if (boxValue < randomValue) {
    displayMessage.textContent = "Too low...";
    score -= 1;
    gameScore.textContent = score;
  }
  document.querySelector(".number").innerText = boxValue;
};

const handleAgainButton = () => {
  randomValue = generateRandomValue();
  score = 20;
  gameScore.textContent = score;
  inputValue.value = "";
  displayMessage.textContent = "Start guessing...";
  bigNumber.textContent = "?";
  rootStyles.setProperty("--background-color", "#222  ");
};

// Events
guessButton.addEventListener("click", handleGuessButton);
againButton.addEventListener("click", handleAgainButton);
