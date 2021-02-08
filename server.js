require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const JSHINT = require('jshint').JSHINT
const path = require('path');
const Pusher = require("pusher");
const pairingchallenges = require('./pairing.js')
const typingChallenges = require('./typing.js')
const debuggingChallenges = require('./debugging.js')
const sortingChallenges = require('./sorting.js')
const invalidChallenges = require('./valid.js')
const queryingChallenges = require('./querying.js')
const app = express()
const port = process.env.PORT || 5000

const pusher = new Pusher({
  appId: "1120717",
  key: "a0a317b210ac3be6457d",
  secret: process.env.PUSHER_KEY,
  cluster: "mt1",
  useTLS: true
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

app.post("/pusher/auth", (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;

  // Primitive auth: the client self-identifies. In your production app, 
  // the client should provide a proof of identity, like a session cookie.
  const user_id = req.cookies.user_id;

  const presenceData = { user_id };
  const auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

app.get('/readwrite', (req, res) => {
  res.send(    
    JSON.stringify(
      pairingchallenges[Math.floor(Math.random() * pairingchallenges.length)]
    )
  )
})

app.post('/coding', (req, res) => {
  JSHINT(req.body.code)
  res.send(
    JSON.stringify(
      JSHINT.data()
    )
  )
})

app.get('/object', (req, res) => {
  res.send(    
    JSON.stringify(
      queryingChallenges[Math.floor(Math.random() * queryingChallenges.length)]
    )
  )
})

app.get('/valid', (req, res) => {
  let lang = Object.keys(invalidChallenges)[Math.floor(Math.random() * Object.keys(invalidChallenges).length)]
  let challenge = invalidChallenges[lang][Math.floor(Math.random() * invalidChallenges[lang].length)]
  res.send({
    "lang": lang,
    "challenge": challenge
  })
})

app.get('/sort', (req, res) => {
  res.send(
    JSON.stringify(
      sortingChallenges[Math.floor(Math.random() * sortingChallenges.length)]
    )
  )
})

app.get('/debug', (req, res) => {
  res.send(
    JSON.stringify(
      debuggingChallenges[Math.floor(Math.random() * debuggingChallenges.length)]
    )
  )
})

app.get('/race', (req, res) => {
  let challenges = []
  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      challenges.push(typingChallenges[Math.floor(Math.random() * typingChallenges.length)])
    } else {
      let ch = typingChallenges[Math.floor(Math.random() * typingChallenges.length)]
      while (challenges.includes(ch) == true) {
        ch = typingChallenges[Math.floor(Math.random() * typingChallenges.length)]
      }
      challenges.push(ch)
    }
  }
  res.send(JSON.stringify({
    "challenges": challenges
  }))
})

app.post('/new', (req, res) => {
  let challenge = pairingchallenges[Math.floor(Math.random() * pairingchallenges.length)]
  if (req.body.singlePlayer) {
    pusher.trigger("presence-jamstackattack", "mini-game", {
      id: req.body.id,
      creatorID: "AI",
      challenge: challenge.code,
      topic: challenge.topic,
      instructions: challenge.instructions,
      joinerID: req.body.userid,
      teammate: true,
      submission: null,
      solved: null,
    });  
  } else {
    pusher.trigger("presence-jamstackattack", "mini-game", {
      id: req.body.id,
      creatorID: req.body.userid,
      challenge: challenge.code,
      topic: challenge.topic,
      instructions: null,
      teammate: false,
      submission: null,
      solved: null,
    });  
  }
  res.send('New game is ready to play!')
})

app.post('/described', (req, res) => {
  pusher.trigger("presence-jamstackattack", "mini-game", {
    id: req.body.id,
    creatorID: req.body.userid,
    challenge: req.body.challenge,
    instructions: req.body.instructions,
    teammate: false,
    submission: null,
    solved: null,
  });
  res.send('Game is ready to solve!')
})

app.post('/joined', (req, res) => {
  pusher.trigger("presence-jamstackattack", "mini-game", {
    id: req.body.id,
    creatorID: req.body.creatorID,
    challenge: req.body.challenge,
    instructions: req.body.instructions,
    teammate: true,
    joinerID: req.body.joinerid,
    submission: null,
    solved: null,
  });
  res.send('Player 2 has entered!')
})

app.post('/solved', (req, res) => {
  let solved;
  if (req.body.topic == 'css') {
    // Normalize spaces and quotation marks
    solved = req.body.challenge.trim().replace(/\s/g,'') == req.body.submission.trim().replace(/\s/g,'').replace(/\"/g, "'") ? true : false;
  } else {
    // Normalize spaces, quotation marks and semicolons
    solved = req.body.challenge.trim().replace(/\s/g,'') == req.body.submission.trim().replace(/\s/g,'').replace(/\"/g, "'").replace(/;/g,"") ? true : false;
  }
  pusher.trigger("presence-jamstackattack", "mini-game", {
    id: req.body.id,
    creatorID: req.body.creatorID,
    challenge: req.body.challenge,
    submission: req.body.submission,
    joinerID: req.body.joinerID,
    solved: solved,
  });
  if (solved) {
    res.send('You won!')
  } else {
    res.send('You lost!')
  }
  
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})