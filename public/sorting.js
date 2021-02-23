$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
  
  let solution;  
  
  $('#check').on('click', function() {
    let result = []
    $('#sortable li').each((i,el) => result.push(el.textContent.trim()))
    $('#sortable li').each((i,el) => {
      el.classList.remove('correct', 'wrong')
      if (el.textContent.trim() == solution[i]) {
        el.classList.add('correct')
      } else {
        el.classList.add('wrong')
      }
    })
    if(JSON.stringify(result) == JSON.stringify(solution)) {
      document.getElementById('check').setAttribute('disabled', true)
      document.getElementById('notification').textContent = "Great job!"
      document.getElementById('start').removeAttribute('disabled')
      document.getElementById('random').classList.remove('is-hidden')
    } else {
      document.getElementById('notification').textContent = "Sorry, not quite. Keep trying!"
    }
  })

  function newGame(e) {
    $('#sortable').empty()
    document.getElementById('notification').textContent = ""
    fetch('/sort')
        .then(response => response.json())
        .then(data => {
            e.target.setAttribute('disabled', true)
            setTheStage(data)
        })
    }

function setTheStage(data) {
    solution = data
    let challenge = Array.from(solution).sort((a,b) => b.length - a.length)
  
    challenge.forEach(el => {
      $('#sortable').append(`
        <li class="ui-state-default">
          ${el.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
            return '&#'+i.charCodeAt(0)+';'; 
          })}
        </li>`)
    })
    document.getElementById('check').removeAttribute('disabled')
    document.getElementById('player-1').classList.remove('is-hidden')
}

document.getElementById('start').addEventListener('click', newGame)
