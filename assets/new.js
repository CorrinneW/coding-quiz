//targets corresponding HTML sections
const highScores = document.querySelector("#highScores");

const timer = document.querySelector("#timer");

const welcomeScreen = document.querySelector("#welcome");

const questionScreen = document.querySelector("#questions");

const enterHighScore = document.querySelector("#hsEntry");

const scoreList = document.querySelector("#scoreList");

const questionText = document.querySelector("#questionText");

const answersList = document.querySelector("#answerList");

const asnwerStatus = document.querySelector("#answerStatus")

//targets HTML buttons. Buttons use clickEvent to display desired section and hide others.
const btnStartQuiz = document.querySelector("#startQuiz");

const btnLogScore = document.querySelector("#logScore");

const btnGoBack = document.querySelector("#goBack");

const btnClearScore = document.querySelector("#clearScore"); //use .pop to remove last entry from array

//targets recordedScore and recordName text area

const recordedScore = document.querySelector("#recordedScore"); //displays user score

const getName = document.querySelector("#getName"); //lets user input initials


//start quiz button
btnStartQuiz.addEventListener("click", function () {
    welcomeScreen.style.display = "none";
    questionScreen.style.display = "flex";
    startQuiz();
  });
  
  //quiz questions and answers
  let questionsArray = [
    {
      question: "Which of these is NOT a JavaScript data type?",
      answerChoices: ["Number", "String", "Booyah", "Object"],
      correctAnswer: "Booyah"
    },
    {
      question: "What does a for loop do?",
      answerChoices: ["Repeats a block of code a specified number of times", "Repeats a block of code while a condition is true", "Loops through the properties of an object", "Specifies many alternative blocks of code to be executed."],
      correctAnswer: "Repeats a block of code a specified number of times"
    },
    {
      question: "What is a block of code designed to perform a particular task called?",
      answerChoices: ["Object", "Function", "Event", "Array"],
      correctAnswer: "Function"
    },
    {
      question: "What does Math.floor do?",
      answerChoices: ["Rounds up to the nearest integer.", "Returns the lowest value in a list of arguments.", "Returns a random number.", "Rounds down to the nearest integer."],
      correctAnswer: "Rounds down to the nearest integer."
    },
    {
      question: "How is an ID represented in JavaScript?",
      answerChoices: [".myItem", "#myItem", "@myItem", "$myItem"],
      correctAnswer: "#myItem"
    },
    {
      question: "How is a single-line comment denoted in Javascript?",
      answerChoices: ["<!--comment-->", "/*comment*/", "{comment}", "//comment"],
      correctAnswer: "//comment"
    },
    {
      question: "Which keyword is used for variables that cannot be reassigned?",
      answerChoices: ["var", "const", "let", "function"],
      correctAnswer: "const"
    },
    {
      question: "How is an Object Property denoted?",
      answerChoices: ["name:value", "name(value)", "name.value", "nameValue"],
      correctAnswer: "name:value"
    },
    {
      question: "What is it called when you write code without the use of third party APIs?",
      answerChoices: ["Plain Javascript", "Bland Javascript", "Tasty Javascript", "Vanilla Javascript"],
      correctAnswer: "Vanilla Javascript"
    },
    {
      question: "Which keyword removes the last item of an array?",
      answerChoices: ["myArray.push()", "myArray.pop()", "myArray.slice()", "myArray.shift()"],
      correctAnswer: "myArray.pop()"
    }
  ]

//function to start timer and pull first question
btnStartQuiz.addEventListener("click", function () {
    
})

//timer counts down while questions play. when time runs out, quiz ends.
let timeInterval;

function countdown() {
  timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timer.textContent = "Time Left: " + timeLeft;
      timeLeft--;
    } else if (timeLeft === 0) {
      endQuiz();
    }
  }, 1000);
}

//build question from oject in questionsArray


//determine correct/incorrect question

//cycle to next question

//when questions or time runs out end quiz and load hsEntry

//hsEntry displays user score and requests user's initials

//submit button stores final score and user initials to local storage.
//once done, loads ScoreList

//scoreList shows user the list of high scores and allows them to clear
//their last score or return to the welcome screen where they can play again