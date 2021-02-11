let obj, item, itemAsString, clues, answer;

function fetchGame(e) {
    fetch('/object')
        .then(response => response.json())
        .then(data => {
          document.getElementById('requirements').innerHTML = ""
            e.target.setAttribute('disabled', true)
            document.getElementById('player-1').classList.remove('is-hidden')
            obj = data.blob
            itemAsString = JSON.stringify(data.blob, null, 4)
            item = data.item
            clues = data.methods
            answer = data.code
            if (clues.length) {
              document.getElementById('requirements').textContent = "Try using: "
              clues.forEach(clue => {
                let span = document.createElement('span')
                span.innerHTML = `
                  <input type="checkbox" id="${clue}" />
                  <a target="_blank" href='https://developer.mozilla.org/en-US/search?q=${clue}'>${clue}</a>
                `
                document.getElementById('requirements').appendChild(span)
              })  
            }
            document.getElementById('challenge').textContent = "const obj = " + itemAsString
            document.getElementById('result').textContent = ""
            document.getElementById('expectation').textContent = item
            document.getElementById('notification').textContent = ""
            document.getElementById('solution').textContent = ""
            document.getElementById('query-answer').removeAttribute('disabled')
            document.getElementById('query-answer').value = ""
            document.getElementById('result').textContent = ""
        })
}

document.getElementById('start').addEventListener('click', fetchGame)  
  
  document.getElementById('query-answer').addEventListener('input', function(e)  {
    document.getElementById('notification').textContent = ""
    if (clues.length) {
      clues.forEach(clue => {
        if (e.target.value.indexOf(clue) > 0) {
          document.getElementById(clue).setAttribute('checked', true)
        } else {
          document.getElementById(clue).removeAttribute('checked')
        }
      })  
    }
      try {
        if (eval('obj' + e.target.value) == item) {
              document.getElementById('result').textContent = JSON.stringify(Function('"use strict";return (obj' + e.target.value + ')')(), null, 4)
              document.getElementById('notification').textContent = "Great job! Let's compare answers!"
              document.getElementById('solution').textContent = "> obj" + answer
              e.target.setAttribute('disabled', true)
              document.getElementById('start').removeAttribute('disabled')
          } else {
            document.getElementById('result').textContent = JSON.stringify(Function('"use strict";return (obj' + e.target.value + ')')(), null, 4)
          }
      } catch (error) {
        
      }
  })