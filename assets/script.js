//targets corresponding HTML sections
const highScore = document.querySelector("#highScore");

const timer = document.querySelector("#timer");

const welcomeScreen = document.querySelector("#welcome");

const questionScreen = document.querySelector("#questions");

const enterHighScore = document.querySelector("#hsEntry");

const scoreList = document.querySelector("#scoreList");

const questionText = document.querySelector("#questionText");

const answersList = document.querySelector("#answerList");

//targets HTML buttons. Buttons use clickEvent to display desired section and hide others.
const btnStartQuiz = document.querySelector("#startQuiz");

const btnLogScore = document.querySelector("#logScore");

const btnGoBack = document.querySelector("#goBack");

const btnClearScore = document.querySelector("#clearScore"); //use .pop to remove last entry from array

//targets recordedScore and recordName text area

const recordedScore = document.querySelector("#recordedScore"); //displays user score

const recordName = document.querySelector("#recordName"); //lets user input initials

//TODO: view high scores <-- come back when high scores screen is done and use clickEvent to pull up screen
// function viewHighScores() {}

//countdown: timer counts down from 90 seconds during entire game. When complete, displays enterHighScore
function countdown() {
    let timeLeft = 90;
  
    const timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timer.textContent = "Time Left: " + timeLeft;
        timeLeft--;
      } else if (questionsLeft === 0) {
        timer.textContent = '';
        clearInterval(timeInterval);
        questionScreen.style.display = "none";
        enterHighScore.style.display = "flex";
      }
      else {
        timer.textContent = '';
        clearInterval(timeInterval);
        questionScreen.style.display = "none";
        enterHighScore.style.display = "flex";
      }
    }, 1000);
    }

//TODO: button clickEvents

//start quiz button
btnStartQuiz.addEventListener("click", function() {
    welcomeScreen.style.display = "none";
    questionScreen.style.display = "flex";
});
countdown();

//TODO: questions and answers
//creates content for question screen
questionText.textContent = "Question 1: Which of these is NOT a JavaScript Data type?";

let textContents = ["Number", "String", "Booyah", "Object"];
for(var i = 0; i < textContents.length; i++) {
  var li = document.createElement("li");
  li.textContent = textContents[i];
  li.setAttribute("style", `color:white; background: var(--darkShade); margin-top: 15px; padding: 15px;`);
  answersList.appendChild(li);
}

questionScreen.appendChild(questionText);
questionScreen.appendChild(answersList);

//TODO: High Score Entry

//TODO: Score List
