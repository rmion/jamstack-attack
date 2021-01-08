var games = [];
var currentGame = null;
Pusher.logToConsole = true
const pusher = new Pusher('a0a317b210ac3be6457d', {
  cluster: 'mt1',
  forceTLS: true,
  authEndpoint: "/pusher/auth"
});
if (!document.cookie.match('(^|;) ?user_id=([^;]*)(;|$)')) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
  let initial1 = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase()
  let initial2 = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase()
  document.cookie = 'user_id=' + initial1 + initial2;
}
const channel = pusher.subscribe('presence-quickstart');
const hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
function addMemberToUserList(memberId) {
  userEl = document.createElement("li");
  userEl.id = "user_"+memberId;
  userEl.innerText = memberId;
  userEl.style.backgroundColor = 'hsl('+hashCode(memberId)%360+',70%,60%)';
  document.getElementById("user_list").appendChild(userEl);
  if (channel.members.count > 1) {
    document.getElementById('player-count-zero').style.display = "none"
  } else if (channel.members.count <= 1) {
    document.getElementById('player-count-zero').style.display = "block"
  }
}
channel.bind('pusher:subscription_succeeded', () => 
  channel.members.each(member => addMemberToUserList(member.id)));
channel.bind('pusher:member_added', member => addMemberToUserList(member.id));
channel.bind('pusher:member_removed', member => {
  const userEl = document.getElementById("user_"+member.id);
  userEl.parentNode.removeChild(userEl);
  if (channel.members.count <= 1) {
    document.getElementById('player-count-zero').style.display = "block"
  }
});

channel.bind('mini-game', function(data) {
  // Fill in all details about recently created game
  if (games.find(el => el.id == data.id)) {
    let game = games.findIndex(el => el.id == data.id)
    games[game] = {
      ...games[game],
      ...data
    }
    // Present the challenge to the game creator
    if (games[game].creator == true && games[game].challenge !== null && games[game].solved == null) {
      console.log("In first IF")
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
        document.getElementById(`game-${currentGame.id}`).textContent = `${currentGame.joinerID} was summoned to play`
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
            <h4>${currentGame.joinerID}'s submission</h4>
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
            <h4>${currentGame.joinerID}'s submission</h4>
            <pre><code>${currentGame.submission}</code></pre>
          </details>
        `
      }
    }
  } else {
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
          document.getElementById('game').classList.remove('is-hidden')
          document.getElementById('player-1').classList.add('is-hidden')
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
      document.getElementById('game').classList.remove('is-hidden')
      document.getElementById('player-1').classList.remove('is-hidden')
      document.getElementById('player-2').classList.add('is-hidden')
      let li = document.createElement('li')
      li.setAttribute('id', `game-${timestamp}`)
      li.textContent = "You started a game!"
      document.getElementById('games-started').appendChild(li)
    })
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
      document.getElementById('game').classList.add('is-hidden')
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
        document.getElementById('game').classList.add('is-hidden')
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