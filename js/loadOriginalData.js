import dataQuiz from "./dataQuiz.js";
import {
  boxQuestionCounter,
  boxQuestion,
  answersString
} from "./getElementsDOM.js";

const loadOriginalData = indexDataQuiz => {
  document.body.style.backgroundImage = dataQuiz[indexDataQuiz].image;
  boxQuestionCounter.textContent = `${indexDataQuiz + 1}|${dataQuiz.length}`;
  boxQuestion.textContent = dataQuiz[indexDataQuiz].question;

  answersString.forEach((item, index) => {
    item.textContent = `${dataQuiz[indexDataQuiz].answers[index][0]}`;
  });
};

export default loadOriginalData;
