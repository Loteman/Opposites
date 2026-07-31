// ============================= QUESTION BANKS =============================
// 32 short, easy questions — dedicated to warm-up mode (beginners / kids)
const WARMUP_QUESTIONS = [
  'איזה צבע יש לעגבנייה?','איזה קול עושה חתול?','מה אוכלת פנדה?','כמה אצבעות יש ביד אחת?',
  'מה יורד מהשמיים בחורף?','מה מדליקים על עוגת יום הולדת?','איזו חיה הכי אוהבת בננות?','איזה צבע יש לדשא?',
  'איפה דגים גרים?','איזה כלי תחבורה טס בשמיים?','מה שותים כשצמאים?','מה לובשים על הרגליים לפני הנעליים?',
  'איזה קול עושה כלב?','איפה ישנים בלילה?','מה שמים על הראש כשחם בחוץ?','איזה פרי הוא צהוב וארוך?',
  'מה אוכלים בעזרת כפית?','לאיזו חיה יש צוואר ארוך מאוד?','מה זורחת בשמיים ביום?','איזה פרי הוא ירוק מבחוץ ואדום מבפנים?',
  'מה עושים עם ספר?','כמה רגליים יש לשולחן?','מה מורחים על הלחם בבוקר?','באיזה חג לובשים תחפושות?',
  'מה אוכלים בקיץ כשחם?','איפה לומדים עם המורה?','איזו חיה מטילה ביצים?','איזה איבר בפנים משמש להרחה?',
  'מה רואים בשמיים בלילה?','במה משתמשים כדי לצחצח שיניים?','מה עושים כשעייפים?','איזה פרי גדל על עץ תפוחים?'
];

// Larger, slightly less obvious bank for the main game
const MAIN_QUESTIONS = [
  'איזה מקצוע דורש חליפת חלל?','איזו מדינה נמצאת הכי קרוב לקוטב הצפוני?','איזה כלי נגינה יש לו מיתרים?','מה עושים בבריכה?',
  'איזו חיה נחשבת למלך הג׳ונגל?','באיזה חודש חוגגים את ראש השנה?','איזה ספורט משחקים עם רשת ומחבט?','מה צריך כדי להדליק מדורה?',
  'איזה מקצוע עוזר כשכואבות שיניים?','איזו עונה הכי חמה בשנה?','מה שמים במזוודה לפני טיסה?','איזה בעל חיים נותן לנו חלב?',
  'איזה כוכב לכת הכי קרוב לשמש?','מה עושים במכבסה?','איזה מקצוע נוהג באוטובוס?','איזו ארוחה אוכלים בבוקר?',
  'מה משתמשים בו כדי לראות בלילה?','איזו חיה חיה בים ונושמת אוויר?','מה קורה כשלוחצים על מתג האור?','איזה כלי עוזר לחתוך נייר?',
  'איזו מדינה ידועה בפיצה ופסטה?','מה עושים בספרייה?','איזה חג יהודי חוגגים עם סופגניות?','מה נמצא בתוך ביצה?',
  'איזה חלק ברכב עוזר לעצור?','איזו חיה יש לה יבלת על הגב?','מה עושים כשמצטננים?','איזה כלי משתמשים בו למדידת חום?',
  'איזו עיר היא בירת ישראל?','מה שמים במכונת הכביסה?','איזה בעל מקצוע מכבה שריפות?','מה עושים בגן חיות?',
  'איזה כוכב זורח הכי חזק בלילה?','מה משתמשים בו כדי לפתוח דלת נעולה?','איזו חיה מקפצת על שתי רגליים אחוריות?','מה שותים בבוקר כדי להתעורר?',
  'איזה מקצוע מטפל בחיות חולות?','מה עושים במגרש כדורגל?','איזו עונה נושרים בה העלים?','איזה כלי רכב נוסע על פסי ברזל?',
  'מה שמים בתוך תרמוס?','איזו חיה חיה במדבר ויכולה ללכת בלי מים ימים רבים?','מה עושים עם מטריה?','איזה מקצוע בונה בתים?',
  'באיזה חג מדליקים נרות שמונה לילות?','מה משתמשים בו כדי לצלם תמונה?','איזו חיה מכונה "אניית המדבר"?','מה עושים בחדר כושר?',
  'איזה איבר בגוף שואב את הדם?','מה שמים על פיצה לפני האפייה?','איזו מדינה ידועה בקנגורו?','מה עושים כשמגיעים לקולנוע?',
  'איזה כלי עוזר לראות דברים קטנים מאוד?','מה קורה כשמערבבים כחול וצהוב?','איזה מקצוע מלמד ילדים בבית ספר?','מה עושים בחוף הים?',
  'איזו חיה מייצרת דבש?','מה שמים בתוך סנדוויץ׳?','איזה כוכב לכת מכונה "כוכב אדום"?','מה עושים לפני השינה?',
  'מה משתמשים בו כדי לחפש מידע באינטרנט?','איזה מכשיר מצלם תמונות וסרטונים?','מה טוענים בלילה כדי שיהיה מלא בבוקר?','איזה מכשיר מציג סרטים וטלוויזיה בסלון?',
  'מה מקבלים בתמורה לעבודה בסוף החודש?','איפה שומרים כסף בבטחה?','איזה חפץ קטן שומרים בו מטבעות וכרטיסים?',
  'כמה ימים יש בשבוע?','כמה חודשים יש בשנה?','מה משתמשים בו כדי לדעת את השעה?',
  'איזה צבע מקבלים כשמערבבים אדום ולבן?','איזו צורה יש לה שלוש פינות?','איזה צבע הוא צבע השמיים ביום בהיר?',
  'מה מרגישים כשמקבלים מתנה?','איך קוראים לאבא של אבא שלי?','מה עושים כשמשהו מצחיק קורה?','איך קוראים לילדים של אותם הורים?',
  'איזה כלי משתמשים בו כדי לתקוע מסמר?','מה משתמשים בו כדי למדוד אורך?','איזה כלי מברגים בו ברגים?',
  'איפה הולכים כשחולים מאוד?','מה לוקחים כשכואב הראש?','מי בודק את השיניים שלנו?','מה עושים כשיש חום גבוה (למדידה)?',
  'מה קונים בקולנוע לאכול בזמן הסרט?','איזה סוג סרט גורם לצחוק?','מה לוחצים כדי להחליף ערוץ בטלוויזיה?',
  'איזו אגדה מספרת על נערה שישנה שנים עד נשיקה?','איך קוראים לילדה עם השיער האדום שנופלת לבור ארנב?','איזו חיה עוזרת לפינוקיו לדעת מה נכון ומה לא?','מה גדל לג׳ק כשהוא שותל את גרעיני הקסם?',
  'מה משחקים איתו בחוץ עם קפיצות על משבצות מצוירות?','איזה צעצוע מסתובב על הרצפה כשמסובבים אותו?','מה עושים עם קלפים במשחק קלפים?',
  'מה קורה למים כשמקפיאים אותם?','מה קורה לקרח כשמחממים אותו?','איזה כוח מושך דברים למטה לכיוון הרצפה?','מה צריך צמח כדי לגדול (חוץ ממים)?',
  'איזה כלי עתיק השתמשו בו לפני שהיו מכוניות לנסיעה מהירה?','איך שלחו מכתבים לפני שהיה אימייל?'
];

