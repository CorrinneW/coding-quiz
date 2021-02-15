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

//view high scores <-- come back when high scores screen is done and use clickEvent to pull up screen
// function viewHighScores() {}

//countdown: timer counts down from 90 seconds during entire game. When complete, displays enterHighScore
function countdown() {
    let timeLeft = 90;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    const timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timer` to show the remaining seconds
        timer.textContent = "Time Left: " + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timer` to an empty string
        timer.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        //ClickEvent to return to welcomeScreen
      }
    }, 1000);
  }

countdown();