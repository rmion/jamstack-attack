let solution;

document.getElementById('start').addEventListener('click', newGame)

function newGame(e) {
    fetch('/readwrite')
        .then(response => response.json())
        .then(data => {
            e.target.setAttribute('disabled', true)
            document.getElementById('solve').removeAttribute('disabled')
            document.getElementById('submission').classList = ""
            document.getElementById('submission').value = ""
            document.getElementById('solution').textContent = "The correct answer will be revealed after you guess!"
            setTheStage(data)
        })
}

function setTheStage(data) {
    const {topic, code, instructions} = data
    solution = code
    document.getElementById('player-1').classList.remove('is-hidden')
    document.getElementById('player-two-prompt').textContent = instructions
    document.querySelectorAll('.topic').forEach(el => el.textContent = topic.toUpperCase())

}

function compareAnswers(e) {
    e.target.setAttribute('disabled', true)
    const player = document.getElementById('submission')
    if (player.value.trim().replace(/\s/g,'') == solution.trim().replace(/\s/g,'')) {
        player.classList.add('fixed')
        document.getElementById('notification').textContent = "You won!"
        document.getElementById('solution').textContent = "Solution: " + solution
    } else {
        player.classList.add('wrong')
        document.getElementById('notification').textContent = "Sorry, you lost."
        document.getElementById('solution').textContent = "Solution: " + solution
    }
    document.getElementById('start').removeAttribute('disabled')
    document.getElementById('random').classList.remove('is-hidden')
}

document.getElementById('solve').addEventListener('click', compareAnswers)
