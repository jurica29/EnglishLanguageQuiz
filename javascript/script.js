//DISCLAIMER: Quiz outline was inspired by tutorials stated in readme.md, however the code from tutorials was not used in this quiz
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

//Variables for timer
let timeLeft = 2; //timer is set to 2 minutes but it can be easily adapted if the quiz is expanded in the future
let quizTimeInMinutes = timeLeft * 60 * 60;
let quizTime = quizTimeInMinutes / 60; //used for displaying time in mins

//FUNCTIONS
// Move from one page to another according to user input
function switchDiv(curr, next) {
	document.getElementById(curr).classList.add('hide');
	document.getElementById(next).removeAttribute('class');
}

//Display exit button when user starts the game and moves to questions and answers
function changeDiv(div1) {
	document.getElementById(div1).classList.add('bottomquit');
}

//Removing exit button when user reaches the end
function removeQuit() {
	document.getElementById("bottomquit").classList.remove("bottomquit");
}

//This functions is responsible for the start game button on the opening page
function beginGame() {
	switchDiv('start-page', 'question-container'); //calling function for switching pages
	changeDiv('bottomquit'); //calling function for displaying quit button
	shuffle(questions); //shuffle option for questions
	questions.forEach(q => shuffle(q.answersArray)); //shuffle for answers
	displayQuestions(); //calling the function for questions display upon entering the next page 
	startTimer(); //calling the function for starting the timer
}

//This function provides shuffling option that is used for both questions and answers and called at the beginning
function shuffle(a) {
	for (let i = 0; i < a.length; i++) {
		let secondQ = Math.floor(a.length * Math.random());
		let temp = a[i];
		a[i] = a[secondQ];
		a[secondQ] = temp;
	}
}

//This function is responsible for displaying questions
function displayQuestions() {
	currentQ++; //incrementing the value of the previously stated variable by postfix increment, which then results in 0 (1st question displayed)
	// Finish the game if there are no more questions
	if (currentQ === questions.length) { //if the current question number is strictly not equal to number of questions (10) 
		endGame(); //end the game
	} else {
		// if not, then get questions from the array
		questionEl.textContent = questions[currentQ].question;
		// and get answers from the array
		let qarray = [optionOne, optionTwo, optionThree, optionFour]; //creating variable "qarray" with array of questions
		let i = 0; //setting variable i for the callback function
		qarray.forEach(element => {
			//left side is input of a function, right side is the output of that function, used for displaying answers from array
			element.innerText = questions[currentQ].answersArray[i].answer;
			i++;
		}, i);
	}
}

//This main function is starting and controlling the timer as the quiz goes on.
function startTimer() {
	let timer = setInterval(function() {
		if (currentQ === questions.length) { //if the user finishes the last question
			clearInterval(timer); //stopping the timer
			endGame(); //calling the "end game" function
		} else if (quizTime <= 0) { //if the time hits 0 then timer stops and "end game" function is called
			clearInterval(timer); //stopping the timer
			endGame(); //calling end game function
		} else { //else display the time in form of minutes and seconds in the timer area via .innerHTML (Math.floor used for displaying of integers)
			quizTime--; //countdown (decrementing the amount of time by 1)
			let sec = Math.floor(quizTime % 60); //converting time
			let min = Math.floor(quizTime / 60) % 10;
			timerElement.innerHTML = `${min} : ${sec}`; //displays time via inner.HTML in minutes and seconds
		}
	}, 1200);
}


//Function for incrementing score by 1 when the answer is correct
function scoreIncrease() {
	document.getElementById("sCount").innerText = ` ${currentScore}`;
}

let correctAnswers = []; //empty array that needs to be used for storing incorrect answers sent from below function

// When user clicks an answer button
function handleClick(event) {
	// Get the correct answer string
	let correctAnswer = getCorrectAnswer(currentQ);
	// Compare to user click
	if (event.target.textContent === correctAnswer) {
		currentScore += 1;
		scoreIncrease(); //increasing score in the counter area of upper left corner
		event.target.classList.add('correct'); // color indicates correct choice
	} else {
		alert(`Correct answer is: "${correctAnswer}"`); //alert message displayed when incorrect answer is chosen and it displays the correct one to the user.
		event.target.classList.add('wrong'); // add color to indicate incorrect choice   
		//this condition is set for sending the text of answers that user didn't answer correctly into the empty array correctAnswers (NEW)
		if (event.target.textContent !== correctAnswer) { //if the click is not correct answer
			var element = correctAnswer; //get correct answer
			correctAnswers.push(element); //push the correct answer into the previously stated array
		}
	}
	// Wait 0.200 sec, reset button color, go to next question (preventing issues with score incrementing by the use of this small time frame)
	setTimeout(
		() => {
			event.target.className = 'btn';
			displayQuestions();
		}, 200);
}

//Function to get the correct answer from the array
function getCorrectAnswer(currentQ) {
	//setting the variable "arr" for the loop
	let arr = questions[currentQ].answersArray;
	// Going through answersArray, identifying correct answer
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].correct) {
			// grabbing correct answer.
			return arr[i].answer;
		}
	}
}


//When user clicks the quit button at the bottom of the page will display message giving options to leave or stay
function handleQuit() {
	if (confirm("Press 'OK' to leave English Language Quiz, or 'Cancel' if you want to stay: ")) {
		window.location = "https://jurica29.github.io/EnglishLanguageQuiz/";
	}
}

//This function is a multipurpose function for the last page of the quiz
function displayA() {
	let cAnswers = ""; //string used for storing the missed answers
	if (currentScore < 10) {
		for (let i = 0; i < correctAnswers.length; i++) { //this condition is set to loop through an array of correct answers that user did not answer correctly
			cAnswers += correctAnswers[i] + "<br><br>";
			//the options below enable display of 3 different messages for 3 different outcomes
		}
		//if user has tried and didn't answer something correctly or if user didn't have any incorrect answers and still not being 100% correct
		finalDisplay.innerHTML = `IF YOU HAVE UNSUCCESSFULLY ATTEMPTED ANSWERING SOME QUESTIONS, CORRECT OPTIONS WILL BE DISPLAYED HERE.<br><br>${cAnswers}`;
	} else {
		//if user has 100% score
		finalDisplay.innerHTML = `WELL DONE!<br><br>YOU ANSWERED ALL QUESTIONS CORRECTLY!`;
	}
	//if the time is up and user has score equal to 0
	if (currentScore == 0 && quizTime == 0) {
		finalDisplay.innerHTML = `:( SORRY, TIME IS UP!<br><br> IF YOU HAVE UNSUCCESSFULLY ATTEMPTED ANSWERING SOME QUESTIONS, CORRECT OPTIONS WILL BE DISPLAYED HERE.<br><br>${cAnswers}`;
	}
}




//Function for the end of the quiz
function endGame() {
	displayA(); //calling function stated above
	removeQuit(); //removing exit button
	switchDiv('question-container', 'results'); //switching between two divs
	// Show current score on results page
	finalScore = currentScore;
	finalScoreElement.textContent = finalScore; //enabling display of the score
}