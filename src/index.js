"use strict";

// document.querySelector(".message").innerText = "🎉 Correct number";
// document.querySelector(".number").innerText = 20;
// document.querySelector(".score").innerText = 4;
// document.querySelector(".guess").value = 23;
const guessButton = document.querySelector(".check");

const handleGuessButton = () => {
  const inputValue = document.querySelector(".guess").value;

  if ((inputValue < 0 || inputValue > 20)) {
    document.querySelector(".message").innerText = "🚫 Wrong value";
    return false;
  }
  document.querySelector(".number").innerText = inputValue;
};

guessButton.addEventListener("click", handleGuessButton);
