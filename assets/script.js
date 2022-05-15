
//generate the questions
function generatequestions() {
  var exam = [
    //Question 1
    {
      Quiz: " HTML stands for?",
      options: {
        A: "Hyperactive Text Markup Language",
        B: "Hyper Text Markup Language",
        C: "Hyper Text Machine Language",
        D: "None of the above",
      },
      correctoption: "B",
    },
    //question 2
    {
      Quiz: "Which JavaScript method is used to write into an alert box?",
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
      Quiz: "What is the extension that a Javascript document is saved?",
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
      Quiz: "Which of the following HTML tags will insert a line break?",
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
      Quiz: "Which one of the following is an ternary operator:",
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
      Quiz: "Which type of Javascript language is?_______",
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
      Quiz:
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
      Quiz: "The (function) and (var) are known as: (1 mrk)",
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
      Quiz:
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
      Quiz:
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
  const questionscontainer = document.getElementById("questions");
  const outputcontainer = document.getElementById("output");
  const submissioncontainer = document.getElementById("submission");
  function displayquestions() {
    //declaration of variable to store HTML results
    var Results = [];
    exam.forEach((currentQuestion, questionNumber) => {
          var answers;
    for (let i = 0; i < questions.length; i++) {
      const answers = questions[i];
    
      for (letter in questions[i].answers) {
        answers.push(
          '<label>'+ '<input type="radio" name="questions" ' + i + ' "value" ' + letter + '">' + letter + ':' + questions[i].answers[letter] + questions[i].answers[letter] + '</label>'
        );
      }
      //addition of the question and the answers to the exam output

      Results.push(
        '<div class="question">' + questions[i].Quiz + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
      );
    }
      //combine the results list to one 
      questionscontainer.innerHTML = Results.join('');
      
    }
  }

      //push the questions and the answers to the Results variable
      Results.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div"
      );
    }
    questionscontainer.innerHTML = Results.join("");
  }
  displayquestions();
}
