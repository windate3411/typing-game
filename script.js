// select DOM elements

const word = document.getElementById('word')
const text = document.getElementById('text')
const scroeEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const endgameEl = document.getElementById('end-game-container')
const settingBtn = document.getElementById('setting-btn')
const settingForm = document.getElementById('setting-form')
const setting = document.getElementById('setting')
const difficultySelect = document.getElementById('difficulty')

// list words

const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// init word
let randomWord

// init score and time
let score = 0
let time = 10

// init difficulty
let difficulty = localStorage.getItem('difficulty') === null ? 'medium' : localStorage.getItem('difficulty')

// set diffculty value
difficultySelect.value = localStorage.getItem('difficulty') === null ? 'medium' : localStorage.getItem('difficulty')

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

// focus text on start
text.focus()

// start counting down
const timeInterval = setInterval(updateTime, 1000)


// add word to the DOM
function addWord() {
  randomWord = getRandomWord()
  word.innerHTML = randomWord
}

// update score
function updateScore() {
  score++
  scroeEl.innerHTML = score
}

// update time
function updateTime() {
  time--
  timeEl.innerHTML = time + 's'

  if (time === 0) {
    clearInterval(timeInterval)

    // end game
    gameOver()
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `
  endgameEl.style.display = 'flex'
}

addWord()


// event listeners


// check if typing match
text.addEventListener('input', (e) => {
  const insertText = e.target.value
  if (insertText === randomWord) {
    addWord()
    updateScore()
    switch (difficulty) {
      case 'easy':
        time += 5
        break;
      case 'medium':
        time += 3
        break;
      case 'hard':
        time += 1
        break;
    }
    // time += 5
    updateTime()
    e.target.value = ''
  }
})

// Setting btn click
settingBtn.addEventListener('click', () => {
  setting.classList.toggle('hide')
})

// difficulty setting

settingForm.addEventListener('change', (e) => {
  difficulty = e.target.value
  localStorage.setItem('difficulty', difficulty)
})