// ============================= CHALLENGE BANK — trickier, indirect riddle-style questions =============================
// Same "everyone knows it" bar, but phrased as a quick logical chain (e.g. "what's the nephew's mother called?")
const CHALLENGE_QUESTIONS = [
  'מה השם של אמא של האחיין שלי?','איך קוראים לבן של הדוד שלי?','איך מכנים את האישה של הבן שלי?','מה השם של הבעל של הבת שלי?','מה השם של האחות של אבא שלי?',
  'איך קוראים לחלק בנעל שקושרים אותו?','מהו החלק במטרייה שאוחזים בו ביד?','איך מכנים את החלק בכוס שממנו שותים (הקצה העליון)?','מה השם של החדר בבית שבו מבשלים?','איך קוראים לחלק במכונית שבו שומרים את המזוודות?',
  'מה השם של תינוק הכלב?','איך קוראים לתינוק של הפרה?','איך נקרא תינוק הכבשה?','איך מכנים את הזכר של התרנגולת?','איך נקרא הבית שבו גרות הדבורים?',
  'איך קוראים לתושב שגר בעיר הבירה של ישראל?','מהי היבשת שבה נמצאת מצרים?','איך מכנים את הים שנמצא בין ישראל וירדן (הכי מלוח בעולם)?',
  'מיהו האדם שמטפל בשיניים שלנו?','איך קוראים לאדם שמלמד בכיתה?','מיהו האדם שמטיס מטוס?','איך מכנים את האדם שמכבה שריפות?',
  'מהו היום שאחרי יום שישי?','איך קוראים לחודש הראשון בשנה?','מהי העונה שבה יורד הכי הרבה גשם בישראל?',
  'איך מכנים את המשקה שמכינים מסחיטת תפוזים?','מה השם של הלחם השטוח שמשמש לפלאפל?','איך קוראים לקינוח הקר שאוכלים בקיץ מהמקפיא?',
  'מהו האיבר שמנקה את הדם בגוף (יש שניים ממנו)?','איך מכנים את הרופא שמטפל בעיניים?',
  'מה השם של הכלי שמראה לנו את הזמן על פרק היד?','איך קוראים לחפץ ששומר על האוכל חם בטיולים?','מהו הכלי שמודד את מזג האוויר בחוץ (חום)?',
  'איך מכנים את הסעודה שאוכלים בליל הסדר?','מה השם של הבצק המצומצם שאוכלים בפסח?',
  'איך קוראים לנעל שהנסיכה השאירה אחרי החצות?','מיהו הזאב שמתחפש לסבתא בסיפור הידוע?',
  'איך מכנים את התהליך שבו הצמח הופך אור שמש למזון?','מהי שכבת האוויר שמקיפה את כדור הארץ?',
  'איך קוראים למסמך שמקבלים בבנק כשמושכים כסף?'
];

