import { correctAnswer, incorrectAnswer } from "./getElementsDOM.js";

let CanterCorrectAnswer = 0;
let CanterInorrectAnswer = 0;

function updateStatusAnswers(item) {
  if (item.classList.contains(true)) {
    CanterCorrectAnswer++;
    correctAnswer.textContent = `${CanterCorrectAnswer} correct,`;
  } else if (item.classList.contains(false)) {
    CanterInorrectAnswer++;
    incorrectAnswer.textContent = ` ${CanterInorrectAnswer} incorrect`;
  }
}

export default updateStatusAnswers;
