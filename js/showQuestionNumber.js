import { canterOfQuestion } from "./getElementsDOM.js";
import dataQuiz from "./dataQuiz.js";

const showQuestionNumber = indexDataQuiz => {
  canterOfQuestion.textContent = `${indexDataQuiz + 1}|${dataQuiz.length} `;
};

export default showQuestionNumber;
