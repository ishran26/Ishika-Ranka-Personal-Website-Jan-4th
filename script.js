// Define the questions and answers
const quizData = [
	{
	question: "What is your favorite color?",
	answers: [
	{ house: "Gryffindor", text: "Red" },
	{ house: "Hufflepuff", text: "Yellow" },
	{ house: "Ravenclaw", text: "Blue" },
	{ house: "Slytherin", text: "Green" }
	]
	},
	{
	question: "What is your favorite animal?",
	answers: [
	{ house: "Gryffindor", text: "Lion" },
	{ house: "Hufflepuff", text: "Badger" },
	{ house: "Ravenclaw", text: "Eagle" },
	{ house: "Slytherin", text: "Snake" }
	]
	},
	{
	question: "Which quality do you value most?",
	answers: [
	{ house: "Gryffindor", text: "Bravery" },
	{ house: "Hufflepuff", text: "Loyalty" },
	{ house: "Ravenclaw", text: "Intelligence" },
	{ house: "Slytherin", text: "Ambition" }
	]
	},
	{
	question: "What is your favorite subject?",
	answers: [
	{ house: "Gryffindor", text: "Defense Against the Dark Arts" },
	{ house: "Hufflepuff", text: "Herbology" },
	{ house: "Ravenclaw", text: "Charms" },
	{ house: "Slytherin", text: "Potions" }
	]
	},
	{
	question: "Which Hogwarts House do you want to be in?",
	answers: [
	{ house: "Gryffindor", text: "Gryffindor" },
	{ house: "Hufflepuff", text: "Hufflepuff" },
	{ house: "Ravenclaw", text: "Ravenclaw" },
	{ house: "Slytherin", text: "Slytherin" }
	]
	}
	];
	
	// Initialize variables
	let currentQuestion = 0;
	let selectedAnswers = [];
	
	// Get the HTML elements
	const questionElement = document.getElementById("question");
	const answerButtonElements = document.getElementsByClassName("answer-button");
	const submitButtonElement = document.getElementById("submit-button");
	const resultElement = document.getElementById("result");
	const restartButtonElement = document.getElementById("restart-button");
	const resultContainerElement = document.getElementById("result-container");
	
	// Show the current question
	function showQuestion() {
	questionElement.innerText = quizData[currentQuestion].question;
	for (let i = 0; i < answerButtonElements.length; i++) {
	answerButtonElements[i].innerText = quizData[currentQuestion].answers[i].text;
	}
	}
	
	// Add an answer to the selectedAnswers array
	function answerButtonClicked(house) {
	selectedAnswers[currentQuestion] = house;
	for (let i = 0; i < answerButtonElements.length; i++) {
	answerButtonElements[i].classList.remove("selected");
	}
	event.target.classList.add("selected");
	}
	
	// Show the next question or the result
	function submitButtonClicked() {
	if (currentQuestion < quizData.length - 1) {
	currentQuestion++;
	showQuestion();
	} else {
	showResult();
	}
	}
	
	// Show