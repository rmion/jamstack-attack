var games = [];
var currentGame = null;
channel.bind('mini-game', function(data) {
  // Fill in all details about recently created game
  if (games.find(el => el.id == data.id)) {
    let game = games.findIndex(el => el.id == data.id)
    games[game] = {
      ...games[game],
      ...data
    }
    if (games[game].singlePlayer && games[game].creatorID === "AI" && games[game].submission == null) {
      currentGame = games[games.length - 1]
      document.getElementById('player-two-prompt').textContent = currentGame.instructions
      document.getElementById('player-two-prompt').classList.add(currentGame.topic)
      document.querySelectorAll('.topic').forEach(el => {
        el.textContent = currentGame.topic.toUpperCase()
      })
      document.getElementById(`game-${currentGame.id}`).textContent = `AI sent you instructions`
    }
    // Present the challenge to the game creator
    if (games[game].creator == true && games[game].challenge !== null && games[game].solved == null) {
      document.getElementById('player-one-prompt').textContent = games[game].challenge
      document.getElementById('player-one-prompt').classList = ""
      document.getElementById('player-one-prompt').classList.add(games[game].topic)
      document.querySelectorAll('.topic').forEach(el => {
        el.textContent = games[game].topic.toUpperCase()
      })
      currentGame = games[game]
    } 
    // Enable 'Join' button if game has instructions
    if (games[game].creator == false && games[game].teammate == false && games[game].instructions !== null) {
      currentGame = games[game]
      document.getElementById(`join-${currentGame.id}`).removeAttribute('disabled')
    }
    // Notify game creator that another player joined their game
    if (games[game].creator == true && games[game].teammate == true && games[game].submission == null) {
        currentGame = games[game]
        document.getElementById(`game-${currentGame.id}`).textContent = `${currentGame.joinerID == channel.members.myID ? "You were" : currentGame.joinerID} summoned to play`
    }
    if (games[game].creator == false && games[game].teammate == true && !games[game].hasOwnProperty("participated") && games[game].submission == null) {
      currentGame = games[game]
      document.getElementById(`games-joined`).removeChild(document.getElementById(`game-${currentGame.id}`))
    }
    // Once game is solved, notify both players and delete 'join' button for all players
    if (games[game].submission !== null && (games[game].creator == true || games[game].participated == true)) {
      currentGame = games[game]
      currentGame.challenge = currentGame.challenge.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#'+i.charCodeAt(0)+';'; 
      });
      currentGame.submission = currentGame.submission.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#'+i.charCodeAt(0)+';'; 
      });
      document.getElementById('instructions').value = ''
      document.getElementById('submission').value = ''
      if (games[game].solved) {
        document.getElementById(`game-${currentGame.id}`).innerHTML = `
          <p>Nice, you won together!</p>
          <details>
            <summary>Review the code</summary>
            <h4>${currentGame.creatorID}'s code</h4>
            <pre><code>${currentGame.challenge}</code></pre>
            <h4>What ${currentGame.joinerID == channel.members.myID ? "you" : currentGame.joinerID} submitted</h4>
            <pre><code>${currentGame.submission}</code></pre>
          </details>
        `
      } else {
        document.getElementById(`game-${currentGame.id}`).innerHTML = `
          <p>Sorry, you lost together!</p>
          <details>
            <summary>Review the code</summary>
            <h4>${currentGame.creatorID}'s code</h4>
            <pre><code>${currentGame.challenge}</code></pre>
            <h4>What ${currentGame.joinerID == channel.members.myID ? "you" : currentGame.joinerID} submitted</h4>
            <pre><code>${currentGame.submission}</code></pre>
          </details>
        `
      }
    }
  } else {
    if (data.creatorID === "AI") return false;
    games.push({
      ...data,
      creator: false
    })
    let li = document.createElement('li')
    li.setAttribute('id', `game-${games[games.length - 1].id}`)
    li.innerHTML = `
      <p>${games[games.length - 1].creatorID} started a game</p>
    `
    let button = document.createElement('button')
    button.textContent = `Join`
    button.setAttribute('id', `join-${games[games.length - 1].id}`)
    button.setAttribute('disabled', true)
    button.addEventListener('click', (e) => {
      document.getElementById('submission').value = ""
      Array.from(document.getElementsByTagName('button')).forEach(el => el.setAttribute('disabled', true))
      document.getElementById('solve').removeAttribute('disabled')    
      let joinedGame = games[games.findIndex(el => el.id == e.target.id.split('-')[1])]
      currentGame = joinedGame
      fetch('/joined', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...joinedGame,
            "joinerid": channel.members.me.id
          })
        })
        .then(response => {
          joinedGame.participated = true
          document.getElementById('player-two-prompt').textContent = joinedGame.instructions
          document.getElementById('player-two-prompt').classList.add(joinedGame.topic)
          document.querySelectorAll('.topic').forEach(el => {
            el.textContent = joinedGame.topic.toUpperCase()
          })
          document.getElementById('solve').setAttribute('disabled', true)
          document.getElementById('intro').classList.add('is-hidden')
          document.getElementById('player-2').classList.remove('is-hidden')
          document.getElementById(`game-${joinedGame.id}`).textContent = `You joined ${joinedGame.creatorID}'s game`
        })
    })
    li.appendChild(button)
    document.getElementById('games-joined').appendChild(li)
  }
});
function newGame(event, topic) {
  document.getElementById('instructions').value = ''
  Array.from(document.getElementsByTagName('button')).forEach(el => el.setAttribute('disabled', true))
  document.getElementById('share').removeAttribute('disabled')
  let timestamp = new Date().getTime()
  if (channel.members.count <= 1) {
    fetch('/new', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: timestamp,
          userid: channel.members.me.id,
          singlePlayer: true
        })
    })
    .then(response => {
      games.push({
        id: timestamp,
        creator: true,
        singlePlayer: true
      })
      document.getElementById('share').setAttribute('disabled', true)
      document.getElementById('intro').classList.add('is-hidden')
      document.getElementById('player-1').classList.add('is-hidden')
      document.getElementById('player-2').classList.remove('is-hidden')
      let li = document.createElement('li')
      li.setAttribute('id', `game-${timestamp}`)
      li.textContent = "You started a game!"
      document.getElementById('games-started').appendChild(li)
    })
  } else {
    fetch('/new', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: timestamp,
          userid: channel.members.me.id
        })
    })
    .then(response => {
      games.push({
        id: timestamp,
        creator: true
      })
      document.getElementById('share').setAttribute('disabled', true)
      document.getElementById('intro').classList.add('is-hidden')
      document.getElementById('player-1').classList.remove('is-hidden')
      document.getElementById('player-2').classList.add('is-hidden')
      let li = document.createElement('li')
      li.setAttribute('id', `game-${timestamp}`)
      li.textContent = "You started a game!"
      document.getElementById('games-started').appendChild(li)
    })
  }
}
document.getElementById('start').addEventListener('click', newGame)
document.getElementById('share').addEventListener('click', (e) => {
  Array.from(document.getElementsByTagName('button')).forEach(el => el.removeAttribute('disabled'))
  fetch('/described', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": currentGame.id,
        "userid": channel.members.me.id,
        "challenge": currentGame.challenge,
        "instructions": document.getElementById('instructions').value
      })
    })
    .then(response => {
      document.getElementById('intro').classList.remove('is-hidden')
      document.getElementById('player-1').classList.add('is-hidden')
      document.getElementById(`game-${currentGame.id}`).textContent = "Awaiting a teammate"
    })
})
document.getElementById('solve').addEventListener('click', (e) => {
  Array.from(document.getElementsByTagName('button')).forEach(el => el.removeAttribute('disabled'))
  fetch('/solved', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...games[games.findIndex(el => el.id == currentGame.id)],
        "submission": document.getElementById('submission').value,
      })
    })
    .then(response => {
        document.getElementById('player-two-prompt').textContent = ""
        document.getElementById('player-two-prompt').classList.remove(games[games.findIndex(el => el.id == currentGame.id)].topic)
        document.getElementById('submission').value = ""
        document.getElementById('intro').classList.remove('is-hidden')
        document.getElementById('player-1').classList.add('is-hidden')
        document.getElementById('player-2').classList.add('is-hidden')
      })
})
document.getElementById('instructions').addEventListener('input', (e) => {
  if (e.target.value.trim() == document.getElementById('player-one-prompt').textContent) {
    document.getElementById('share').setAttribute('disabled', true)
  } else if (e.target.value == '') {
    document.getElementById('share').setAttribute('disabled', true)
  } else if (e.target.value != '') {
    document.getElementById('share').removeAttribute('disabled')
  }
})
document.getElementById('submission').addEventListener('input', (e) => {
  if (e.target.value != '') {
    document.getElementById('solve').removeAttribute('disabled')
  } else if (e.target.value == '') {
    document.getElementById('solve').setAttribute('disabled', true)
  }
})