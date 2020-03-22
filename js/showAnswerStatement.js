import { ArrayStatement } from "./makeArrayStatement.js";

const showAnswerStatement = () => {
  const resultWrapp = document.createElement("div");
  resultWrapp.setAttribute("class", "resultWrapp");
  document.body.appendChild(resultWrapp);

  ArrayStatement.forEach(statementObject => {
    const {
      numberSet,
      question,
      answerSelected,
      answerSelectedStatus,
      answerCorrect
    } = statementObject;

    const resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", "resultDiv");

    if (answerSelected === answerCorrect) {
      resultDiv.innerHTML = `
        <div class="resultDivItem">${numberSet}. ${question}</div>
        <div class="resultDivItem"> Your answer: <span class="answerSelected answerCorrect">${answerSelected}</span><span class="answerSelectedStatus"> - ${answerSelectedStatus}</span></div>
        `;
    } else {
      resultDiv.innerHTML = `
        <div class="resultDivItem">${numberSet}. ${question}</div>
        <div class="resultDivItem"> Your answer: <span class="answerSelected answerIncorrect">${answerSelected}</span><span class="answerSelectedStatus"> - ${answerSelectedStatus}</span></div>
        <div class="resultDivItem"> Correct answer: ${answerCorrect}</div>
        `;
    }
    document.querySelector(".resultWrapp").appendChild(resultDiv);
  });
};

export default showAnswerStatement;
