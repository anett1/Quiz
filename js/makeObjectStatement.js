import dataQuiz from "./dataQuiz.js";

let numberSet;
let question;
let answerSelected;
let answerSelectedStatus;
let answerCorrect;

let statementObject;

const makeObjectStatement = (item, indexDataQuiz, index) => {
  numberSet = indexDataQuiz + 1;
  question = dataQuiz[indexDataQuiz].question;
  answerSelected = dataQuiz[indexDataQuiz].answers[index][0];
  let answerCorrectIndex = dataQuiz[indexDataQuiz].answers.findIndex(
    item => item[1] === true
  );
  answerCorrect = dataQuiz[indexDataQuiz].answers[answerCorrectIndex][0];
  if (item.classList.contains(true)) {
    answerSelectedStatus = "correct answer";
  } else if (item.classList.contains(false)) {
    answerSelectedStatus = "incorrect answer";
  }

  statementObject = {
    numberSet,
    question,
    answerSelected,
    answerSelectedStatus,
    answerCorrect
  };
};

export default makeObjectStatement;
export { statementObject };
