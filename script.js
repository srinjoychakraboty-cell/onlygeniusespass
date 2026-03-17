/* ══════════════════════════════════════════
   OnlyGeniusesPass — Quiz Logic
   Works with the existing questions.js array
   ══════════════════════════════════════════ */

/* ── populate home screen stats from live data ── */
function initStats() {
  const cats = ['History', 'Geography', 'Science', 'GK', 'Maths'];
  document.getElementById('stat-total').textContent = questions.length.toLocaleString();
  document.getElementById('stat-cats').textContent  = cats.length;
  cats.forEach(c => {
    const count = questions.filter(q => q.category === c).length;
    const el    = document.getElementById('meta-' + c);
    if (el) el.textContent = count + ' questions · Medium–Hard';
  });
}
document.addEventListener('DOMContentLoaded', initStats);

let selectedCategory  = "";
let quizQuestions     = [];
let score             = 0;
let currentIndex      = 0;
let timer             = null;
let timeLeft          = 10;
let answered          = false;
let startTime         = 0;

/* ── helpers ── */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

/* ══════════════════════════════════════════
   START QUIZ
   ══════════════════════════════════════════ */
function startQuiz(category) {

  selectedCategory = category;

  /* filter + shuffle + pick 10 */
  const filtered = questions.filter(q => q.category === category);

  if (filtered.length === 0) {
    alert("Questions for this category are coming soon!");
    return;
  }

  quizQuestions = [...filtered]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  score        = 0;
  currentIndex = 0;
  startTime    = Date.now();

  /* update category tag */
  const labels = { GK: "General Knowledge" };
  document.getElementById("quiz-cat-tag").textContent =
    labels[category] || category;

  showScreen("screen-quiz");
  loadQuestion();
}

/* ══════════════════════════════════════════
   LOAD QUESTION
   ══════════════════════════════════════════ */
function loadQuestion() {

  answered = false;

  const q  = quizQuestions[currentIndex];
  const n  = quizQuestions.length;
  const letters = ["A", "B", "C", "D"];

  /* counter + score */
  document.getElementById("counter").textContent =
    "Q " + (currentIndex + 1) + " / " + n;

  document.getElementById("score-live").textContent =
    "Score: " + score;

  /* progress bar */
  const pct = ((currentIndex) / n) * 100;
  document.getElementById("progress-bar").style.width = pct + "%";

  /* question text */
  document.getElementById("question").textContent = q.question;

  /* options */
  for (let i = 0; i < 4; i++) {
    const btn  = document.getElementById("opt-" + i);
    const text = btn.querySelector(".opt-text");
    const ltr  = btn.querySelector(".opt-letter");

    text.textContent   = q.options[i];
    ltr.textContent    = letters[i];
    btn.className      = "opt-btn";
    btn.disabled       = false;
  }

  /* re-animate card */
  const card = document.getElementById("question-card");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "slideIn .3s ease";

  startTimer();
}

/* ══════════════════════════════════════════
   TIMER
   ══════════════════════════════════════════ */
function startTimer() {
  clearInterval(timer);
  timeLeft = 10;
  updateTimerUI();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (!answered) timeUp();
    }
  }, 1000);
}

function updateTimerUI() {
  const badge = document.getElementById("timer-badge");
  document.getElementById("timer").textContent = timeLeft + "s";

  badge.className = "timer-badge";
  if      (timeLeft <= 5)  badge.classList.add("danger");
  else if (timeLeft <= 8)  badge.classList.add("warn");
}

function timeUp() {
  answered = true;
  /* reveal correct answer */
  const correct = quizQuestions[currentIndex].answer;
  document.getElementById("opt-" + correct).classList.add("correct");
  disableOptions();
  setTimeout(nextQuestion, 1200);
}

/* ══════════════════════════════════════════
   CHECK ANSWER
   ══════════════════════════════════════════ */
function checkAnswer(choice) {
  if (answered) return;
  answered = true;
  clearInterval(timer);

  const correct = quizQuestions[currentIndex].answer;
  disableOptions();

  if (choice === correct) {
    score++;
    document.getElementById("opt-" + choice).classList.add("correct");
  } else {
    document.getElementById("opt-" + choice).classList.add("wrong");
    document.getElementById("opt-" + correct).classList.add("correct");
  }

  setTimeout(nextQuestion, 900);
}

function disableOptions() {
  for (let i = 0; i < 4; i++) {
    document.getElementById("opt-" + i).disabled = true;
  }
}

/* ══════════════════════════════════════════
   NEXT QUESTION / END
   ══════════════════════════════════════════ */
function nextQuestion() {
  currentIndex++;

  if (currentIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

/* ══════════════════════════════════════════
   RESULTS
   ══════════════════════════════════════════ */
function showResults() {

  const n       = quizQuestions.length;
  const pct     = Math.round((score / n) * 100);
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const passed  = pct >= 60;

  /* fill progress to 100% */
  document.getElementById("progress-bar").style.width = "100%";

  /* badge */
  const badge = document.getElementById("result-badge");
  badge.textContent = passed ? "🎉 Genius!" : "Keep going!";
  badge.className   = "result-badge " + (passed ? "pass" : "fail");

  /* percentage */
  document.getElementById("result-pct").innerHTML =
    pct + "<span>%</span>";

  /* message */
  document.getElementById("result-msg").textContent = passed
    ? "You're in the top 10%! Truly impressive."
    : "You scored " + pct + "% — you almost had it. Try again?";

  /* stats */
  document.getElementById("r-correct").textContent = score;
  document.getElementById("r-wrong").textContent   = n - score;
  document.getElementById("r-time").textContent    = elapsed + "s";

  /* leaderboard row */
  document.getElementById("lb-your-score").textContent = pct + "%";

  showScreen("screen-results");
}

/* ══════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════ */
function goHome() {
  clearInterval(timer);
  showScreen("screen-home");
}

function quitQuiz() {
  clearInterval(timer);
  showScreen("screen-home");
}

function retryQuiz() {
  startQuiz(selectedCategory);
}

/* ══════════════════════════════════════════
   SHARE (WhatsApp)
   ══════════════════════════════════════════ */
function shareScore() {
  const n   = quizQuestions.length;
  const pct = Math.round((score / n) * 100);

  const message =
    "🧠 I scored " + score + "/" + n + " (" + pct + "%) on OnlyGeniusesPass!\n\n" +
    "Only 1 in 10 people can beat this quiz.\n\n" +
    "Can you beat me? 👇\n" +
    "https://onlygeniusespass.srinjoychakraboty.workers.dev";

  window.open(
    "https://wa.me/?text=" + encodeURIComponent(message),
    "_blank"
  );
}