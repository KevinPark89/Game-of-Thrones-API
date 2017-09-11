(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
	{
		question: "Which famous house is known for having a black stag as their sigil?",
		answers: {
			a: "Stark",
			b: "Martell",
			c: "Baratheon",
			d: "Tyrell"
		},
		correctAnswer: "c"
	},
	{
		question: "Which famous house uses the following saying, 'What is Dead May Never Die'?",
		answers: {
			a: "Targaryen",
			b: "Lannister",
			c: "Greyjoy",
			d: "Bolton"
		},
		correctAnswer: "c"
	},
	{
		question: "The Stark house refers to their bastards as 'Snow' while the _______ house refers to their bastards as 'Sand':",
		answers: {
			a: "Martell",
			b: "Tyrell",
			c: "Baratheon",
			d: "Targaryen"
		},
		correctAnswer: "a"
	},
	{
		question: "If one were to stumble upon a flayed man in Westeros, you could assume the following house is responsible:",
		answers: {
			a: "Greyjoy",
			b: "Bolton",
			c: "Lannister",
			d: "Stark"
		},
		correctAnswer: "b"
	},
	{
		question: "The famous prince Rhaegar is from what famous house?",
		answers: {
			a: "Targaryen",
			b: "Martell",
			c: "Tyrell",
			d: "Baratheon"
		},
		correctAnswer: "a"
	},
	{
		question: "Which famous house is from Casterly Rock?",
		answers: {
			a: "Stark",
			b: "Bolton",
			c: "Grejoy",
			d: "Lannister"
		},
		correctAnswer: "d"
	},
	{
		question: "When you see a sigil with a golden rose on a green field, you know it is the famous ________ house:",
		answers: {
			a: "Martell",
			b: "Targaryen",
			c: "Lannister",
			d: "Tyrell"
		},
		correctAnswer: "d"
	},
	{
		question: "This house makes sure to remind everyone that, 'Winter is coming':",
		answers: {
			a: "Bolton",
			b: "Stark",
			c: "Baratheon",
			d: "Grejoy"
		},
		correctAnswer: "b"		
	},

];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();