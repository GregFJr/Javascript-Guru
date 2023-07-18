// Get DOM elements
const quizContainer = document.getElementById("quiz-container");
const endContainer = document.getElementById("end-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("timer");
const leaderboard = document.getElementById("leader-board");
const finalScoreElement = document.getElementById("final-score");


let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeRemaining = 60; // seconds

// Quiz Questions
const quizQuestions = [
  // Question 1
  {
    question: `What is the correct syntax for a "for loop"?`,
    choices: ["for (i < 5; i++) {}", "for (i = 0; i < 5) {}", "for i = 0; i < 5; i++ {}", "for (var i = 0; i < 5; i++) {}"],
    correctAnswer: "for (var i = 0; i < 5; i++) {}"
  },
  // Question 2
  {
    question: "Which programming language is commonly used for web development?",
    choices: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript"
  },
  // Question 3
  {
    question: "Correct way to declare a variable in JS?",
    choices: ["var x = 9", "variable x = 5", "x = 5", "int x = 5"],
    correctAnswer: "var x = 9",
  },
  // Question 4
  {
    question: "Which method is used to remove the last element from an array in JS?",
    choices: ["push()", "pop()", "splice()", "shift()"],
    correctAnswer: "pop()"
  },
  // Question 5
  {
    question: `Whats the Output of this code: console.log(2 + "2")`,
    choices: ["4", `"22"`, "22", `"2 + 2"`],
    correctAnswer: `"22"`
  },
];

// Event listener for starting the quiz

restartButton.style.display = "none";

// Function to start the quiz
const startQuiz = () => {
  startButton.disabled = true;
  startTimer();
  showQuestion();
};

// Function to start the timer
const startTimer = () => {
  timer = setInterval(() => {
    timerElement.textContent = `${timeRemaining}s`;
    timeRemaining--;
    if (timeRemaining < 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
};

// Function to display a question
const showQuestion = () => {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  choicesElement.innerHTML = "";

  // Create choice elements and add event listeners
  for (const choice of currentQuestion.choices) {
    const choiceItem = document.createElement("li");
    choiceItem.textContent = choice;
    choiceItem.addEventListener("click", checkAnswer);
    choicesElement.appendChild(choiceItem);
  }
};

// Function to check the selected answer
const checkAnswer = (event) => {
  const selectedChoice = event.target;
  const selectedAnswer = selectedChoice.textContent;
  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
    resultElement.textContent = "Correct";
  } else {
    resultElement.textContent = "Wrong!";
    timeRemaining -= 10; // Subtracting 10 seconds for incorrect answer
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    clearInterval(timer);
    endQuiz();
  }
};

// Function to end the quiz
const endQuiz = () => {
  clearInterval(timer);
  quizContainer.style.display = "none";
  timerElement.textContent = "Time's up!";

  // Display final score and allow user to save initials
  const initials = prompt("Quiz completed! Enter your initials:");


  // For fun: A score board that tracks scores
  const highScore = {
    Initials: initials,
    Score: score
  };

  // Save the high score to local storage
  localStorage.setItem("HighScore", JSON.stringify(highScore));

  let leaderUl = document.createElement("ul");
  let leaderLi = document.createElement("li");
  leaderLi.textContent = `${initials}: ${score}`;
  leaderUl.appendChild(leaderLi);

  leaderboard.appendChild(leaderUl); 

  finalScoreElement.style.display = "block";
  finalScoreElement.textContent = `Initials: ${initials}  Your score: ${score}`;

  endContainer.style.display = "block";

  score < 5 ? (endContainer.textContent = "Try Again?") : (endContainer.textContent = "Great Job!");

  restartButton.style.display = "inline-block";
  startButton.style.display = "none";
};

// Function to restart the quiz
const restartQuiz = () => {
  restartButton.style.display = "none"; // Hide the restart button
  startButton.style.display = "inline-block";
  finalScoreElement.style.display = "none";
  endContainer.textContent = "";

  // Reset the quiz state
  currentQuestionIndex = 0;
  score = 0;
  timeRemaining = 60;

  quizContainer.style.display = "block";
  resultElement.textContent = "";
  timerElement.textContent = "";

  startButton.disabled = false;
  startQuiz();
};

//Event listner for starting the quiz
startButton.addEventListener("click", startQuiz);
//Event listner for restarting the quiz
restartButton.addEventListener("click", restartQuiz);