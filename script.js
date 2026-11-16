const questions = [
  {
    "question": "He writes a letter. বাক্যটির Passive Voice কোনটি?",
    "options": [
      "A letter is written by him.",
      "A letter was written by him."
    ],
    "answer": 0
  },
  {
    "question": "The work was done by Rahim. বাক্যটির Active Voice কোনটি?",
    "options": [
      "Rahim does the work.",
      "Rahim did the work."
    ],
    "answer": 1
  },
  {
    "question": "নিচের কোনটি Active Voice?",
    "options": [
      "She sings a song.",
      "A song is sung by her."
    ],
    "answer": 0
  },
  {
    "question": "The book is read by Karim. বাক্যটির Active Voice কোনটি?",
    "options": [
      "Karim reads the book.",
      "Karim read the book."
    ],
    "answer": 0
  },
  {
    "question": "They play football. বাক্যটির Passive Voice কোনটি?",
    "options": [
      "Football is played by them.",
      "Football was played by them."
    ],
    "answer": 0
  },
  {
    "question": "নিচের কোনটি Passive Voice?",
    "options": [
      "He helps the poor.",
      "The poor are helped by him."
    ],
    "answer": 1
  },
  {
    "question": "Mother cooked rice. বাক্যটির Passive Voice কোনটি?",
    "options": [
      "Rice is cooked by mother.",
      "Rice was cooked by mother."
    ],
    "answer": 1
  },
  {
    "question": "The letter was written by him. বাক্যটির Active Voice কোনটি?",
    "options": [
      "He writes the letter.",
      "He wrote the letter."
    ],
    "answer": 1
  },
  {
    "question": "নিচের কোনটি Active Voice?",
    "options": [
      "The door was opened by him.",
      "He opened the door."
    ],
    "answer": 1
  },
  {
    "question": "She is making a cake. বাক্যটির Passive Voice কোনটি?",
    "options": [
      "A cake is being made by her.",
      "A cake was being made by her."
    ],
    "answer": 0
  },
  {
    "question": "We should obey our teachers. বাক্যটির Passive Voice কোনটি?",
    "options": [
      "Our teachers should be obeyed by us.",
      "Our teachers are obeyed by us."
    ],
    "answer": 0
  },
  {
    "question": "নিচের কোনটি Passive Voice?",
    "options": [
      "They built a house.",
      "A house was built by them."
    ],
    "answer": 1
  },
  {
    "question": "He will buy a pen. বাক্যটির Passive Voice কোনটি?",
    "options": [
      "A pen will be bought by him.",
      "A pen is bought by him."
    ],
    "answer": 0
  },
  {
    "question": "The room is cleaned by Rina. বাক্যটির Active Voice কোনটি?",
    "options": [
      "Rina cleans the room.",
      "Rina cleaned the room."
    ],
    "answer": 0
  },
  {
    "question": "নিচের কোনটি Active Voice?",
    "options": [
      "The match was won by us.",
      "We won the match."
    ],
    "answer": 1
  },
  {
    "question": "The police caught the thief. বাক্যটির Passive Voice কোনটি?",
    "options": [
      "The thief is caught by the police.",
      "The thief was caught by the police."
    ],
    "answer": 1
  },
  {
    "question": "English is spoken by many people. বাক্যটির Active Voice কোনটি?",
    "options": [
      "Many people speak English.",
      "Many people spoke English."
    ],
    "answer": 0
  },
  {
    "question": "নিচের কোনটি Passive Voice?",
    "options": [
      "He teaches English.",
      "English is taught by him."
    ],
    "answer": 1
  },
  {
    "question": "They are watching TV. বাক্যটির Passive Voice কোনটি?",
    "options": [
      "TV is being watched by them.",
      "TV was watched by them."
    ],
    "answer": 0
  },
  {
    "question": "The work has been completed by him. বাক্যটির Active Voice কোনটি?",
    "options": [
      "He has completed the work.",
      "He completed the work."
    ],
    "answer": 0
  },
  {
    "question": "নিচের কোনটি Active Voice?",
    "options": [
      "The window was broken by the boy.",
      "The boy broke the window."
    ],
    "answer": 1
  },
  {
    "question": "He can solve the problem. বাক্যটির Passive Voice কোনটি?",
    "options": [
      "The problem can be solved by him.",
      "The problem could be solved by him."
    ],
    "answer": 0
  },
  {
    "question": "The national anthem is sung by us. বাক্যটির Active Voice কোনটি?",
    "options": [
      "We sing the national anthem.",
      "We sang the national anthem."
    ],
    "answer": 0
  },
  {
    "question": "নিচের কোনটি Passive Voice?",
    "options": [
      "She wrote a poem.",
      "A poem was written by her."
    ],
    "answer": 1
  },
  {
    "question": "The teacher praised the student. বাক্যটির Passive Voice কোনটি?",
    "options": [
      "The student is praised by the teacher.",
      "The student was praised by the teacher."
    ],
    "answer": 1
  },
  {
    "question": "A letter is being written by Mina. বাক্যটির Active Voice কোনটি?",
    "options": [
      "Mina is writing a letter.",
      "Mina was writing a letter."
    ],
    "answer": 0
  },
  {
    "question": "নিচের কোনটি Active Voice?",
    "options": [
      "The food is being prepared by mother.",
      "Mother is preparing the food."
    ],
    "answer": 1
  },
  {
    "question": "The song was sung by the girl. বাক্যটির Active Voice কোনটি?",
    "options": [
      "The girl sings the song.",
      "The girl sang the song."
    ],
    "answer": 1
  },
  {
    "question": "He has finished the work. বাক্যটির Passive Voice কোনটি?",
    "options": [
      "The work has been finished by him.",
      "The work had been finished by him."
    ],
    "answer": 0
  },
  {
    "question": "নিচের কোনটি Passive Voice?",
    "options": [
      "Rahim will open the door.",
      "The door will be opened by Rahim."
    ],
    "answer": 1
  }
];

