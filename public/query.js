let obj, item, itemAsString;

function fetchGame(e) {
    fetch('/object')
        .then(response => response.json())
        .then(data => {
            e.target.setAttribute('disabled', true)
            document.getElementById('player-1').classList.remove('is-hidden')
            obj = data.blob
            itemAsString = JSON.stringify(data.blob, null, 4)
            item = data.item
            document.getElementById('challenge').textContent = "const obj = " + itemAsString
            document.getElementById('result').textContent = ""
            document.getElementById('expectation').textContent = item
            document.getElementById('notification').textContent = ""
            document.getElementById('query-answer').removeAttribute('disabled')
            document.getElementById('query-answer').value = ""
            document.getElementById('result').textContent = ""
        })
}

document.getElementById('start').addEventListener('click', fetchGame)  
  
  document.getElementById('query-answer').addEventListener('input', function(e)  {
    document.getElementById('notification').textContent = ""
      try {
        if (eval('obj' + e.target.value) == item) {
              document.getElementById('result').textContent = JSON.stringify(Function('"use strict";return (obj' + e.target.value + ')')(), null, 4)
              document.getElementById('notification').textContent = "Great job!"
              e.target.setAttribute('disabled', true)
              document.getElementById('start').removeAttribute('disabled')
          } else {
            document.getElementById('result').textContent = JSON.stringify(Function('"use strict";return (obj' + e.target.value + ')')(), null, 4)
          }
      } catch (error) {
        
      }
  })