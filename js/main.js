const dataQuiz = [
  {
    image: "url(img/1.jpg)",
    question:
      "What is the name of the street in the Old Town of Krakow, shown in the photo, which runs from the northeast corner of the Main Square to the Florian s Gate?",
    answers: [
      ["Filipa", false],
      ["Szewska", false],
      ["Floriańska", true]
    ]
  },
  {
    image: "url(img/2.jpg)",
    question:
      "What is the name of a part of Krakow, located in the place of the former Jewish quarter, where galleries, shops and bars are now located?",
    answers: [
      ["Kazimierz", true],
      ["Nowa Huta", false],
      ["Salwator", false]
    ]
  },
  {
    image: "url(img/3.jpg)",
    question:
      "Bearded rider in a pseudo-organistic costume moving on an artificial horse attached to the belt, which you can meet on the Krakow market, that is:",
    answers: [
      ["Lajkonik", true],
      ["Krakowiak", false],
      ["Rotmistrz", false]
    ]
  },
  {
    image: "url(img/4.jpg)",
    question:
      "The Wieliczka mine near Krakow is one of the biggest tourist attractions in Poland, it was a place of extraction:",
    answers: [
      ["sand", false],
      ["carbon", false],
      ["salt", true]
    ]
  },
  {
    image: "url(img/5.jpg)",
    question: "The place shown in the picture is:",
    answers: [
      ["Tatrzański Park Narodowy", false],
      ["Kopiec Kościuszki", false],
      ["Ojcowski Park Narodowy", true]
    ]
  },
  {
    image: "url(img/6.jpg)",
    question:
      "Hard, smoked cheese, made from sheep's milk, characteristic of Polish mountains, is called:",
    answers: [
      ["Bryndza", false],
      ["Oscypek", true],
      ["Polanka", false]
    ]
  },
  {
    image: "url(img/7.jpg)",
    question:
      "Polish fast food Zapiekanka, created in the 70s, was originally served in the form of:",
    answers: [
      ["oblong roll with onion and mushroom stuffing and cheese", true],
      ["oblong roll with sausage and ketchup", false],
      ["oblong roll with with ham and stuffing and cheese", false]
    ]
  },
  {
    image: "url(img/8.jpg)",
    question: "The name of the Polish Żywiec beer comes from:",
    answers: [
      ["from the name of the founder of the brewery", false],
      ["names of good quality used by locals", false],
      ["the name of the city where the brewery is located", true]
    ]
  },
  {
    image: "url(img/9.jpg)",
    question:
      "The longest Polish river, flowing into the Baltic Sea, flowing through Krakow, is:",
    answers: [
      ["Wełtawa", false],
      ["Wisła", true],
      ["Tybr", false]
    ]
  },
  {
    image: "url(img/10.jpg)",
    question:
      "What is the name of the castle in Krakow, where the graves of Polish saints, rulers, the greatest leaders and poets are located:",
    answers: [
      ["Wawel", true],
      ["Wistula", false],
      ["Jubilat", false]
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const boxQuestion = document.querySelector(
    ".set-box__question-box .questionString p"
  );
  const boxQuestionCounter = document.querySelector(
    ".set-box__question-box .canter h3"
  );
  const answersString = [
    ...document.querySelectorAll('[data="answerString"] p')
  ];
  const answersCheck = [...document.querySelectorAll('[data="answerCheck"]')];
  const btnNext = document.querySelector(".set-box__btn-box__btn");

  const infoAlert = document.querySelector(".infoAlert h3");
  const correctAnswer = document.querySelector(".correct");
  const incorrectAnswer = document.querySelector(".incorrect");

  let indexDataQuiz = 0;
  let CanterCorrectAnswer = 0;
  let CanterInorrectAnswer = 0;
  let answerClicked;
  let answerselected;
  let question;
  let answerCorrect;
  const dataQuizLenght = dataQuiz.length;

  document.body.style.backgroundImage = dataQuiz[indexDataQuiz].image;
  boxQuestionCounter.textContent = `${indexDataQuiz + 1}|${dataQuizLenght} `;
  boxQuestion.textContent = dataQuiz[indexDataQuiz].question;

  answersString.forEach((answerString, index) => {
    answerString.textContent = dataQuiz[indexDataQuiz].answers[index][0];
  });

  answersCheck.forEach((answerCheck, index) => {
    answerCheck.addEventListener("click", function() {
      answerselected = this.parentNode.querySelector("p").textContent;
      question = boxQuestion.textContent;
      if (indexDataQuiz + 1 == dataQuizLenght) {
        btnNext.style.display = "none";
        presentationOfResults(statementAnswers);
      }
      if (dataQuiz[indexDataQuiz].answers[index][1] == true) {
        this.parentNode.style.backgroundColor = "rgba(150, 190, 230, 0.8)";
      } else {
        this.parentNode.style.backgroundColor = "rgba(220, 125, 125, 0.8)";
      }

      answersCheck.forEach((answerCheck, index) => {
        infoAlert.textContent = "";
        infoAlert.style.padding = "0 0";
        answerCheck.setAttribute("data-checked", "checked");
        if (dataQuiz[indexDataQuiz].answers[index][1] == true) {
          answerCheck.classList.add(true);
          answerCheck.innerHTML = "&#10004";
          answerCheck.nextElementSibling.style.fontWeight = "700";
          answerCorrect = dataQuiz[indexDataQuiz].answers[index][0];
        } else {
          answerCheck.classList.add(false);
          answerCheck.innerHTML = "&#10006;";
        }
      });
      if (this.classList.contains(true)) {
        CanterCorrectAnswer++;
        correctAnswer.textContent = `${CanterCorrectAnswer} correct,`;
        answerClicked = "correct answer";
      } else if (this.classList.contains(false)) {
        CanterInorrectAnswer++;
        incorrectAnswer.textContent = `  ${CanterInorrectAnswer} incorrect`;
        answerClicked = "incorrect answer";
      }

      quizResult(
        indexDataQuiz,
        question,
        answerselected,
        answerClicked,
        answerCorrect
      );
    });
  });
  btnNext.addEventListener("click", () => {
    let firstCheck = document.querySelector(".firstCheck");

    if (!firstCheck.hasAttribute("data-checked")) {
      infoAlert.textContent = "Choose one of three answers";
      infoAlert.style.padding = " 5px 10px";
    } else {
      indexDataQuiz++;
      answersCheck.forEach(answerCheck => {
        answerCheck.classList.remove(true, false);
        answerCheck.innerHTML = "";
        answerCheck.parentNode.style.backgroundColor = "";
        answerCheck.nextElementSibling.style.fontWeight = "";
        answerCheck.removeAttribute("data-checked");
      });

      boxQuestionCounter.textContent = `${indexDataQuiz +
        1}|${dataQuizLenght} `;
      document.body.style.backgroundImage = dataQuiz[indexDataQuiz].image;
      boxQuestion.textContent = dataQuiz[indexDataQuiz].question;

      answersString.forEach((answerString, index) => {
        answerString.textContent = dataQuiz[indexDataQuiz].answers[index][0];
      });
    }
  });
});

let statementAnswers = [];

function quizResult(
  indexDataQuiz,
  question,
  answerselected,
  answerClicked,
  answerCorrect
) {
  let resultDate = {
    numberSet: indexDataQuiz + 1,
    selectedAnswer: answerselected,
    question: question,
    worthAnswer: answerClicked,
    answerCorrect: answerCorrect
  };
  statementAnswers.push(resultDate);
}

function presentationOfResults(statementAnswers) {
  let btnpresentationOfResults = document.createElement("div");
  btnpresentationOfResults.setAttribute("class", "btnResult");
  btnpresentationOfResults.innerHTML = `see your answers &gt;&gt;`;

  document
    .querySelector(".set-box__btn-box")
    .appendChild(btnpresentationOfResults);

  document.querySelector(".btnResult").addEventListener("click", () => {
    const DivQuizWrapp = document.querySelector(".quiz-wrapp");
    DivQuizWrapp.style.display = "none";

    const resultBWrapp = document.createElement("div");
    resultBWrapp.setAttribute("class", "resultBWrapp");
    document.body.appendChild(resultBWrapp);

    statementAnswers.forEach(statementAnswersElement => {
      const resultDiv = document.createElement("div");
      resultDiv.setAttribute("class", "resultDiv");
      if (
        statementAnswersElement.selectedAnswer ===
        statementAnswersElement.answerCorrect
      ) {
        resultDiv.innerHTML = `
      <div class="resultDivElement">${statementAnswersElement.numberSet}. ${statementAnswersElement.question}</div>
      <div class="resultDivElement"> Your answer: <span class="selectedAnswer correctAnswer">${statementAnswersElement.selectedAnswer}</span><span class="worthAnswer"> - ${statementAnswersElement.worthAnswer}</span></div>
      `;
      } else {
        resultDiv.innerHTML = `
        <div class="resultDivElement">${statementAnswersElement.numberSet}. ${statementAnswersElement.question}</div>
        <div class="resultDivElement"> Your answer: <span class="selectedAnswer incorrectAnswer">${statementAnswersElement.selectedAnswer}</span><span class="worthAnswer"> - ${statementAnswersElement.worthAnswer}</span></div>
        <div class="resultDivElement"> Correct answer: ${statementAnswersElement.answerCorrect}</div>
        `;
      }
      document.querySelector(".resultBWrapp").appendChild(resultDiv);
    });
  });
}
