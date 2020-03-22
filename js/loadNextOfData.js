import dataQuiz from "./dataQuiz.js";
import {
  boxQuestion,
  answersString,
  answersCheck,
  quizWrapp
} from "./getElementsDOM.js";

const loadNextOfData = indexDataQuiz => {
  answersCheck.forEach(item => {
    item.classList.remove(true, false);
    item.innerHTML = "";
    item.parentNode.style.backgroundColor = "";
    item.nextElementSibling.style.fontWeight = "";
    item.removeAttribute("data-checked");
  });

  document.body.style.backgroundImage = dataQuiz[indexDataQuiz].image;
  boxQuestion.textContent = dataQuiz[indexDataQuiz].question;
  answersString.forEach((item, index) => {
    item.textContent = `${dataQuiz[indexDataQuiz].answers[index][0]}`;
  });
};

export default loadNextOfData;