// ============================= GAME STATE =============================
const G = {
  players:          [],
  numPlayers:       2,
  scores:           [],
  currentPlayerIdx: 0,
  roundSeconds:     60,
  maxQuestions:     15,
  warmupMode:       false,
  includeChallenge: false,
  questionsAsked:   0,
  questionQueue:    [],
  challengeQueue:   [],
  playerQuestionCounts: [],
  timerInterval:    null,
  timeLeft:         60,
  animating:        false,
};

// ============================= INIT =============================
document.addEventListener('DOMContentLoaded', onNumPlayersChange);

function onNumPlayersChange() {
  const n = parseInt(document.getElementById('num-players').value);
  G.numPlayers = n;
  rebuildPlayerRows(new Array(n).fill(''));
}

// ============================= PLAYERS CARD (chips + edit accordion) =============================
function escapeHtml(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function rebuildPlayerRows(values) {
  const grid = document.getElementById('player-inputs');
  grid.innerHTML = '';
  values.forEach((val, i) => {
    const row = document.createElement('div');
    row.className = 'player-input-row';
    row.innerHTML = `
      <span class="player-num">${i + 1}</span>
      <input type="text" id="pname-${i}" placeholder="שחקן ${i + 1}" maxlength="18" value="${escapeHtml(val)}" oninput="updatePlayerChips()">
      <span class="drag-handle" title="גרור לשינוי סדר"><iconify-icon icon="mdi:drag-vertical"></iconify-icon></span>`;
    grid.appendChild(row);
    initRowDrag(row);
  });
  updatePlayerChips();
}

function updatePlayerChips() {
  const chipsEl = document.getElementById('players-chips');
  chipsEl.innerHTML = '';
  for (let i = 0; i < G.numPlayers; i++) {
    const input = document.getElementById(`pname-${i}`);
    const val   = input ? input.value.trim() : '';
    const chip  = document.createElement('div');
    chip.className = 'player-chip';
    chip.onclick = () => focusPlayerEdit(i);
    chip.innerHTML = `<span class="chip-num">${i + 1}</span><span class="chip-name">${escapeHtml(val) || `שחקן ${i + 1}`}</span>`;
    chipsEl.appendChild(chip);
  }
}

// ---- Drag-to-reorder (Pointer Events, works for mouse + touch) ----
let _drag = null;
const ROW_GAP = 9;

function initRowDrag(row) {
  const handle = row.querySelector('.drag-handle');
  handle.addEventListener('pointerdown', (e) => startDrag(e, row, handle));
}

function startDrag(e, row, handle) {
  e.preventDefault();
  const activeInput = document.activeElement;
  if (activeInput && activeInput.tagName === 'INPUT') activeInput.blur();

  handle.setPointerCapture(e.pointerId);

  const grid      = document.getElementById('player-inputs');
  const rows      = Array.from(grid.querySelectorAll('.player-input-row'));
  const rowHeight = row.offsetHeight + ROW_GAP;
  const origIndex = rows.indexOf(row);

  _drag = { grid, rows, row, origIndex, startY: e.clientY, rowHeight, targetSlot: origIndex, pointerId: e.pointerId, handle };

  row.classList.add('dragging');

  handle.addEventListener('pointermove', dragMove);
  handle.addEventListener('pointerup', endDrag);
  handle.addEventListener('pointercancel', endDrag);
}

function dragMove(e) {
  if (!_drag) return;
  const dy = e.clientY - _drag.startY;
  _drag.row.style.transform = `translateY(${dy}px)`;

  const n = _drag.rows.length;
  const draggedCenter = _drag.origIndex * _drag.rowHeight + _drag.rowHeight / 2 + dy;
  let targetSlot = Math.round((draggedCenter - _drag.rowHeight / 2) / _drag.rowHeight);
  targetSlot = Math.max(0, Math.min(n - 1, targetSlot));
  _drag.targetSlot = targetSlot;

  _drag.rows.forEach((r, slot) => {
    if (r === _drag.row) return;
    let shift = 0;
    if (_drag.origIndex < targetSlot && slot > _drag.origIndex && slot <= targetSlot) {
      shift = -_drag.rowHeight;
    } else if (_drag.origIndex > targetSlot && slot >= targetSlot && slot < _drag.origIndex) {
      shift = _drag.rowHeight;
    }
    r.style.transform = shift ? `translateY(${shift}px)` : '';
  });
}

function endDrag(e) {
  if (!_drag) return;
  const { rows, row, origIndex, targetSlot, handle, pointerId } = _drag;

  handle.removeEventListener('pointermove', dragMove);
  handle.removeEventListener('pointerup', endDrag);
  handle.removeEventListener('pointercancel', endDrag);
  try { handle.releasePointerCapture(pointerId); } catch (err) {}

  row.classList.remove('dragging');
  rows.forEach(r => { r.style.transform = ''; });

  if (targetSlot !== origIndex) {
    const values = rows.map(r => r.querySelector('input').value);
    const moved  = values.splice(origIndex, 1)[0];
    values.splice(targetSlot, 0, moved);
    rebuildPlayerRows(values);
    vibrate([25]);
  }

  _drag = null;
}

let _playersEditOpen = false;
function togglePlayersEdit() {
  _playersEditOpen = !_playersEditOpen;
  document.getElementById('players-edit-content').classList.toggle('open', _playersEditOpen);
  document.getElementById('players-edit-chevron').classList.toggle('open', _playersEditOpen);
}

function focusPlayerEdit(i) {
  const wasOpen = _playersEditOpen;
  if (!wasOpen) togglePlayersEdit();

  const jumpToInput = () => {
    const input = document.getElementById(`pname-${i}`);
    if (!input) return;
    input.focus();
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const row = input.closest('.player-input-row');
    if (row) {
      row.classList.add('highlight-row');
      setTimeout(() => row.classList.remove('highlight-row'), 900);
    }
  };

  setTimeout(jumpToInput, wasOpen ? 30 : 300);
}

// ============================= SETTINGS TOGGLES =============================
function setToggle(key, value) {
  if (key === 'warmup')    G.warmupMode       = value;
  if (key === 'challenge') G.includeChallenge = value;
  const btn = document.getElementById(`toggle-${key}`);
  if (btn) btn.classList.toggle('on', value);
}

function toggleSetting(key) {
  const current = key === 'warmup' ? G.warmupMode : G.includeChallenge;
  setToggle(key, !current);
  vibrate([20]);
}

// ============================= ADVANCED SETTINGS ACCORDION =============================
let _advSettingsOpen = false;
function toggleAdvancedSettings() {
  _advSettingsOpen = !_advSettingsOpen;
  document.getElementById('advanced-settings-content').classList.toggle('open', _advSettingsOpen);
  document.getElementById('adv-settings-chevron').classList.toggle('open', _advSettingsOpen);
}

// ============================= NAV: HOME / SETTINGS =============================
function goHome() {
  if (!confirm('לחזור לדף הבית? המשחק הנוכחי יאופס.')) return;
  clearInterval(G.timerInterval);
  setHeader(false);
  showScreen('screen-home');
}

function goToSettings() {
  setHeader(true, helpBtn());
  showScreen('screen-settings');
}

function goToReady() {
  const n = G.numPlayers;
  G.players = [];
  for (let i = 0; i < n; i++) {
    const v = document.getElementById(`pname-${i}`).value.trim();
    G.players.push(v || `שחקן ${i + 1}`);
  }

  G.roundSeconds = Math.max(20, Math.min(180, parseInt(document.getElementById('round-seconds').value) || 60));
  G.maxQuestions = Math.max(5,  Math.min(15,  parseInt(document.getElementById('max-questions').value) || 10));

  const desc = document.getElementById('ready-desc');
  if (G.warmupMode) {
    desc.innerHTML = `<strong>המנחה/ה</strong> מחזיק/ה את הטלפון ושואל/ת בקול עד <strong>${G.maxQuestions} שאלות קלות</strong> — בלי לחץ זמן. מושלם למתחילים ולילדים!`;
  } else {
    desc.innerHTML = `<strong>המנחה/ה</strong> מחזיק/ה את הטלפון לאורך כל הסבב, קורא/ת בקול את השאלות — ולכם יש <strong>${G.roundSeconds} שניות</strong> ועד <strong>${G.maxQuestions} שאלות</strong> להשיג הכי הרבה נקודות!`;
  }

  setHeader(true, helpBtn());
  showScreen('screen-ready');
}

// ============================= ROUND START =============================
function startRound() {
  G.scores               = new Array(G.numPlayers).fill(0);
  G.playerQuestionCounts = new Array(G.numPlayers).fill(0);
  G.currentPlayerIdx      = 0;
  G.questionsAsked        = 0;
  G.animating             = false;

  const pool = G.warmupMode ? WARMUP_QUESTIONS : MAIN_QUESTIONS;
  G.questionQueue  = shuffle([...pool]);
  G.challengeQueue = shuffle([...CHALLENGE_QUESTIONS]);

  document.getElementById('timer-wrap').classList.toggle('untimed', G.warmupMode);
  updateScoreUI();
  updateProgressUI();
  showNextQuestion();

  setHeader(true, abortBtn());
  showScreen('screen-game');

  if (G.warmupMode) {
    clearInterval(G.timerInterval);
  } else {
    G.timeLeft = G.roundSeconds;
    startTimer();
  }
}

function abortRound() {
  if (!confirm('לעצור את הסבב? הניקוד הנוכחי לא יישמר.')) return;
  clearInterval(G.timerInterval);
  setHeader(true, helpBtn());
  showScreen('screen-ready');
}

function abortBtn() {
  return `<button class="header-btn" onclick="abortRound()">
    <iconify-icon icon="mdi:arrow-right-circle-outline"></iconify-icon> עצור</button>`;
}

// ============================= TIMER =============================
const CIRCUMFERENCE = 188.5;

function startTimer() {
  clearInterval(G.timerInterval);
  const arc      = document.getElementById('timer-arc');
  const timerTxt = document.getElementById('timer-display');
  const total    = G.roundSeconds;

  arc.style.strokeDashoffset = 0;
  arc.style.stroke = 'var(--green)';
  timerTxt.textContent = G.timeLeft;
  timerTxt.classList.remove('danger');

  G.timerInterval = setInterval(() => {
    G.timeLeft--;
    timerTxt.textContent = Math.max(0, G.timeLeft);

    const fraction = Math.max(0, G.timeLeft) / total;
    arc.style.strokeDashoffset = (CIRCUMFERENCE * (1 - fraction)).toFixed(2);
    arc.style.stroke = fraction > .5 ? 'var(--green)' : fraction > .25 ? '#facc15' : 'var(--red)';

    if (G.timeLeft <= 5 && G.timeLeft > 0) {
      timerTxt.classList.add('danger');
      vibrate(50);
    }
    if (G.timeLeft <= 0) {
      clearInterval(G.timerInterval);
      endRound();
    }
  }, 1000);
}

// ============================= QUESTIONS =============================
function showNextQuestion() {
  const idx = G.currentPlayerIdx;
  G.playerQuestionCounts[idx] = (G.playerQuestionCounts[idx] || 0) + 1;

  // Every 5th question for this specific player is pulled from the challenge bank
  // (skipped during warm-up, which is meant to stay easy for beginners/kids)
  const useChallenge = G.includeChallenge && !G.warmupMode && (G.playerQuestionCounts[idx] % 5 === 0);

  let question;
  if (useChallenge) {
    if (G.challengeQueue.length === 0) G.challengeQueue = shuffle([...CHALLENGE_QUESTIONS]);
    question = G.challengeQueue.shift();
  } else {
    if (G.questionQueue.length === 0) {
      const pool = G.warmupMode ? WARMUP_QUESTIONS : MAIN_QUESTIONS;
      G.questionQueue = shuffle([...pool]);
    }
    question = G.questionQueue.shift();
  }

  const el = document.getElementById('card-question');
  el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
  el.textContent = question;

  document.getElementById('challenge-badge').classList.toggle('visible', useChallenge);
  document.getElementById('turn-name').textContent = G.players[idx];
  updateProgressUI();
}

function updateScoreUI() {
  document.getElementById('score-display').textContent = G.scores[G.currentPlayerIdx] + ' נק׳';
}

function updateProgressUI() {
  document.getElementById('progress-display').textContent = (G.questionsAsked + 1) + ' / ' + G.maxQuestions;
}

// ============================= SWIPE GESTURE =============================
let drag = { active:false, startX:0, startY:0, mode:'touch' };
const SWIPE_THRESHOLD = 100;

function onDragStart(x, y, mode) {
  if (G.animating) return;
  drag = { active:true, startX:x, startY:y, mode };
  document.getElementById('swipe-card').style.transition = 'none';
}
function onDragMove(x, y) {
  if (!drag.active || G.animating) return;
  const dx  = x - drag.startX;
  const dy  = (y - drag.startY) * 0.25;
  const rot = dx * 0.11;
  document.getElementById('swipe-card').style.transform = `translateX(${dx}px) translateY(${dy}px) rotate(${rot}deg)`;

  const absX    = Math.abs(dx);
  const opacity = Math.min(1, (absX - 20) / 55);
  const fitLbl   = document.getElementById('label-fit');
  const nofitLbl = document.getElementById('label-nofit');
  if      (dx > 20)  { fitLbl.style.opacity = opacity; nofitLbl.style.opacity = '0'; }
  else if (dx < -20) { nofitLbl.style.opacity = opacity; fitLbl.style.opacity = '0'; }
  else               { fitLbl.style.opacity = '0'; nofitLbl.style.opacity = '0'; }
}
function onDragEnd(x) {
  if (!drag.active) return;
  drag.active = false;
  const dx = x - drag.startX;
  document.getElementById('label-fit').style.opacity   = '0';
  document.getElementById('label-nofit').style.opacity = '0';

  if (Math.abs(dx) >= SWIPE_THRESHOLD) {
    judgeAnswer(dx > 0);
  } else {
    const card = document.getElementById('swipe-card');
    card.style.transition = 'transform .35s cubic-bezier(.175,.885,.32,1.275)';
    card.style.transform  = 'translateX(0) translateY(0) rotate(0deg)';
  }
}

const cardEl = document.getElementById('swipe-card');
cardEl.addEventListener('touchstart', e => {
  onDragStart(e.touches[0].clientX, e.touches[0].clientY, 'touch');
}, { passive: true });
cardEl.addEventListener('touchmove', e => {
  onDragMove(e.touches[0].clientX, e.touches[0].clientY);
  e.preventDefault();
}, { passive: false });
cardEl.addEventListener('touchend', e => { onDragEnd(e.changedTouches[0].clientX); });

cardEl.addEventListener('mousedown', e => { onDragStart(e.clientX, e.clientY, 'mouse'); e.preventDefault(); });
document.addEventListener('mousemove', e => { if (drag.active && drag.mode === 'mouse') onDragMove(e.clientX, e.clientY); });
document.addEventListener('mouseup',   e => { if (drag.active && drag.mode === 'mouse') onDragEnd(e.clientX); });

// ============================= JUDGE ANSWER =============================
function judgeAnswer(fits) {
  if (G.animating) return;
  G.animating = true;
  G.questionsAsked++;

  if (fits) {
    G.scores[G.currentPlayerIdx]++;
    vibrate([40,20,40]);
  } else {
    vibrate([80,30,80]);
  }
  updateScoreUI();

  document.getElementById(fits ? 'overlay-correct' : 'overlay-wrong').classList.add('visible');
  spawnToast(fits ? '+1' : '—', document.querySelector('.card-area'));

  const card = document.getElementById('swipe-card');
  const flyX = fits ? 520 : -520;
  const flyR = fits ? 32  : -32;
  card.style.transition = 'transform .32s ease-in, opacity .3s ease-in';
  card.style.transform  = `translateX(${flyX}px) rotate(${flyR}deg)`;
  card.style.opacity    = '0';

  setTimeout(() => {
    document.getElementById('overlay-correct').classList.remove('visible');
    document.getElementById('overlay-wrong').classList.remove('visible');

    const doneByCount = G.questionsAsked >= G.maxQuestions;
    if (doneByCount) {
      G.animating = false;
      endRound();
      return;
    }

    G.currentPlayerIdx = (G.currentPlayerIdx + 1) % G.numPlayers;
    updateScoreUI();

    card.style.transition = 'none';
    card.style.transform  = 'scale(.85) translateY(18px)';
    card.style.opacity    = '0';
    showNextQuestion();

    requestAnimationFrame(() => requestAnimationFrame(() => {
      card.style.transition = 'transform .28s cubic-bezier(.175,.885,.32,1.275), opacity .22s ease';
      card.style.transform  = 'scale(1) translateY(0)';
      card.style.opacity    = '1';
    }));

    G.animating = false;
  }, 320);
}

function spawnToast(text, parent) {
  const el = document.createElement('div');
  el.className = 'score-toast';
  el.textContent = text;
  el.style.color = text.startsWith('+') ? 'var(--green)' : 'var(--red)';
  parent.appendChild(el);
  setTimeout(() => el.remove(), 600);
}

// ============================= ROUND END =============================
function endRound() {
  clearInterval(G.timerInterval);

  const ranked = G.players
    .map((name, i) => ({ name, score: G.scores[i] }))
    .sort((a, b) => b.score - a.score);

  document.getElementById('end-name').textContent = ranked[0].name;
  document.getElementById('end-score-label').textContent = ranked[0].score + ' נקודות';

  const medals = ['🥇','🥈','🥉'];
  document.getElementById('podium').innerHTML = ranked.map((p, rank) => `
    <div class="podium-row ${rank === 0 ? 'first-place' : ''}">
      <span class="podium-rank">${medals[rank] || (rank + 1)}</span>
      <span class="podium-name">${escapeHtml(p.name)}</span>
      <span class="podium-score">${p.score}</span>
    </div>`).join('');

  launchConfetti();
  vibrate([200,100,200,100,400]);

  setHeader(true, helpBtn());
  showScreen('screen-end');
}

function playAgainSameSetup() {
  setHeader(true, helpBtn());
  showScreen('screen-ready');
}

// ============================= SCREEN / HEADER HELPERS =============================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function setHeader(visible, slotHtml = '') {
  document.getElementById('page-header').style.display = visible ? 'flex' : 'none';
  document.getElementById('header-slot').innerHTML = slotHtml;
  document.getElementById('home-help-btn').style.display = visible ? 'none' : 'flex';
}

