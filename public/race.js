let counter = -1;
let exercises = []
let misses = 0;
let match = document.getElementById('match')

document.getElementById('player-one-test').addEventListener('input', function(e) {
  console.log(e.data)
  if (e.data == null) {
    document.getElementById('highlight').textContent = e.target.value
    return false;
  }
  let nextChar = match.textContent.slice(e.target.value.length - 1, e.target.value.length)
  if (e.data != nextChar) {
    if (document.getElementById('hard-mode').checked) {
      e.target.value = ""
    } else {
      e.target.value = e.target.value.slice(0,e.target.value.length - 1)
    }
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
    // document.getElementById('player-one-status').textContent = "You finished typing!"
    document.getElementById('start').removeAttribute('disabled')
    document.getElementById('random').classList.remove('is-hidden')
    clearInterval(intervalId)
  } else {
    document.getElementById('match').textContent = exercises[counter];
    // document.getElementById('player-one-status').textContent = "You are typing exercise " + (counter + 1) + " of " + exercises.length
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

document.getElementById('start').addEventListener('click', resetGame)

function resetGame(e) {
  e.target.setAttribute('disabled', true)
  document.getElementById('player-one-test').removeAttribute('disabled')
  document.getElementById('player-two-test').value = ""
  // document.getElementById('player-one-status').textContent = ""
  // document.getElementById('player-two-status').textContent = ""
  i = 0
  opponentCounter = 0
  counter = -1
  misses = 0
  document.getElementById('misses').textContent = misses + " mis-types";
  exercises = []
  startNewGame()
}

function initializeGame() {
  document.getElementById('player-1').classList.remove('is-hidden')
  document.getElementById('player-2').classList.remove('is-hidden')
  setTimeout(() => {
    intervalId = setInterval(() => {
      let input = document.getElementById('player-two-test')
      // document.getElementById('player-two-status').textContent = "Your opponent is typing exercise " + (opponentCounter + 1) + " of " + exercises.length
      if (opponentCounter == exercises.length) {
        document.getElementById('player-one-test').setAttribute('disabled', true)
        document.getElementById('match').textContent = "Game over! You lost!"
        // document.getElementById('player-two-status').textContent = "Your opponent finished typing first!"
        document.getElementById('start').removeAttribute('disabled')
        document.getElementById('random').classList.remove('is-hidden')
        clearInterval(intervalId)
      } else if (input.value == exercises[opponentCounter]) {
        i = 0;
        opponentCounter += 1;
        // document.getElementById('player-two-status').textContent = "Your opponent is typing exercise " + (opponentCounter + 1) + " of " + exercises.length
      } else {
        input.value = exercises[opponentCounter].slice(0, i + 1)
        i += 1;  
      }
    }, 400)  
  }, 3000)
  updateExercise(counter)
}