const QUIZ_ID = 'voice-change-quiz-01'; // প্রতিটি নতুন Quiz-এর জন্য আলাদা ID দিতে হবে
const TIME_LIMIT_SECONDS = 20 * 60;
const STORAGE_KEY = `hm_quiz_attempts_${QUIZ_ID}`;

const questionContainer = document.getElementById('questions');
const quizForm = document.getElementById('quizForm');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const resultBox = document.getElementById('result');
const submitBtn = document.getElementById('submitBtn');
const countdownEl = document.getElementById('countdown');
const attemptNumberEl = document.getElementById('attemptNumber');
let submitted = false;
let timerInterval = null;
let startedAt = 0;
let deadline = 0;
let attemptNumber = 1;

const bnDigits = value => String(value).replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[Number(d)]);
const formatTime = seconds => `${String(Math.floor(seconds / 60)).padStart(2,'0')}:${String(seconds % 60).padStart(2,'0')}`;

function getAttemptCount() {
  try { return Number(localStorage.getItem(STORAGE_KEY) || 0); }
  catch (error) { return 0; }
}
function saveAttemptCount(value) {
  try { localStorage.setItem(STORAGE_KEY, String(value)); }
  catch (error) { /* Private browsing/storage restrictions: count lasts only for this page session. */ }
}

function renderQuestions() {
  questionContainer.innerHTML = '';
  questions.forEach((item, index) => {
    const section = document.createElement('section');
    section.className = 'question';
    section.id = `question-${index}`;
    const heading = document.createElement('h3');
    heading.textContent = `${bnDigits(index + 1)}. ${item.question}`;
    section.appendChild(heading);
    item.options.forEach((option, optionIndex) => {
      const label = document.createElement('label');
      label.className = 'option';
      const input = document.createElement('input');
      input.type = 'radio'; input.name = `q${index}`; input.value = optionIndex;
      input.addEventListener('change', updateProgress);
      const text = document.createElement('span');
      text.textContent = `${String.fromCharCode(65 + optionIndex)}. ${option}`;
      label.append(input, text); section.appendChild(label);
    });
    questionContainer.appendChild(section);
  });
}

function updateProgress() {
  if (submitted) return;
  const answered = questions.filter((_, i) => document.querySelector(`input[name="q${i}"]:checked`)).length;
  progressText.textContent = `${bnDigits(answered)} / ${bnDigits(questions.length)}`;
  progressBar.style.width = `${answered / questions.length * 100}%`;
}

function startTimer() {
  clearInterval(timerInterval);
  startedAt = Date.now();
  deadline = startedAt + TIME_LIMIT_SECONDS * 1000;
  countdownEl.textContent = '20:00';
  countdownEl.classList.remove('time-warning');
  timerInterval = setInterval(() => {
    const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    countdownEl.textContent = formatTime(remaining);
    countdownEl.classList.toggle('time-warning', remaining <= 60);
    if (remaining <= 0) submitQuiz(true);
  }, 250);
}

