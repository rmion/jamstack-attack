require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
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
app.use(express.static(path.join(__dirname, 'public')))

app.post('/new', (req, res) => {
  let challenge = challenges[Math.floor(Math.random() * challenges.length)]
  pusher.trigger("my-channel", "my-event", {
    id: req.body.id,
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
  pusher.trigger("my-channel", "my-event", {
    id: req.body.id,
    challenge: req.body.challenge,
    instructions: req.body.instructions,
    teammate: false,
    submission: null,
    solved: null,
  });
  res.send('Game is ready to solve!')
})

app.post('/joined', (req, res) => {
  pusher.trigger("my-channel", "my-event", {
    id: req.body.id,
    challenge: req.body.challenge,
    instructions: req.body.instructions,
    teammate: true,
    submission: null,
    solved: null,
  });
  res.send('Player 2 has entered!')
})

app.post('/solved', (req, res) => {
  var solved = req.body.challenge.trim().replace(/\s/g,'') == req.body.submission.trim().replace(/\s/g,'') ? true : false;
  pusher.trigger("my-channel", "my-event", {
    id: req.body.id,
    challenge: req.body.challenge,
    submission: req.body.submission,
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