var games = [];
var currentGame = null;

var pusher = new Pusher('a0a317b210ac3be6457d', {
  cluster: 'mt1'
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  // Fill in all details about recently created game
  if (games.find(el => el.id == data.id)) {
    let game = games.findIndex(el => el.id == data.id)
    games[game] = {
      ...games[game],
      ...data
    }
    // Present the challenge to the game creator
    if (games[game].creator == true && games[game].challenge !== null && games[game].solved == null) {
      document.getElementById('prompt').textContent = games[game].challenge
      document.getElementById('topic').textContent = games[game].topic.toUpperCase() + " "
      currentGame = games[game]
    } 
    // Show 'Join' button if game has instructions
    if (games[game].creator == false && games[game].teammate == false && games[game].instructions !== null) {
      currentGame = games[game]
      let button = document.createElement('button')
      button.textContent = `Join ${currentGame.topic} game ${currentGame.id}`
      button.setAttribute('id', `join-${currentGame.id}`)
      button.addEventListener('click', (e) => {
        fetch('/joined', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(currentGame)
          })
          .then(response => {
            let li = document.createElement('li')
            li.setAttribute('id', `game-${currentGame.id}`)
            li.textContent = "Game joined"
            document.getElementById('games-joined').appendChild(li)
            document.getElementById('join-buttons').removeChild(button)
            document.getElementById('prompt').textContent = currentGame.instructions
            document.getElementById('topic').textContent = currentGame.topic.toUpperCase() + " "
            document.getElementById('game').classList.remove('is-hidden')
            document.getElementById('player-1').classList.add('is-hidden')
            document.getElementById('player-2').classList.remove('is-hidden')
            document.getElementById(`game-${currentGame.id}`).textContent = "You're attempting to solve"
          })
      })
      document.getElementById('join-buttons').appendChild(button)
    }
    // Notify game creator that another player joined their game
    if (games[game].creator == true && games[game].teammate == true && games[game].submission == null) {
        currentGame = games[game]
        document.getElementById(`game-${currentGame.id}`).textContent = "Teammate is attempting to solve"
    }
    // Once game is solved, notify both players and delete 'join' button for all players
    if (games[game].submission !== null) {
      currentGame = games[game]
      document.getElementById('instructions').value = ''
      document.getElementById('submission').value = ''
      if (games[game].solved) {
          document.getElementById(`game-${currentGame.id}`).textContent = "Nice! You and your teammate won!"
      } else {
          document.getElementById(`game-${currentGame.id}`).textContent = "Sorry, You and your teammate lost!"
      }
    }
  } else {
    games.push({
      ...data,
      creator: false
    })
  }
});
function newGame(event, topic) {
  document.getElementById('start-buttons').classList.add('is-hidden')
  let timestamp = new Date().getTime()
  fetch('/new', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: timestamp,
          topic: topic
        })
    })
    .then(response => {
      games.push({
        id: timestamp,
        creator: true
      })
      document.getElementById('game').classList.remove('is-hidden')
      document.getElementById('player-1').classList.remove('is-hidden')
      document.getElementById('player-2').classList.add('is-hidden')
      let li = document.createElement('li')
      li.setAttribute('id', `game-${timestamp}`)
      li.textContent = "Game created"
      document.getElementById('games-started').appendChild(li)
    })
}
document.getElementById('start-js').addEventListener('click', (e) => {
  newGame(e, 'js')
})
document.getElementById('start-css').addEventListener('click', (e) => {
  newGame(e, 'css')
})
document.getElementById('start-html').addEventListener('click', (e) => {
  newGame(e, 'html')
})
document.getElementById('share').addEventListener('click', (e) => {
  fetch('/described', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": currentGame.id,
        "challenge": currentGame.challenge,
        "instructions": document.getElementById('instructions').value
      })
    })
    .then(response => {
      document.getElementById('start-buttons').classList.remove('is-hidden')
      document.getElementById('prompt').textContent = ""
      document.getElementById('game').classList.add('is-hidden')
      document.getElementById(`game-${currentGame.id}`).textContent = "Awaiting a teammate"
    })
})
document.getElementById('solve').addEventListener('click', (e) => {
  fetch('/solved', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": currentGame.id,
        "challenge": currentGame.challenge,
        "submission": document.getElementById('submission').value,
      })
    })
    .then(response => {
        document.getElementById('prompt').textContent = ""
        document.getElementById('submission').value = ""
        document.getElementById('game').classList.add('is-hidden')
    })
})