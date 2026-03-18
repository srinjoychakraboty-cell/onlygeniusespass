/* ══════════════════════════════════════════
   SUPABASE CONFIG (FINAL — NO ERRORS)
   ══════════════════════════════════════════ */

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = "https://vubyobwcmcsxlmkocohd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1YnlvYndjbWNzeGxta29jb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNzk4MDIsImV4cCI6MjA4Njk1NTgwMn0.QCrOBm46BvSnv70T8rH6Nlfh_fenTT-5XLkHfDtICrk";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


/* ══════════════════════════════════════════
   AUTH SYSTEM (FIXED)
   ══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", async () => {

  // Check if user already logged in
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    showScreen("screen-home");
  } else {
    showScreen("screen-login");
  }

  initStats();
});


/* Google Login */
const googleBtn = document.getElementById("googleLogin");

if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://onlygeniusespass.srinjoychakraboty.workers.dev'
      }
    });
  });
}


/* ══════════════════════════════════════════
   QUIZ LOGIC
   ══════════════════════════════════════════ */

let selectedCategory  = "";
let quizQuestions     = [];
let score             = 0;
let currentIndex      = 0;
let timer             = null;
let timeLeft          = 10;
let answered          = false;
let startTime         = 0;


/* ── STATS ── */
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


/* ── SCREEN SWITCH ── */
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

  const filtered = questions.filter(q => q.category === category);

  if (filtered.length === 0) {
    alert("Questions coming soon!");
    return;
  }

  quizQuestions = [...filtered]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  score        = 0;
  currentIndex = 0;
  startTime    = Date.now();

  document.getElementById("quiz-cat-tag").textContent = category;

  showScreen("screen-quiz");
  loadQuestion();
}


/* LOAD QUESTION */
function loadQuestion() {

  answered = false;

  const q = quizQuestions[currentIndex];
  const letters = ["A", "B", "C", "D"];

  document.getElementById("counter").textContent =
    `Q ${currentIndex + 1} / ${quizQuestions.length}`;

  document.getElementById("score-live").textContent =
    `Score: ${score}`;

  document.getElementById("progress-bar").style.width =
    `${(currentIndex / quizQuestions.length) * 100}%`;

  document.getElementById("question").textContent = q.question;

  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`opt-${i}`);
    btn.querySelector(".opt-text").textContent = q.options[i];
    btn.querySelector(".opt-letter").textContent = letters[i];
    btn.className = "opt-btn";
    btn.disabled = false;
  }

  startTimer();
}


/* TIMER */
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
  document.getElementById("timer").textContent = timeLeft + "s";
}

function timeUp() {
  answered = true;
  const correct = quizQuestions[currentIndex].answer;

  document.getElementById(`opt-${correct}`).classList.add("correct");

  disableOptions();
  setTimeout(nextQuestion, 1200);
}


/* ANSWER */
function checkAnswer(choice) {
  if (answered) return;

  answered = true;
  clearInterval(timer);

  const correct = quizQuestions[currentIndex].answer;

  disableOptions();

  if (choice === correct) {
    score++;
    document.getElementById(`opt-${choice}`).classList.add("correct");
  } else {
    document.getElementById(`opt-${choice}`).classList.add("wrong");
    document.getElementById(`opt-${correct}`).classList.add("correct");
  }

  setTimeout(nextQuestion, 900);
}

function disableOptions() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`opt-${i}`).disabled = true;
  }
}


/* NEXT */
function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizQuestions.length) loadQuestion();
  else showResults();
}


/* RESULTS */
function showResults() {

  const n   = quizQuestions.length;
  const pct = Math.round((score / n) * 100);

  document.getElementById("result-pct").innerHTML = `${pct}<span>%</span>`;

  document.getElementById("r-correct").textContent = score;
  document.getElementById("r-wrong").textContent   = n - score;

  showScreen("screen-results");
}


/* NAV */
function goHome() {
  clearInterval(timer);
  showScreen("screen-home");
}

function retryQuiz() {
  startQuiz(selectedCategory);
}


/* SHARE */
function shareScore() {

  const n   = quizQuestions.length;
  const pct = Math.round((score / n) * 100);

  const msg =
    `🧠 I scored ${score}/${n} (${pct}%) on OnlyGeniusesPass!\n\n` +
    `Can you beat me?\n` +
    `https://onlygeniusespass.srinjoychakraboty.workers.dev`;

  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
}