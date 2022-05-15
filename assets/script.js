//generate the questions
var theQuestions = [
  {
    question: " HTML stands for?",
    options: {
      A: "Hyperactive Text Markup Language",
      B: "Hyper Text Markup Language",
      C: "Hyper Text Machine Language",
      D: "None of the above",
    },
    correctAns: "B",
  },
  //question 2
  {
    question: "Which JavaScript method is used to write into an alert box?",
    options: {
      A: "window.alert().",
      B: "window.alertContent()",
      C: "window.alertBox()",
      D: "window.alertHTML()",
    },
    correctoption: "A",
  },
  //Question 3
  {
    question: "What is the extension that a Javascript document is saved?",
    options: {
      A: ".html",
      B: ".hml",
      C: ".js",
      D: ".css",
    },
    correctoption: "C",
  },
  //Question 4
  {
    question: "Which of the following HTML tags will insert a line break?",
    options: {
      A: "<break>",
      B: "<br>",
      C: "<hb>",
      D: "<p>",
    },
    correctoption: "B",
  },
  //Question5
  {
    question: "Which one of the following is an ternary operator:",
    options: {
      A: "?",
      B: ":",
      C: "+",
      D: "-",
    },
    correctoption: "A",
  },
  //Question6
  {
    question: "Which type of Javascript language is?_______",
    options: {
      A: "High-level",
      B: "Assembly-language",
      C: "Object-Based",
      D: "None of the above",
    },
    correctoption: "C",
  },
  //Questions7
  {
    question:
      "What symbols go around the properties for each Javascript function",
    options: {
      A: "<>",
      B: "()",
      C: "{}",
      D: "[]",
    },
    correctoption: "C",
  },
  //Questions 8
  {
    question: "The (function) and (var) are known as: (1 mrk)",
    options: {
      A: "Data Types",
      B: "Keywords",
      C: "Declaration statements",
      D: "Prototypes",
    },
    correctoption: "C",
  },
  //Question9
  {
    question:
      "Which of the following variables takes precedence over the other if the names are the same?",
    options: {
      A: "Global variable",
      B: "the local element",
      C: "None of the above",
    },
    correctoption: "B",
  },
  //Question10
  {
    question:
      "Which one of the following is the correct way for calling the JavaScript code?",
    options: {
      A: "Function/method",
      B: "Preprocessor",
      C: "RMI",
      D: "Triggering Event",
    },
    correctoption: "A",
  },
];
//DECLARATION OF THE MAIN VARIABLES
const testContainer = document.getElementById("test");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
function solution() {
  const output = [];
  theQuestions.forEach((currentQuestion, questionNumber) => {
    const options = [];
    for (letter in currentQuestion.options) {
      options.push(
        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.options[letter]}
          </label>`
      );
    }
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
        <div class="options"> ${options.join("")} </div>`
    );
  });
  testContainer.innerHTML = output.join("");
}
function Results() {
  const answerContainers = testContainer.querySelectorAll(".options");
  let correctselection = 0;
  theQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const select = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(select) || {}).value;
    if (userAnswer === currentQuestion.correctAns) {
      correctselection++;
      answerContainers[questionNumber].getElementsByClassName.colo =
        "green";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });
  resultsContainer.innerHTML = `${correctselection} out of ${theQuestions.length}`;
}
solution();
submitButton.addEventListener("click", Results);
