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
    clearInterval(intervalId)
  } else {
    document.getElementById('match').textContent = exercises[counter];
  }
  document.getElementById('highlight').textContent = ""
  document.getElementById('player-one-test').value = ""
}

let i = 0;
let opponentCounter = 0;
let opponentExercise = exercises[opponentCounter]
let intervalId

document.getElementById('start').addEventListener('click', function(e) {
  fetch('/race')
    .then(response => response.json())
    .then(data => {
      exercises = data.challenges
      initializeGame()
    })
})

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