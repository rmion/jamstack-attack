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
      document.getElementById('check').classList.add('is-hidden')
      document.getElementById('replay').classList.remove('is-hidden')
      document.getElementById('notification').textContent = "Great job!"
    } else {
      document.getElementById('notification').textContent = "Sorry, not quite. Keep trying!"
    }
  })

  $('#replay').on('click', function() {
    document.getElementById('check').classList.remove('is-hidden')
    document.getElementById('replay').classList.add('is-hidden')
    newGame()
  })

  function newGame() {
    $('#sortable').empty()
    document.getElementById('notification').textContent = ""
    fetch('/sort')
        .then(response => response.json())
        .then(data => {
            setTheStage(data)
        })
    }

function setTheStage(data) {
    solution = data
    let challenge = Array.from(solution).sort((a,b) => b.length - a.length)
  
    challenge.forEach(el => {
      $('#sortable').append(`
        <li class="ui-state-default">
        <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>
          ${el.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
            return '&#'+i.charCodeAt(0)+';'; 
          })}
        </li>`)
    })
    document.getElementById('intro').classList.add('is-hidden')
    document.getElementById('player-1').classList.remove('is-hidden')

}

document.getElementById('start').addEventListener('click', newGame)
