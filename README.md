# Javascript-Guru

This is a quiz application built with JavaScript. It presents multiple-choice questions, tracks the user's score and remaining time, and allows them to save their initials and view the leaderboard.

## Features

- Displays a series of multiple-choice questions.
- Tracks the user's score and remaining time.
- Provides immediate feedback on the correctness of each answer.
- Ends the quiz when time runs out or all questions are answered.
- Allows the user to save their initials and view the leaderboard.
- Provides an option to restart the quiz.

## Functions

- startQuiz(): Starts the quiz by disabling the start button, starting the timer, and displaying the first question.
- startTimer(): Starts the timer countdown, updating the timer element, and ending the quiz when time runs out.
- showQuestion(): Displays the current question and its answer choices.
- checkAnswer(event): Checks the selected answer, updates the score and result element accordingly, and proceeds to the next question or ends the quiz.
- endQuiz(): Ends the quiz by clearing the timer, hiding the quiz container, and displaying the user's final score and option to save initials.
- restartQuiz(): Restarts the quiz by resetting all variables and elements to their initial state.

## Usage

1. Run the application in a web browser.
2. Click the "Start" button to begin the quiz.
3. Select an answer for each question and receive immediate feedback.
4. At the end of the quiz, enter your initials and save your score.
5. View the leaderboard to see high scores.
6. Click the "Restart" button to start a new quiz.

## Screenshot

![Screenshot](./assets/img/Screenshot%202023-07-18%20at%2010.56.11%20AM.png)

## Screenshot LocalStorage
![Screenshot](./assets/img/Screenshot%202023-07-18%20at%2011.02.02%20AM.png)