let props;

function newSize() {
  props = {
    "margin-top": r(75),
    "margin-right": r(75),
    "margin-bottom": r(75),
    "margin-left": r(75),
    "padding-top": r(50),
    "padding-right": r(50),
    "padding-bottom": r(50),
    "padding-left": r(50),
    "border-top-width": r(25),
    "border-right-width": r(25),
    "border-bottom-width": r(25),
    "border-left-width": r(25)
  }
  for (let prop in props) {
    document.getElementById('control').style[css(prop)] = props[prop] + "px"
  }
}

document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault()
  document.querySelectorAll('input').forEach(i => {
    if (i.value == props[i.id]) {
      i.classList.add('correct')
    }
    i.value = props[i.id]
  })
  addAgainBtn()
})

function r(max) {
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
    newSize()
    document.getElementById('game').removeChild(document.getElementById('again'))
    document.querySelectorAll('input').forEach((i) => {
      i.value = 0
      i.classList.remove('correct')
    })
  }

  document.getElementById('start').addEventListener('click', function() {
    newSize()
    document.getElementById('player-1').classList.remove('is-hidden')
    document.getElementById('intro').classList.add('is-hidden')
  })