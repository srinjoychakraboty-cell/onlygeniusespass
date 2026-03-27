/* ══════════════════════════════════════════════════════
   OnlyGeniusesPass — script.js (FINAL FIXED)
   Native Google Login + Supabase Auth
   ══════════════════════════════════════════════════════ */

/* ── SUPABASE INIT ── */
const SUPABASE_URL  = 'https://vubyobwcmcsxlmkocohd.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // keep yours

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

/* ── AUTH STATE ── */
let currentUser = null;

/* ── PAGE LOAD ── */
document.addEventListener('DOMContentLoaded', async () => {
  initStats();

  const { data: { session } } = await _supabase.auth.getSession();

  if (session?.user) {
    handleUserLoggedIn(session.user);
  } else {
    showAuthOverlay();
  }
});

/* ── AUTH LISTENER ── */
_supabase.auth.onAuthStateChange((_event, session) => {
  if (session?.user) handleUserLoggedIn(session.user);
});

/* ════════════════════════════════════════
   🔥 GOOGLE LOGIN (UPDATED)
   ════════════════════════════════════════ */
function signInWithGoogle() {
  if (window.Android) {
    window.Android.signInWithGoogle();
  } else {
    alert("Google login not available");
  }
}

/* ════════════════════════════════════════
   🔥 RECEIVE TOKEN FROM ANDROID
   ════════════════════════════════════════ */
window.onGoogleLogin = async function(idToken) {
  try {
    const { data, error } = await _supabase.auth.signInWithIdToken({
      provider: 'google',
      token: idToken
    });

    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      window.location.reload();
    }

  } catch (e) {
    alert('Error: ' + e.message);
  }
};

/* ── GUEST ── */
function continueAsGuest() {
  currentUser = null;
  hideAuthOverlay();
  const nudge = document.getElementById('signin-nudge');
  if (nudge) nudge.classList.add('visible');
}

/* ── USER HANDLER ── */
function handleUserLoggedIn(user) {
  currentUser = user;
  hideAuthOverlay();

  const name     = user.user_metadata?.full_name || user.email || 'Player';
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  const avatar   = user.user_metadata?.avatar_url;

  const pill = document.getElementById('user-pill');
  if (pill) {
    pill.classList.remove('hidden');

    const avatarEl = pill.querySelector('.user-avatar-placeholder') || pill.querySelector('.user-avatar');

    if (avatar && avatarEl) {
      avatarEl.outerHTML = `<img class="user-avatar" src="${avatar}" alt="${name}">`;
    } else if (avatarEl) {
      avatarEl.textContent = initials;
    }

    const nameEl = document.getElementById('user-name-display');
    if (nameEl) nameEl.textContent = name.split(' ')[0];
  }

  const lbName = document.getElementById('lb-your-name');
  if (lbName) lbName.textContent = name.split(' ')[0] + ' (You)';
}

/* ── SIGN OUT ── */
async function signOut() {
  await _supabase.auth.signOut();
  currentUser = null;
  showAuthOverlay();
}

/* ── AUTH UI ── */
function showAuthOverlay() {
  const el = document.getElementById('auth-overlay');
  if (el) el.classList.remove('hidden');
}

function hideAuthOverlay() {
  const el = document.getElementById('auth-overlay');
  if (el) el.classList.add('hidden');
}

/* ══════════════════════════════════════════
   HOME STATS
   ══════════════════════════════════════════ */
function initStats() {
  const cats = ['History','Geography','Science','GK','Maths'];
  document.getElementById('stat-total').textContent = questions.length.toLocaleString();
  document.getElementById('stat-cats').textContent  = cats.length;
}

/* ══════════════════════════════════════════
   QUIZ STATE (UNCHANGED)
   ══════════════════════════════════════════ */
let selectedCategory = '';
let quizQuestions    = [];
let score            = 0;
let currentIndex     = 0;
let timer            = null;
let timeLeft         = 10;
let answered         = false;
let startTime        = 0;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* START QUIZ */
function startQuiz(category) {
  selectedCategory = category;

  const easy   = questions.filter(q => q.category === category && q.difficulty === 'easy');
  const medium = questions.filter(q => q.category === category && q.difficulty === 'medium');
  const hard   = questions.filter(q => q.category === category && q.difficulty === 'hard');

  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

  quizQuestions = [
    ...shuffle(easy).slice(0, 3),
    ...shuffle(medium).slice(0, 4),
    ...shuffle(hard).slice(0, 3)
  ];

  score = 0;
  currentIndex = 0;

  showScreen('screen-quiz');
  loadQuestion();
}

/* LOAD QUESTION */
function loadQuestion() {
  answered = false;
  const q = quizQuestions[currentIndex];

  document.getElementById('question').textContent = q.question;

  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById('opt-' + i);
    btn.querySelector('.opt-text').textContent = q.options[i];
    btn.disabled = false;
    btn.className = 'opt-btn';
  }

  startTimer();
}

/* TIMER */
function startTimer() {
  clearInterval(timer);
  timeLeft = 10;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft + 's';

    if (timeLeft <= 0) {
      clearInterval(timer);
      timeUp();
    }
  }, 1000);
}

/* ANSWER */
function checkAnswer(choice) {
  if (answered) return;
  answered = true;
  clearInterval(timer);

  const correct = quizQuestions[currentIndex].answer;

  if (choice === correct) score++;

  setTimeout(nextQuestion, 800);
}

function timeUp() {
  setTimeout(nextQuestion, 800);
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizQuestions.length) loadQuestion();
  else showResults();
}

/* RESULTS */
function showResults() {
  const n   = quizQuestions.length;
  const pct = Math.round((score / n) * 100);

  document.getElementById('result-pct').textContent = pct + '%';
  showScreen('screen-results');
}

/* NAV */
function goHome() { showScreen('screen-home'); }
function retryQuiz() { startQuiz(selectedCategory); }

/* SHARE */
function shareScore() {
  const n   = quizQuestions.length;
  const pct = Math.round((score / n) * 100);

  const msg = `🧠 I scored ${score}/${n} (${pct}%) on OnlyGeniusesPass!`;

  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
}