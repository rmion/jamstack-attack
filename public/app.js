var games = [];
var currentGame = null;

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
}
channel.bind('pusher:subscription_succeeded', () => 
  channel.members.each(member => addMemberToUserList(member.id)));
channel.bind('pusher:member_added', member => addMemberToUserList(member.id));
channel.bind('pusher:member_removed', member => {
  const userEl = document.getElementById("user_"+member.id);
  userEl.parentNode.removeChild(userEl);
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
      document.getElementById('prompt').textContent = games[game].challenge
      document.getElementById('topic').textContent = games[game].topic.toUpperCase() + " "
      currentGame = games[game]
    } 
    // Show 'Join' button if game has instructions
    if (games[game].creator == false && games[game].teammate == false && games[game].instructions !== null) {
      currentGame = games[game]
      let button = document.createElement('button')
      button.textContent = `Join ${currentGame.creatorID}'s ${currentGame.topic.toUpperCase()} game`
      button.setAttribute('id', `join-${currentGame.id}`)
      button.addEventListener('click', (e) => {
        document.getElementById('submission').value = ""
        document.getElementById('start').setAttribute('disabled', 'disabled')
        Array.from(document.getElementById('join-buttons').children).forEach(el => el.setAttribute('disabled', 'disabled'))
        let joinedGame = games[games.findIndex(el => el.id == e.target.id.split('-')[1])]
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
            let li = document.createElement('li')
            li.setAttribute('id', `game-${joinedGame.id}`)
            li.textContent = "Game joined"
            document.getElementById('games-joined').appendChild(li)
            document.getElementById('prompt').textContent = joinedGame.instructions
            document.getElementById('topic').textContent = joinedGame.topic.toUpperCase() + " "
            document.getElementById('game').classList.remove('is-hidden')
            document.getElementById('player-1').classList.add('is-hidden')
            document.getElementById('player-2').classList.remove('is-hidden')
            document.getElementById(`game-${joinedGame.id}`).textContent = `You're attempting to solve ${currentGame.creatorID}'s game`
          })
      })
      document.getElementById('join-buttons').appendChild(button)
    }
    // Notify game creator that another player joined their game
    if (games[game].creator == true && games[game].teammate == true && games[game].submission == null) {
        currentGame = games[game]
        document.getElementById(`game-${currentGame.id}`).textContent = `${currentGame.joinerID} is attempting to solve`
    }
    if (games[game].creator == false && games[game].teammate == true && games[game].submission == null) {
      currentGame = games[game]
      document.getElementById(`join-buttons`).removeChild(document.getElementById(`join-${currentGame.id}`))
    }
    // Once game is solved, notify both players and delete 'join' button for all players
    if (games[game].submission !== null && (games[game].creator == true || games[game].participated == true)) {
      currentGame = games[game]
      if (currentGame.topic == 'html') {
        currentGame.challenge = currentGame.challenge.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
          return '&#'+i.charCodeAt(0)+';'; 
        });
        currentGame.submission = currentGame.submission.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
          return '&#'+i.charCodeAt(0)+';'; 
        });
      }
      document.getElementById('instructions').value = ''
      document.getElementById('submission').value = ''
      if (games[game].solved) {
        document.getElementById(`game-${currentGame.id}`).innerHTML = `
          <p>Nice! You and ${currentGame.joinerID} won!</p>
          <p>Original code: <pre><code>${currentGame.challenge}</code></pre></p>
          <p>${currentGame.joinerID}'s submission: <pre><code>${currentGame.submission}</code></pre></p>
        `
      } else {
        document.getElementById(`game-${currentGame.id}`).innerHTML = `
          <p>Sorry! You and ${currentGame.joinerID} lost!</p>
          <p>Original code: <pre><code>${currentGame.challenge}</code></pre></p>
          <p>${currentGame.joinerID}'s submission: <pre><code>${currentGame.submission}</code></pre></p>
        `
      }
    }
  } else {
    games.push({
      ...data,
      creator: false
    })
  }
});
function initializeApp() {
  document.getElementById('share').setAttribute('disabled', 'disabled')
  document.getElementById('solve').setAttribute('disabled', 'disabled')
}
function newGame(event, topic) {
  document.getElementById('instructions').value = ''
  document.getElementById('start').setAttribute('disabled', 'disabled')
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
      document.getElementById('game').classList.remove('is-hidden')
      document.getElementById('player-1').classList.remove('is-hidden')
      document.getElementById('player-2').classList.add('is-hidden')
      let li = document.createElement('li')
      li.setAttribute('id', `game-${timestamp}`)
      li.textContent = "Game created"
      document.getElementById('games-started').appendChild(li)
    })
}
document.getElementById('start').addEventListener('click', newGame)
document.getElementById('share').addEventListener('click', (e) => {
  document.getElementById('start').removeAttribute('disabled')
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
      document.getElementById('prompt').textContent = ""
      document.getElementById('game').classList.add('is-hidden')
      document.getElementById(`game-${currentGame.id}`).textContent = "Awaiting a teammate"
    })
})
document.getElementById('solve').addEventListener('click', (e) => {
  document.getElementById('start').removeAttribute('disabled')
  Array.from(document.getElementById('join-buttons').children).forEach(el => el.removeAttribute('disabled'))
  fetch('/solved', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...currentGame,
        "submission": document.getElementById('submission').value,
      })
    })
    .then(response => {
        document.getElementById('prompt').textContent = ""
        document.getElementById('submission').value = ""
        document.getElementById('game').classList.add('is-hidden')
    })
})
document.getElementById('instructions').addEventListener('input', (e) => {
  if (e.target.value != '') {
    document.getElementById('share').removeAttribute('disabled')
  } else if (e.target.value == '') {
    document.getElementById('share').setAttribute('disabled', 'disabled')
  }
})
document.getElementById('submission').addEventListener('input', (e) => {
  if (e.target.value != '') {
    document.getElementById('solve').removeAttribute('disabled')
  } else if (e.target.value == '') {
    document.getElementById('solve').setAttribute('disabled', 'disabled')
  }
})

initializeApp();