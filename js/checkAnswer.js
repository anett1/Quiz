import dataQuiz from "./dataQuiz.js";
import { answersCheck, infoAlert, quizWrapp } from "./getElementsDOM.js";

const checkAnswer = (item, indexDataQuiz, index) => {
  infoAlert.textContent = "";
  infoAlert.style.padding = "0 0";
  answersCheck.forEach(item => item.setAttribute("data-checked", "checked"));

  if (dataQuiz[indexDataQuiz].answers[index][1] === true) {
    item.parentNode.style.backgroundColor = "rgba(150, 190, 230, 0.8)";
  } else {
    item.parentNode.style.backgroundColor = "rgba(220, 125, 125, 0.8)";
  }
  answersCheck.forEach((item, index) => {
    if (dataQuiz[indexDataQuiz].answers[index][1] === true) {
      item.classList.add(true);
      item.innerHTML = "&#10004";
      item.nextElementSibling.style.fontWeight = "700";
    } else {
      item.classList.add(false);
      item.innerHTML = "&#10006;";
    }
  });
};

export default checkAnswer;