function helpBtn() {
  return `<button class="header-btn" onclick="openInfo('rules')">
    <iconify-icon icon="mdi:help-circle-outline"></iconify-icon> כללים</button>`;
}

// ============================= CONFETTI =============================
function launchConfetti() {
  const area = document.getElementById('confetti-area');
  area.innerHTML = '';
  const colors = ['#14b8a6','#22c55e','#38bdf8','#facc15','#a855f7','#ec4899','#fff'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.cssText = [
      `left:${Math.random()*100}%`,
      `background:${colors[~~(Math.random()*colors.length)]}`,
      `width:${6+Math.random()*10}px`,
      `height:${6+Math.random()*10}px`,
      `border-radius:${Math.random()>.5?'50%':'2px'}`,
      `animation-duration:${2+Math.random()*3}s`,
      `animation-delay:${Math.random()*1.5}s`,
    ].join(';');
    area.appendChild(p);
  }
}

// ============================= UTILS =============================
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function vibrate(p) { try { navigator.vibrate && navigator.vibrate(p); } catch(e) {} }

// ============================= INFO SHEET =============================
const INFO_CONTENT = {
  rules: `
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:cellphone-nfc"></iconify-icon> מנחה אחד, טלפון אחד</h3>
      <p>המנחה/ה מחזיק/ה את הטלפון לאורך כל הסבב וקורא/ת את השאלות בקול. השחקנים לא נוגעים בטלפון בכלל.</p>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:emoticon-cool-outline"></iconify-icon> מהות המשחק</h3>
      <p>רק תשובות <strong>לא-נכונות</strong> זוכות בנקודה! התשובה צריכה להישאר <strong>באותו עולם תוכן</strong> של השאלה, אבל להיות שגויה. לדוגמה, לשאלה "איזה פרי הוא אדום?" — התשובה "בננה" היא חרטוט מעולה (זה פרי, אבל הוא לא אדום), ואילו "כיסא" היא לא מוצלחת (זה לא פרי בכלל).</p>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:play-circle-outline"></iconify-icon> מהלך הסבב</h3>
      <div class="rules-item">
        <span class="ri-icon"><iconify-icon icon="mdi:numeric-1-circle-outline"></iconify-icon></span>
        <span class="ri-text">המנחה/ה שואל/ת שאלה שמופיעה על המסך לשחקן/ית התור.</span>
      </div>
      <div class="rules-item">
        <span class="ri-icon"><iconify-icon icon="mdi:numeric-2-circle-outline"></iconify-icon></span>
        <span class="ri-text">השחקן/ית עונה <strong>בקול</strong> תשובה שגויה אך מתאימה לקטגוריה.</span>
      </div>
      <div class="rules-item">
        <span class="ri-icon"><iconify-icon icon="mdi:numeric-3-circle-outline"></iconify-icon></span>
        <span class="ri-text">המנחה/ה מחליט/ה בסוויפ או לחיצה — <strong>מתאים</strong> או <strong class="red">לא מתאים</strong> — והתור עובר לשחקן/ית הבא/ה.</span>
      </div>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:counter"></iconify-icon> ניקוד וניצחון</h3>
      <div class="rules-item"><span class="ri-icon"><iconify-icon icon="mdi:check-circle-outline" style="color:var(--accent)"></iconify-icon></span><span class="ri-text">חרטוט מוצלח — <strong>נקודה אחת</strong> לשחקן/ית.</span></div>
      <div class="rules-item"><span class="ri-icon"><iconify-icon icon="mdi:close-circle-outline" style="color:var(--red)"></iconify-icon></span><span class="ri-text">לא מתאים — בלי נקודה, וממשיכים הלאה.</span></div>
      <p>הסבב מסתיים כשנגמר הזמן או שהגעתם למספר השאלות המקסימלי — מי שצבר/ה הכי הרבה נקודות מנצח/ת!</p>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:school-outline"></iconify-icon> מצב חימום</h3>
      <p><strong>מצב חימום</strong> מפעיל שאלות קלות במיוחד בלי לחץ זמן — מושלם למתחילים ולמשחק עם ילדים.</p>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:brain"></iconify-icon> שאלות מאתגרות</h3>
      <p>אפשר להדליק <strong>כולל שאלות מאתגרות</strong> בהגדרות הנוספות — כל 5 שאלות שמקבל/ת אותו שחקן/ית תופיע שאלה קצת יותר מבלבלת (מסומנת בתג "מאתגר" על הקלף). לא פעיל במצב חימום.</p>
    </div>`,
  about: `
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:star-outline"></iconify-icon> משחקים נבחרים</h3>
      <div class="game-tiles">
        <a class="game-tile tile-imposter" href="https://loteman.github.io/Imposter/" target="_blank" rel="noopener">
          <span class="tile-emoji">🕵️</span>
          <span class="tile-name">המתחזה</span>
        </a>
        <a class="game-tile tile-alias" href="https://loteman.github.io/GuessWord/" target="_blank" rel="noopener">
          <span class="tile-emoji">🗣️</span>
          <span class="tile-name">נחש ת׳מילה</span>
        </a>
        <a class="game-tile tile-category" href="https://loteman.github.io/Categorys/" target="_blank" rel="noopener">
          <span class="tile-emoji">🏷️</span>
          <span class="tile-name">מה בקטגוריה?</span>
        </a>
        <a class="game-tile tile-hirtotim" href="https://loteman.github.io/Opposites/" target="_blank" rel="noopener">
          <span class="tile-emoji">🤥</span>
          <span class="tile-name">חירטוטים</span>
        </a>
      </div>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:view-grid-outline"></iconify-icon> לכל המשחקים</h3>
      <a class="about-link" href="https://loteman.github.io/Loteman-Games/#games" target="_blank" rel="noopener">
        <div>
          <div class="about-link-label"><iconify-icon icon="mdi:gamepad-variant-outline"></iconify-icon> כל המשחקים</div>
          <div class="about-link-sub">לרשימה המלאה — לחץ לביקור באתר</div>
        </div>
        <iconify-icon icon="mdi:open-in-new" style="font-size:1rem;color:var(--text-dim)"></iconify-icon>
      </a>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:information-outline"></iconify-icon> אודות</h3>
      <a class="about-link" href="https://loteman.github.io/Loteman-Games/" target="_blank" rel="noopener">
        <div>
          <div class="about-link-label"><iconify-icon icon="mdi:gamepad-variant-outline"></iconify-icon> Loteman Games</div>
          <div class="about-link-sub">למשחקים נוספים — לחץ לביקור באתר</div>
        </div>
        <iconify-icon icon="mdi:open-in-new" style="font-size:1rem;color:var(--text-dim)"></iconify-icon>
      </a>
      <div class="about-tm">חירטוטים © ${new Date().getFullYear()}<br>כל הזכויות שמורות ל-Loteman Games</div>
    </div>`
};

let _infoTab = 'rules';

function openInfo(type) {
  _infoTab = type || 'rules';
  document.getElementById('tab-rules').classList.toggle('active', _infoTab === 'rules');
  document.getElementById('tab-about').classList.toggle('active', _infoTab === 'about');
  document.getElementById('info-content').innerHTML = INFO_CONTENT[_infoTab];
  if (!document.getElementById('info-sheet').classList.contains('open')) {
    document.getElementById('info-backdrop').classList.add('open');
    document.getElementById('info-sheet').classList.add('open');
  }
}
function switchInfoTab(type) { openInfo(type); }
function closeInfo() {
  document.getElementById('info-backdrop').classList.remove('open');
  document.getElementById('info-sheet').classList.remove('open');
}
