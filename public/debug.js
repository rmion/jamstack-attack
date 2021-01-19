var game, hint;

function newGame() {
    fetch('/debug')
        .then(response => response.json())
        .then(data => {
            setTheStage(data)
        })
}

function setTheStage(response) {
    game = response
    hint = 0
    document.getElementById('notification').textContent = ""
    document.getElementById('challenge').classList.remove('fixed')
    document.getElementById('check').removeAttribute('disabled')
    document.getElementById('next-hint').removeAttribute('disabled')
    document.getElementById('replay').classList.add('is-hidden')
    document.getElementById('intro').classList.add('is-hidden')
    document.getElementById('player-1').classList.remove('is-hidden')
    document.getElementById('challenge').value = game.code
    document.getElementById('difficulty').textContent = game.difficulty
    document.getElementById('language').textContent = game.language.toUpperCase()
    document.getElementById('expectation').textContent = game.test
}

function answerMatchesSolution() {
    return document.getElementById('challenge').value.trim().replace(/\s/g,'') === game.answer.trim().replace(/\s/g,'');
}

document.getElementById('start').addEventListener('click', newGame)

document.getElementById('check').addEventListener('click', function(e) {
    if (answerMatchesSolution()) {
        document.getElementById('notification').textContent = "Great job! You fixed it!"
        document.getElementById('challenge').classList.add('fixed')
        e.target.setAttribute('disabled', true)
        document.getElementById('next-hint').setAttribute('disabled', true)
        document.getElementById('replay').classList.remove('is-hidden')
    } else {
        document.getElementById('challenge').value = game.code
        document.getElementById('notification').textContent = "No, sorry. Need a hint?"
    }
})

document.getElementById('next-hint').addEventListener('click', function(e) {
    if (hint < game.hints.length) {
        document.getElementById('notification').textContent = `Hint ${hint + 1} of ${game.hints.length}: ${game.hints[hint++]}`
    } else {
        document.getElementById('notification').textContent = "No hints left. The fixed code is now shown."
        document.getElementById('challenge').classList.add('fixed')
        document.getElementById('challenge').value = game.answer
        e.target.setAttribute('disabled', true)
        document.getElementById('check').setAttribute('disabled', true)
        document.getElementById('replay').classList.remove('is-hidden')
    }
})

document.getElementById('replay').addEventListener('click', newGame)

