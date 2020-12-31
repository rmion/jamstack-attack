require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const path = require('path');
const Pusher = require("pusher");
const challenges = require('./challenges.js')
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

app.post('/new', (req, res) => {
  let challenge = challenges[Math.floor(Math.random() * challenges.length)]
  pusher.trigger("presence-quickstart", "mini-game", {
    id: req.body.id,
    creatorID: req.body.userid,
    challenge: challenge.code,
    topic: challenge.topic,
    instructions: null,
    teammate: false,
    submission: null,
    solved: null,
  });
  res.send('New game is ready to play!')
})

app.post('/described', (req, res) => {
  pusher.trigger("presence-quickstart", "mini-game", {
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
  pusher.trigger("presence-quickstart", "mini-game", {
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
  var solved = req.body.challenge.trim().replace(/\s/g,'') == req.body.submission.trim().replace(/\s/g,'') ? true : false;
  pusher.trigger("presence-quickstart", "mini-game", {
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
  console.log(`Example app listening at http://localhost:${port}`)
})