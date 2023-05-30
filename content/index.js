import {
  renderStartPage,
  renderEasyPage,
  renderAveragePage,
  renderHardPage,
} from "./render.js";

let contentElement = document.querySelector(".content");

renderStartPage({ contentElement });

let startMainButton = document.querySelector(".button__start");

startMainButton.addEventListener("click", () => {
  let buttonRadioOne = document.getElementById("radio1");
  let buttonRadioTwo = document.getElementById("radio2");
  let buttonRadioThree = document.getElementById("radio3");

  if (buttonRadioOne.checked) {
    renderEasyPage({ contentElement });
  }

  if (buttonRadioTwo.checked) {
    renderAveragePage({ contentElement });
  }

  if (buttonRadioThree.checked) {
    renderHardPage({ contentElement });
  }
});
