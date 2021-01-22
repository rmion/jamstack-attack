let props;
let randomKeyNames = ["margin-top","padding-bottom","border-left-width"]

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

function addInputs() {
  if (document.forms[0].children.length > 1) {
    document.forms[0].removeChild(document.getElementById('prop-0'))
    document.forms[0].removeChild(document.getElementById('prop-1'))
    document.forms[0].removeChild(document.getElementById('prop-2'))
  }
  
  let rando
  console.log(randomKeyNames)
  randomKeyNames.forEach((key, index) => {
    rando = Object.keys(props)[Math.floor(Math.random() * Object.keys(props).length)]
    while (randomKeyNames.includes(rando) == true) {
      console.log("Inside while")
      rando = Object.keys(props)[Math.floor(Math.random() * Object.keys(props).length)]
    }
    randomKeyNames[index] = rando
    let label = document.createElement('label')
    label.setAttribute('for', rando)
    label.textContent = rando
    let input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('min', "0")
    input.setAttribute('id', rando)
    let span = document.createElement('span')
    span.textContent = "px"
    let p = document.createElement('p')
    p.setAttribute('id', 'prop-' + index)
    p.appendChild(label)
    p.appendChild(input)
    p.appendChild(span)
    document.forms[0].insertBefore(p, document.getElementById('guess'))
  })
  console.log(randomKeyNames)
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
    addInputs()
    document.getElementById('game').removeChild(document.getElementById('again'))
  }

  document.getElementById('start').addEventListener('click', function() {
    newSize()
    addInputs()
    document.getElementById('player-1').classList.remove('is-hidden')
    document.getElementById('intro').classList.add('is-hidden')
  })