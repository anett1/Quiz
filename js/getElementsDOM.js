const quizWrapp = document.querySelector(".quiz-wrapp");
const boxQuestion = document.querySelector(
  ".set-box__question-box .questionString p"
);
const boxQuestionCounter = document.querySelector(
  ".set-box__question-box .canter h3"
);
const answersString = [...document.querySelectorAll('[data="answerString"] p')];
const answersCheck = [...document.querySelectorAll('[data="answerCheck"]')];
const btnNext = document.querySelector(".set-box__btn-box__btn");

const infoAlert = document.querySelector(".infoAlert h3");
const correctAnswer = document.querySelector(".correct");
const incorrectAnswer = document.querySelector(".incorrect");
const canterOfQuestion = document.querySelector(".canter  h3");

export {
  boxQuestion,
  boxQuestionCounter,
  answersString,
  answersCheck,
  btnNext,
  infoAlert,
  correctAnswer,
  incorrectAnswer,
  canterOfQuestion,
  quizWrapp
};
