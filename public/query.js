let obj, item, itemAsString;

function fetchGame() {
    fetch('/object')
        .then(response => response.json())
        .then(data => {
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

document.getElementById('start').addEventListener('click', function(e) {
    fetchGame()
    document.getElementById('player-1').classList.remove('is-hidden')
    document.getElementById('intro').classList.add('is-hidden')
})
document.getElementById('again').addEventListener('click', function(e) {
    fetchGame()
    e.target.classList.add('is-hidden')
})
  
  
  document.getElementById('query-answer').addEventListener('input', function(e)  {
    document.getElementById('notification').textContent = ""
      try {
        if (eval('obj' + e.target.value) == item) {
              document.getElementById('result').textContent = JSON.stringify(eval('obj' + e.target.value), null, 4)
              document.getElementById('notification').textContent = "Great job!"
              document.getElementById('again').classList.remove('is-hidden')
              e.target.setAttribute('disabled', true)
          } else {
            document.getElementById('result').textContent = JSON.stringify(eval('obj' + e.target.value), null, 4)
          }
      } catch (error) {
        
      }
  })