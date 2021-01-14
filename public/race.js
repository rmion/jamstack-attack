let counter = -1;
let exercises = []
let misses = 0;
let match = document.getElementById('match')

document.getElementById('player-one-test').addEventListener('input', function(e) {
  if (e.data == null) {
    document.getElementById('highlight').textContent = e.target.value
    return false;
  }
  let nextChar = match.textContent.slice(e.target.value.length - 1, e.target.value.length)
  if (e.data != nextChar) {
    e.target.value = e.target.value.slice(0,e.target.value.length - 1)
    misses += 1;
    document.getElementById('misses').textContent = misses + " mis-types";
  } else if (e.target.value.length == match.textContent.length && e.data == match.textContent[match.textContent.length - 1]) {
    updateExercise()
  }
  document.getElementById('highlight').textContent = e.target.value

})

function updateExercise() {
  counter += 1;
  if (counter == exercises.length) {
    document.getElementById('player-one-test').setAttribute('disabled', true)
    document.getElementById('match').textContent = "Game over! You won!"
    addAgainBtn()
    clearInterval(intervalId)
  } else {
    document.getElementById('match').textContent = exercises[counter];
  }
  document.getElementById('highlight').textContent = ""
  document.getElementById('player-one-test').value = ""
}

let i = 0;
let opponentCounter = 0;
let intervalId

function startNewGame() {
  fetch('/race')
  .then(response => response.json())
  .then(data => {
    exercises = data.challenges
    initializeGame()
  })
}

document.getElementById('start').addEventListener('click', startNewGame)

function resetGame() {
  document.getElementById('game').removeChild(document.getElementById('again'))
  document.getElementById('player-one-test').removeAttribute('disabled')
  i = 0
  opponentCounter = 0
  counter = -1
  misses = 0
  exercises = []
  startNewGame()
}

function addAgainBtn() {
  let button = document.createElement('button')
  button.textContent = "Play again!"
  button.id = "again"
  button.addEventListener('click', () => {
    resetGame()
  })
  document.getElementById('game').appendChild(button)
}

function initializeGame() {
  document.getElementById('player-1').classList.remove('is-hidden')
  document.getElementById('player-2').classList.remove('is-hidden')
  document.getElementById('intro').classList.add('is-hidden')
  setTimeout(() => {
    intervalId = setInterval(() => {
      let input = document.getElementById('player-two-test')
      if (opponentCounter == exercises.length) {
        document.getElementById('player-one-test').setAttribute('disabled', true)
        document.getElementById('match').textContent = "Game over! You lost!"
        clearInterval(intervalId)
        addAgainBtn() 
      } else if (input.value == exercises[opponentCounter]) {
        i = 0;
        opponentCounter += 1;
      } else {
        input.value = exercises[opponentCounter].slice(0, i + 1)
        i += 1;  
      }
    }, 400)  
  }, 2000)
  updateExercise(counter)
}