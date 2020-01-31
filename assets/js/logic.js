// variable for questions
var questions = [

  {
    question: "1) Which built-in method removes the last element from an array and returns that element?",

    a: "last()",
    b: "get()",
    c: "pop()",
    correct: "C"
  }
  ,
  {
    question: "2) Which of the following is not a reserved word in JavaScript?",
    a: "interface",
    b: "throws",
    c: "program",
    correct: "C"
  },
  {
    question: "3) Which of the following function of Number object returns a string value version of the current number?",
    a: "toString()",
    b: "toFixed()",
    c: "toLocaleString()",
    correct: "A"
  },
  // {
  //   question: "4) Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?",
  //   a: "indexOf()",
  //   b: "join()",
  //   c: "lastIndexOf()",
  //   correct: "C"
  // },
  // {
  //   question: "5) Which of the following function of Array object removes the first element from an array and returns that element?",
  //   a: "reverse()",
  //   b: "shift()",
  //   c: "slice()",
  //   correct: "B"
  // },

  // {
  //   question: "6) How to write an IF statement for executing some code if i is NOT equal to 5?",
  //   a: "if i <> 5",
  //   b: "if i =! 5 then",
  //   c: "if (i != 5)  ",
  //   correct: "C"
  // },
  // {
  //   question: "7) What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
  //   a: "strip()",
  //   b: "trim()",
  //   c: "stripped()",
  //   correct: "B"
  // },

  // {
  //   question: "8) How to write an IF statement in JavaScript?",
  //   a: "if(i==7)",
  //   b: "if i=7",
  //   c: "if i=7 then",
  //   correct: "A"
  // },
  // {
  //   question: "9) Which event occurs when the user clicks on an HTML element?",
  //   a: "onchange",
  //   b: "onmouseclick",
  //   c: "onclick",
  //   correct: "C"
  // },
  // {
  //   question: "10) Which function of an Array object calls a function for each element in the array? ",
  //   a: "forEach()",
  //   b: "every()",
  //   c: "each()",
  //   correct: "A"
  // }
];

let highScoreArray = {
  val: 0,
  name: ""
};
let quizTakerName = "";

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let TIMER;
let score = 0;

// variables to keep track of quiz state
var time = questions.length * 5;
var currentQuestionIndex = 0;
var timerId;

//Variables to reference DOM elements

var question = document.getElementById("question");
var timerEl = document.getElementById("time");
var timeEl = document.querySelector(".timer");

var answers = document.getElementById("choices");

var questionsEl = document.getElementById('question');
var resultsContainer = document.getElementById('results');
var startBtn = document.getElementById("start");


var a = document.getElementById("A");
var b = document.getElementById("B");
var c = document.getElementById("C");
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");




document.getElementById('results').addEventListener("click", function (event) {

  event.preventDefault();

  if (event.target.tagName.toLowerCase() === 'button') {
    var userInitial = document.getElementById("name").value;
  
    //  var user = { firstName: nameInput.value.trim() };
    console.log( userInitial);
  
    localStorage.setItem("name", userInitial);
  
    // var lastUser = localStorage.getItem("user");

    }


});


//Function to start the quiz
function startQuiz() {

  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions container
  questionsEl.removeAttribute("class");
  answers.removeAttribute("class");

  // start timer
  timerId = clockTick();

  // show starting time
  timerEl.textContent = time;

  getQuestion();

}




//Function to display next question
function getQuestion() {
  var q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  a.innerHTML = q.a;
  b.innerHTML = q.b;
  c.innerHTML = q.c;
}

// checkAnwer
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    answerIsCorrect();
  } else {
    // answer is wrong
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    getQuestion();
  } else {

    // end the quiz and show the score
    quizEnd();

    // clearInterval(TIMER);  ***************************************
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion);

}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion);

  time = time - 2;

  if (time <= 0) {      
    clearInterval(timerInterval);
    time==0
//*****************************************************************************
  }
}

// score render
function scoreRender() {

  resultsContainer.style.display = "block";

  // calculate the amount of scores from 100
  var scorePer = (score * 10);
  resultsContainer.innerHTML += "<p> Your Final result is :" + " " + scorePer + " " + "  out of 100 point in total!</p>";
  
  scoreHigh= localStorage.setItem("userscore", scorePer);

}

function quizEnd() {
  questionsEl.setAttribute("class", "hide");
  answers.setAttribute("class", "hide");
  resultsContainer.removeAttribute("class");
  scoreRender();
}



function clockTick(val) {


  var timerInterval = setInterval(function () {
    time--;

    timeEl.textContent = time;

    //this is a method call clearInterval to clear the resource
    if (time <= 0) {
      quizEnd();
      clearInterval(timerInterval);
    }
    //every second
  }, 1000);




}


/*[ ] Let user save their initials and high score
  [ ] Redirect to high scores page
   */
function saveHighscore() {
  console.log("im here");
  console.log(submitBtn);
  console.log("im here");
  /*
    @TODO: write your function code here
  */

}

// user clicks button to submit initials
// submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

function myHighScoreClick() {
  console.log("hello");
}