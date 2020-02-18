// select DOM elements

const word = document.getElementById('word')
const text = document.getElementById('text')
const scroeEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const endgameEl = document.getElementById('end-game')
const settingBtn = document.getElementById('setting-btn')
const settingForm = document.getElementById('setting-form')
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

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

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

addWord()


// event listeners

text.addEventListener('input', (e) => {
  const insertText = e.target.value
  if (insertText === randomWord) {
    addWord()
    updateScore()
    e.target.value = ''
  }
})