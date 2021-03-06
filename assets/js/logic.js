// an array of all the variable kimi
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
  {
    question: "4) Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?",
    a: "indexOf()",
    b: "join()",
    c: "lastIndexOf()",
    correct: "C"
  },
  {
    question: "5) Which of the following function of Array object removes the first element from an array and returns that element?",
    a: "reverse()",
    b: "shift()",
    c: "slice()",
    correct: "B"
  },

  {
    question: "6) How to write an IF statement for executing some code if i is NOT equal to 5?",
    a: "if i <> 5",
    b: "if i =! 5 then",
    c: "if (i != 5)  ",
    correct: "C"
  },
  {
    question: "7) What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
    a: "strip()",
    b: "trim()",
    c: "stripped()",
    correct: "B"
  },

  {
    question: "8) How to write an IF statement in JavaScript?",
    a: "if(i==7)",
    b: "if i=7",
    c: "if i=7 then",
    correct: "A"
  },
  {
    question: "9) Which event occurs when the user clicks on an HTML element?",
    a: "onchange",
    b: "onmouseclick",
    c: "onclick",
    correct: "C"
  },
  {
    question: "10) Which function of an Array object calls a function for each element in the array? ",
    a: "forEach()",
    b: "every()",
    c: "each()",
    correct: "A"
  }
];


let quizTakerName = "";

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let TIMER;
let score = 0;

// varikles to keep track of quiz state
var time = questions.length * 15;
var currentQuestionIndex = 0;
var timerId;

//Varikles to reference DOM elements

var question = document.getElementById("question");
var timerEl = document.getElementById("time");
var timeEl = document.querySelector(".timer");

var answers = document.getElementById("choices");

var questionsEl = document.getElementById('question');
var startBtn = document.getElementById("start");

var a = document.getElementById("A");
var b = document.getElementById("B");
var c = document.getElementById("C");

// var submitEl = document.querySelector("#submit");
var initialInput = document.querySelector("#name");
var resultsContainer = document.getElementById('results');
var initialList = document.querySelector("#initial-list");
var initialScore = document.querySelector("initial-score")


var initial = [];
init();



//this prints the initialized highScoreArray

function storage() {
  var highScoreArray = JSON.parse(localStorage.getItem('highScores')) || []

  var player = document.getElementById("name").value.trim();

  highScoreArray.push({ player, score })

  localStorage.setItem('highScores', JSON.stringify(highScoreArray))
  rendorinitial()

}

function rendorinitial() {


  var highScores = JSON.parse(localStorage.getItem('highScores'))
  console.log(highScores)
  if (highScores) {
    // do the loop and print HTML to page
    for (var i = 0; i < highScores.length; i++) {
      var li = document.createElement("ul");
      var liScore=document.createElement("ul");
      
      li.textContent = highScores[i].player;
      liScore.textContent = highScores[i].score;

      initialList.appendChild(li);
      // initialScore.appendChild(lik);
    }
  } else {
    // print no high scores found
  }

}







function init() {
  var storedInitial = JSON.parse(localStorage.getItem("initial"));

  if (storedInitial !== null) {
    initial = storedInitial;
  }

  rendorinitial();

}

function storeInitial() {
  localStorage.setItem("initial", JSON.stringify(initial));
}

console.log(JSON.stringify(initial));

resultsContainer.addEventListener("submit", function (event) {
  event.preventDefault();
  var initialText = document.getElementById("name").value.trim();

  initial.push(initialText);
  initialInput.value = "";



  storage();
  storeInitial();
  rendorinitial();

});



var totalScore = (score * 10);

localStorage.setItem("userscore", totalScore);




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

    clearInterval(TIMER);
    // scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion);

}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion);

  time = time - 5;

  if (time <= 0) {
    clearInterval(timerInterval);
    time == 0
  }
}

// score render
function scoreRender() {

  resultsContainer.style.display = "block";

  // calculate the amount of scores from 100
  var scorePer = (score * 10);


  resultsContainer.innerHTML += "<p> Your Final result is :" + " " + scorePer + " " + "  out of 100 point in total!</p>";

  scoreHigh = localStorage.setItem("userscore", scorePer);

}

function quizEnd() {
  questionsEl.setAttribute("class", "hide");
  answers.setAttribute("class", "hide");
  resultsContainer.removeAttribute("class");
  // storage()
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


  /*
    @TODO: write your function code here
  */

}

// user clicks button to submit initials
// submitEl.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

// function myHighScoreClick() {
// }