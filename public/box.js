function rndm(max) {
    return Math.floor(Math.random() * max)
  }
  function css(str) {
    let prop = str.split('-')
    for (let i = 1; i < prop.length; i++) {
      prop[i] = prop[i].charAt(0).toUpperCase() + prop[i].slice(1)
    }
    prop = prop.join('')
    return prop
  }
  function changeDummy(e) {
    document.getElementById('variable').style[css(e.target.id)] = e.target.value + "px"
    if (e.target.value + "px" == document.getElementById('control').style[css(e.target.id)]) {
      e.target.classList.add('correct')
    } else {
      e.target.classList.remove('correct')
    }
    let count = document.querySelectorAll('.correct').length
    if (count == 12) {
        document.querySelector('#player-1 h2').textContent = "Great job!"
        addAgainBtn()
    } else if (count !== 12) {
        document.querySelector('#player-1 h2').textContent = "Make both boxes overlap!"
    }
  }
  function addAgainBtn() {
    let button = document.createElement('button')
    button.textContent = "Play again!"
    button.id = "again"
    button.addEventListener('click', () => {
      resetGame()
    })
    document.getElementById('game').appendChild(button)
  }
  
  function resetGame() {
    document.getElementById('game').removeChild(document.getElementById('again'))
    document.querySelectorAll('input').forEach((i) => {
      let randomValue = rndm(50)
      document.getElementById('control').style[css(i.id)] = randomValue + "px"
      i.value = 0
      i.classList.remove('correct')
    })
    document.getElementById('variable').style = ""
  }
  
  document.querySelectorAll('input').forEach((i) => {
    let randomValue = rndm(50)
    document.getElementById('control').style[css(i.id)] = randomValue + "px"
    i.addEventListener('input', changeDummy)
  })

  document.getElementById('start').addEventListener('click', function() {
    document.getElementById('player-1').classList.remove('is-hidden')
    document.getElementById('intro').classList.add('is-hidden')
  
  })