console.log(questions.length);

let selectedCategory = "";
let filteredQuestions = [];
let quizQuestions = [];

let score = 0;
let currentQuestionIndex = 0;


/* ================= START QUIZ ================= */

function startQuiz(category){

selectedCategory = category;

/* filter questions by category */
filteredQuestions = questions.filter(q => q.category === category);

/* if no questions exist */
if(filteredQuestions.length === 0){
alert("Questions for this category are coming soon!");
return;
}

/* shuffle questions */
let shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());

/* pick first 15 questions */
quizQuestions = shuffled.slice(0,15);

score = 0;
currentQuestionIndex = 0;

document.getElementById("category-select").style.display = "none";
document.getElementById("quiz").style.display = "block";

loadQuestion();

}


/* ================= LOAD QUESTION ================= */

function loadQuestion(){

let currentQuestion = quizQuestions[currentQuestionIndex];

document.getElementById("result").innerText = "";

/* question counter */

document.getElementById("counter").innerText =
"Question " + (currentQuestionIndex + 1) + " / " + quizQuestions.length;


/* progress bar */

let progress =
((currentQuestionIndex + 1) / quizQuestions.length) * 100;

document.getElementById("progress-bar").style.width =
progress + "%";


/* question text */

document.getElementById("question").innerText =
currentQuestion.question;


/* options */

let buttons =
document.querySelectorAll("#quiz .options button");

for(let i = 0; i < 4; i++){

buttons[i].innerText =
currentQuestion.options[i];

}

}


/* ================= CHECK ANSWER ================= */

function checkAnswer(choice){

let currentQuestion = quizQuestions[currentQuestionIndex];

if(choice === currentQuestion.answer){

document.getElementById("result").innerText = "✅ Correct!";
document.getElementById("result").style.color = "green";

score++;

}
else{

document.getElementById("result").innerText = "❌ Wrong!";
document.getElementById("result").style.color = "red";

}

setTimeout(nextQuestion,800);

}


/* ================= NEXT QUESTION ================= */

function nextQuestion(){

currentQuestionIndex++;

if(currentQuestionIndex < quizQuestions.length){

loadQuestion();

}
else{

document.getElementById("quiz").innerHTML =

"<h2>Quiz Finished!</h2>" +

"<p>Your Score: " + score + " / " +
quizQuestions.length + "</p>" +

"<p>🧠 Only geniuses score above 12!</p>" +

"<br><button onclick='shareScore()'>Share Score</button>" +

"<br><br><button onclick='location.reload()'>Play Again</button>";

}

}


/* ================= SHARE SCORE ================= */

function shareScore(){

let message =

"🧠 I scored " + score + "/" +
quizQuestions.length +

" on OnlyGeniusesPass!\n\n" +

"Only 1 in 10 people can beat this quiz.\n\n" +

"Can you beat me?\n\n" +

"https://onlygeniusespass.netlify.app";

let url =
"https://wa.me/?text=" + encodeURIComponent(message);

window.open(url,"_blank");

}