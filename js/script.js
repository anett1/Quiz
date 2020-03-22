import dataQuiz from "./dataQuiz.js";
import loadOriginalData from "./loadOriginalData.js";
import checkAnswer from "./checkAnswer.js";
import updateStatusAnswers from "./updateStatusAnswers.js";
import loadNextOfData from "./loadNextOfData.js";
import showQuestionNumber from "./showQuestionNumber.js";
import makeObjectStatement from "./makeObjectStatement.js";
import makeArrayStatement from "./makeArrayStatement.js";
import showAnswerStatement from "./showAnswerStatement.js";

import {
  answersCheck,
  btnNext,
  infoAlert,
  quizWrapp
} from "./getElementsDOM.js";

let indexDataQuiz = 0;

document.addEventListener("DOMContentLoaded", loadOriginalData(indexDataQuiz));

answersCheck.forEach((item, index) =>
  item.addEventListener("click", () => {
    checkAnswer(item, indexDataQuiz, index);
    updateStatusAnswers(item);
    makeObjectStatement(item, indexDataQuiz, index);

    if (indexDataQuiz + 1 === dataQuiz.length) {
      btnNext.innerHTML = `see your answers &gt;&gt;`;
    }
  })
);

btnNext.addEventListener("click", () => {
  if (indexDataQuiz + 1 === dataQuiz.length) {
    btnNext.style.display = "none";
    quizWrapp.style.display = "none";
    makeArrayStatement();
    showAnswerStatement();
  } else {
    if (
      !answersCheck.every(item => item.hasAttribute("data-checked", "checked"))
    ) {
      infoAlert.textContent = "Choose one of three answers";
      infoAlert.style.padding = " 5px 10px";
    } else {
      indexDataQuiz++;
      loadNextOfData(indexDataQuiz);
      showQuestionNumber(indexDataQuiz);
      makeArrayStatement();
    }
  }
});
