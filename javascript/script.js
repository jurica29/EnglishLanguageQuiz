//VARIABLES
let questionEl = document.getElementById('question');
let optionOne = document.getElementById('answer-1');
let optionTwo = document.getElementById('answer-2');
let optionThree = document.getElementById('answer-3');
let optionFour = document.getElementById('answer-4');
let finalScoreElement = document.getElementById('final-score');
let finalDisplay = document.getElementById('display');

//Variables necessary for score and question counts
let currentScore = 0; //variable for score starting at 0
let currentQ = -1; //variable for current question with number as the value 
let finalScore; //variable used for the last function to display score

//Getting the timer element from the html
let timerElement = document.getElementById("timer");

//Variables 
let timeLeft = 2; //timer is set to 5 minutes
let quizTimeInMinutes = timeLeft * 60 * 60;
let quizTime = quizTimeInMinutes / 60; //used for displaying time in mins