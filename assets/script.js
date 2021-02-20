//targets corresponding HTML sections
const viewHighScores = document.querySelector("#viewHighScores");

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
const nameEntry = document.querySelector("#nameEntry");

let questionsCount = 0;
let userScore = 0;

//view high scores
viewHighScores.addEventListener("click", function() {
  welcomeScreen.style.display = "none";
  scoreList.style.display = "flex";
})

//start quiz button hides welcomeScreen and loads questionScreen. If replaying, start quiz button resets game.
btnStartQuiz.addEventListener("click", function () {
  welcomeScreen.style.display = "none";
  questionScreen.style.display = "flex";
  questionText.textContent = '';
  answersList.textContent = '';
  answerStatus.textContent = '';
  timeLeft = 60;
  questionsCount = 0;
  userScore = 0;
  countdown();
  setQuestion();
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



//quiz timer decrements 1/sec during game. Incorrect answers cause a 10 second decrement.
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



//builds question using contents of array 
function setQuestion() {
  //resets answersList to be re-populated with the next object's answerChoices
  answersList.textContent=''
  
  console.log(questionsArray[questionsCount]);
  //pulls question text from the current object in questionsArray
  questionText.textContent = questionsArray[questionsCount].question;
  
  // for loop creates list items with answer choices that propagate to answersList
  for (var i = 0; i < questionsArray[questionsCount].answerChoices.length; i++) {
    var li = document.createElement("li");
    //pulls each answer choice from the current object in questionsArray and sets it to a list item
    li.textContent = questionsArray[questionsCount].answerChoices[i];
    li.setAttribute("style", `color:white; background: var(--darkShade); margin-top: 15px; padding: 15px;`);
    answersList.appendChild(li);

    //controls what happens when a user clicks a right or wrong answer.
    li.addEventListener('click', function () {
      if (this.textContent === questionsArray[questionsCount].correctAnswer) {
        answerStatus.textContent = 'Correct!';
        userScore = userScore + 10;
        } else {
        answerStatus.textContent = 'Incorrect';
        timeLeft = timeLeft - 10;
      }
      nextQuestion();              
    })       
  }  
}

//moves to the next object in questionsArray until the end is reached.
function nextQuestion() {
  console.log(questionsCount);
  console.log(questionsArray.length);
  //questionsCount starts at 0 and increments by 1 until questionsCount = index 8 (this is question 9 in questionsArray).
  //the last increment and callback are allowed to run, but it is not allowed to run again at index 9 (question 10)
  //this prevents the index from running out of questions and returning 'undefined', which stops endQuiz from running.
  if (questionsCount <= (questionsArray.length - 2)) {
  questionsCount++;
  setQuestion();
} else {
    endQuiz();
  }
}

function endQuiz() {
  console.log(userScore);
  recordedScore.textContent = "Your Score Is: " + userScore;
  //resets timer
  timer.textContent = '';
  clearInterval(timeInterval); 
  questionScreen.style.display = "none";
  enterHighScore.style.display = "flex";
}



//High Score Entry allows user to view their final score and add initials
//saves score and initials for scoreList.


// Set up an array for highScores, which is going to be the item stored in localstorage or an empty array if it is the first time you play
// Parse the string highScores to an array
const highScoresArray = JSON.parse(localStorage.getItem('scoreObject')) || [];

btnLogScore.addEventListener("click", function() {
  if (nameEntry === '') {
    alert("Name can not be blank!")
  } else {
    let scoreObject = {
      userName:nameEntry.value,
      score:userScore
    }
    //push scoreObject to highScoresArray
    highScoresArray.push(scoreObject);
    // Set scoreObject to localstorage
    localStorage.setItem('scoreObject', JSON.stringify(highScoresArray));

    enterHighScore.style.display = "none";
    scoreList.style.display = "flex";
  }
});

// Stringify the highScores


//scoreList displays high scores and allows last entry to be cleared
//need to store past scores in local storage and recall them to scoreList
//need to add currentRecord to scoreList
// let currentRecord;


//formats name and score and adds it to highScoresArray
// function renderScores() {
//   highScores.innerHTML = "";
//   currentRecord = JSON.parse(localStorage.getItem("userEntry.name"));
//   console.log(currentRecord.name, currentRecord);
//   highScoresArray.push(currentRecord);
// }
// renderScores();
// console.log(highScoresArray);

//returns user to welcome screen
btnGoBack.addEventListener("click", function () {
  scoreList.style.display = "none";
  welcomeScreen.style.display = "flex";
})

//clears last scoreObject
btnClearScore.addEventListener("click", function () {
  JSON.parse(localStorage.)
  highScoresArray.pop;
})

//function to add initials and score to an array



// var initials = getName.value.trim();

// //log high score button
// btnLogScore.addEventListener("click", function (event) {
//   event.preventDefault();
//   //saves initials to local storage

//   //changes to high Scores page
//   enterHighScore.style.display = "none";
//   scoreList.style.display = "flex";
// })

// //stores last entered score in an object
// var lastScore = {
//   initials: JSON.parse(localStorage.getItem("initials")),
//   score: JSON.parse(localStorage.getItem("userScore"))
// };

// //brings lastScore object into an array containing all stored scores.
// var allScores = [];

// allScores.push(lastScore);
// localStorage.setItem("allScores", JSON.stringify("allScores"));
// console.log(allScores);

// //TODO: Score List
// highScores.textContent = JSON.parse(localStorage.getItem("allScores"));

// btnGoBack.addEventListener("click", function () {
//   scoreList.style.display = "none";
//   welcomeScreen.style.display = "flex";
// })

// btnClearScore.addEventListener("click", function () {
//   lastScore.pop();
// })