//targets corresponding HTML sections
const highScore = document.querySelector("#highScore");

const timer = document.querySelector("#timer");

const welcomeScreen = document.querySelector("#welcome");

const questionScreen = document.querySelector("question");

const enterHighScore = document.querySelector("#hsEntry");

const scoreList = document.querySelector("#scoreList");

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
      } 
      //TODO: add statement that stops timer if all questions were answered before time runs out. send user to enterHighScore
      else {
        timer.textContent = '';
        clearInterval(timeInterval);
        //TODO: send user to enterHighScore
      }
    }, 1000);
  }

countdown();

//TODO: button clickEvents
btnStartQuiz.addEventListener("click", function() {
    welcomeScreen.style.display = "none";
    questionScreen.style.display = "flex";
});
