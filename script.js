/* ══════════════════════════════════════════════════════
   OnlyGeniusesPass — script.js
   Quiz Logic + Supabase Auth
   Difficulty order: Easy → Medium → Hard per session
   ══════════════════════════════════════════════════════ */

/* ── SUPABASE INIT ── */
const SUPABASE_URL  = 'https://vubyobwcmcsxlmkocohd.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1YnlvYndjbWNzeGxta29jb2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNzk4MDIsImV4cCI6MjA4Njk1NTgwMn0.QCrOBm46BvSnv70T8rH6Nlfh_fenTT-5XLkHfDtICrk';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

/* ── AUTH STATE ── */
let currentUser = null;

/* ── ON PAGE LOAD ── */
document.addEventListener('DOMContentLoaded', async () => {
  initStats();
  const { data: { session } } = await _supabase.auth.getSession();
  if (session?.user) {
    handleUserLoggedIn(session.user);
  } else {
    showAuthOverlay();
  }
});

_supabase.auth.onAuthStateChange((_event, session) => {
  if (session?.user) handleUserLoggedIn(session.user);
});

async function signInWithGoogle() {
  const btn = document.getElementById('google-login-btn');
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  const { error } = await _supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
  redirectTo: 'onlygeniusespass://login'
}
  });
  if (error) {
    btn.disabled = false;
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg> Continue with Google`;
    alert('Sign-in failed: ' + error.message);
  }
}

function continueAsGuest() {
  currentUser = null;
  hideAuthOverlay();
  const nudge = document.getElementById('signin-nudge');
  if (nudge) nudge.classList.add('visible');
}

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
      avatarEl.outerHTML = `<img class="user-avatar" src="${avatar}" alt="${name}" referrerpolicy="no-referrer">`;
    } else if (avatarEl) {
      avatarEl.textContent = initials;
    }
    const nameEl = document.getElementById('user-name-display');
    if (nameEl) nameEl.textContent = name.split(' ')[0];
  }
  const lbName = document.getElementById('lb-your-name');
  if (lbName) lbName.textContent = name.split(' ')[0] + ' (You)';
  const nudge = document.getElementById('signin-nudge');
  if (nudge) nudge.classList.remove('visible');
}

async function signOut() {
  await _supabase.auth.signOut();
  currentUser = null;
  const pill = document.getElementById('user-pill');
  if (pill) pill.classList.add('hidden');
  const lbName = document.getElementById('lb-your-name');
  if (lbName) lbName.textContent = 'You';
  const lbScore = document.getElementById('lb-your-score');
  if (lbScore) lbScore.textContent = '--';
  showAuthOverlay();
}

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
  cats.forEach(c => {
    const count = questions.filter(q => q.category === c).length;
    const el = document.getElementById('meta-' + c);
    if (el) el.textContent = count + ' questions · Easy–Hard';
  });
}

/* ══════════════════════════════════════════
   QUIZ STATE
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
  window.scrollTo(0, 0);
}

/* ══════════════════════════════════════════
   START QUIZ — difficulty ordered: E→M→H
   Mix: 3 Easy + 4 Medium + 3 Hard = 10 questions
   ══════════════════════════════════════════ */
function startQuiz(category) {
  selectedCategory = category;

  const easy   = questions.filter(q => q.category === category && q.difficulty === 'easy');
  const medium = questions.filter(q => q.category === category && q.difficulty === 'medium');
  const hard   = questions.filter(q => q.category === category && q.difficulty === 'hard');

  if (easy.length === 0 && medium.length === 0 && hard.length === 0) {
    alert('Questions for this category are coming soon!');
    return;
  }

  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

  // 3 easy + 4 medium + 3 hard
  const picked = [
    ...shuffle(easy).slice(0, 3),
    ...shuffle(medium).slice(0, 4),
    ...shuffle(hard).slice(0, 3)
  ];

  // If not enough of a level fill up with others
  if (picked.length < 10) {
    const all = shuffle(questions.filter(q => q.category === category));
    const ids = new Set(picked.map((_, i) => i));
    for (const q of all) {
      if (picked.length >= 10) break;
      if (!picked.includes(q)) picked.push(q);
    }
  }

  quizQuestions = picked;
  score        = 0;
  currentIndex = 0;
  startTime    = Date.now();

  const labels = { GK: 'General Knowledge' };
  document.getElementById('quiz-cat-tag').textContent = labels[category] || category;

  showScreen('screen-quiz');
  loadQuestion();
}

/* ══════════════════════════════════════════
   LOAD QUESTION
   ══════════════════════════════════════════ */
function loadQuestion() {
  answered = false;
  const q       = quizQuestions[currentIndex];
  const n       = quizQuestions.length;
  const letters = ['A','B','C','D'];

  document.getElementById('counter').textContent     = 'Q ' + (currentIndex + 1) + ' / ' + n;
  document.getElementById('score-live').textContent  = 'Score: ' + score;
  document.getElementById('progress-bar').style.width = ((currentIndex / n) * 100) + '%';
  document.getElementById('question').textContent    = q.question;

  // Show difficulty badge subtly in counter
  const diffColor = { easy:'#22c55e', medium:'#f59e0b', hard:'#ef4444' };
  const badge = document.getElementById('counter');
  if (badge && q.difficulty) {
    badge.style.color = diffColor[q.difficulty] || '';
  }

  for (let i = 0; i < 4; i++) {
    const btn  = document.getElementById('opt-' + i);
    btn.querySelector('.opt-text').textContent = q.options[i];
    btn.querySelector('.opt-letter').textContent = letters[i];
    btn.className = 'opt-btn';
    btn.disabled  = false;
  }

  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = 'slideIn .3s ease';

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
    if (timeLeft <= 0) { clearInterval(timer); if (!answered) timeUp(); }
  }, 1000);
}

function updateTimerUI() {
  const badge = document.getElementById('timer-badge');
  document.getElementById('timer').textContent = timeLeft + 's';
  badge.className = 'timer-badge';
  if      (timeLeft <= 5) badge.classList.add('danger');
  else if (timeLeft <= 8) badge.classList.add('warn');
}

function timeUp() {
  answered = true;
  const correct = quizQuestions[currentIndex].answer;
  document.getElementById('opt-' + correct).classList.add('correct');
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
    document.getElementById('opt-' + choice).classList.add('correct');
  } else {
    document.getElementById('opt-' + choice).classList.add('wrong');
    document.getElementById('opt-' + correct).classList.add('correct');
  }
  setTimeout(nextQuestion, 900);
}

function disableOptions() {
  for (let i = 0; i < 4; i++) document.getElementById('opt-' + i).disabled = true;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizQuestions.length) loadQuestion();
  else showResults();
}

/* ══════════════════════════════════════════
   RESULTS
   ══════════════════════════════════════════ */
function showResults() {
  const n       = quizQuestions.length;
  const pct     = Math.round((score / n) * 100);
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const passed  = pct >= 60;

  document.getElementById('progress-bar').style.width = '100%';

  const badge = document.getElementById('result-badge');
  badge.textContent = passed ? '🎉 Genius!' : 'Keep going!';
  badge.className   = 'result-badge ' + (passed ? 'pass' : 'fail');

  document.getElementById('result-pct').innerHTML  = pct + '<span>%</span>';
  document.getElementById('result-msg').textContent = passed
    ? "You're in the top 10%! Truly impressive."
    : 'You scored ' + pct + '% — you almost had it. Try again?';

  document.getElementById('r-correct').textContent  = score;
  document.getElementById('r-wrong').textContent    = n - score;
  document.getElementById('r-time').textContent     = elapsed + 's';
  document.getElementById('lb-your-score').textContent = pct + '%';

  showScreen('screen-results');
}

/* ══════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════ */
function goHome()    { clearInterval(timer); showScreen('screen-home'); }
function quitQuiz()  { clearInterval(timer); showScreen('screen-home'); }
function retryQuiz() { startQuiz(selectedCategory); }

/* ══════════════════════════════════════════
   SHARE (WhatsApp)
   ══════════════════════════════════════════ */
function shareScore() {
  const n   = quizQuestions.length;
  const pct = Math.round((score / n) * 100);
  const msg =
    '🧠 I scored ' + score + '/' + n + ' (' + pct + '%) on OnlyGeniusesPass!\n\n' +
    'Only 1 in 10 people can beat this quiz.\n\n' +
    'Can you beat me? 👇\n' +
    'https://onlygeniusespass.srinjoychakraboty.workers.dev';
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
}