function submitQuiz(autoSubmitted = false) {
  if (submitted) return;
  submitted = true;
  clearInterval(timerInterval);
  const elapsedSeconds = Math.min(TIME_LIMIT_SECONDS, Math.max(0, Math.floor((Date.now() - startedAt) / 1000)));
  let score = 0;
  let answeredCount = 0;

  questions.forEach((item, index) => {
    const selectedInput = document.querySelector(`input[name="q${index}"]:checked`);
    const selected = selectedInput ? Number(selectedInput.value) : -1;
    if (selectedInput) answeredCount++;
    const section = document.getElementById(`question-${index}`);
    section.querySelectorAll('input').forEach(input => input.disabled = true);
    const labels = section.querySelectorAll('.option');
    labels[item.answer].classList.add('correct');
    const feedback = document.createElement('p');
    if (selected === item.answer) {
      score++;
      feedback.className = 'question-feedback right-text';
      feedback.textContent = '✓ সঠিক উত্তর';
    } else {
      if (selected >= 0) labels[selected].classList.add('wrong');
      feedback.className = 'question-feedback wrong-text';
      feedback.textContent = selected < 0
        ? `উত্তর দেওয়া হয়নি। সঠিক উত্তর: ${String.fromCharCode(65 + item.answer)}. ${item.options[item.answer]}`
        : `✗ ভুল উত্তর। সঠিক উত্তর: ${String.fromCharCode(65 + item.answer)}. ${item.options[item.answer]}`;
    }
    section.appendChild(feedback);
  });

  progressText.textContent = `${bnDigits(questions.length)} / ${bnDigits(questions.length)}`;
  progressBar.style.width = '100%';
  submitBtn.disabled = true;
  const percent = Math.round(score / questions.length * 100);
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  const durationText = `${bnDigits(minutes)} মিনিট ${bnDigits(seconds)} সেকেন্ড`;
  const message = score >= 27 ? 'অসাধারণ! খুব ভালো হয়েছে।' : score >= 21 ? 'ভালো হয়েছে! আরও অনুশীলন করো।' : score >= 15 ? 'মোটামুটি। নিয়মগুলো আবার পড়ো।' : 'আরও অনুশীলন প্রয়োজন।';
  resultBox.classList.remove('hidden');
  resultBox.innerHTML = `
    <h2>${bnDigits(score)} / ${bnDigits(questions.length)}</h2>
    <p><strong>তোমার প্রাপ্ত নম্বর</strong></p>
    <p>${bnDigits(percent)}% — ${message}</p>
    <div class="result-details">
      <p><strong>সময় লেগেছে:</strong> ${durationText}</p>
      <p><strong>Attempt Number:</strong> ${bnDigits(attemptNumber)}তম বার</p>
      <p><strong>উত্তর দিয়েছ:</strong> ${bnDigits(answeredCount)}টি</p>
      <p><strong>সঠিক উত্তর:</strong> ${bnDigits(score)}টি</p>
      <p><strong>ভুল/অনুত্তরিত:</strong> ${bnDigits(questions.length - score)}টি</p>
      ${autoSubmitted ? '<p class="auto-note">সময় শেষ হওয়ায় Quiz স্বয়ংক্রিয়ভাবে Submit হয়েছে।</p>' : ''}
    </div>
    <p class="result-message">আবার চেষ্টা করো এবং ৩০/৩০ অর্জন করো!</p>`;
  resultBox.scrollIntoView({behavior:'smooth', block:'center'});
}

quizForm.addEventListener('submit', event => {
  event.preventDefault();
  submitQuiz(false);
});

document.getElementById('resetBtn').addEventListener('click', () => {
  clearInterval(timerInterval);
  submitted = false;
  resultBox.classList.add('hidden');
  resultBox.innerHTML = '';
  submitBtn.disabled = false;
  attemptNumber = getAttemptCount() + 1;
  saveAttemptCount(attemptNumber);
  attemptNumberEl.textContent = bnDigits(attemptNumber);
  renderQuestions();
  updateProgress();
  startTimer();
  window.scrollTo({top:0, behavior:'smooth'});
});

attemptNumber = getAttemptCount() + 1;
saveAttemptCount(attemptNumber);
attemptNumberEl.textContent = bnDigits(attemptNumber);
renderQuestions();
updateProgress();
startTimer();
