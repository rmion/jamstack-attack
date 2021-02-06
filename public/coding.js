let gameMode;

function fetchGame() {
    fetch('/valid')
        .then(response => response.json())
        .then(data => {
            gameMode = data.lang
            document.getElementById('submission').value = data.challenge
            document.querySelectorAll('.mode').forEach(el => el.textContent = data.lang.toUpperCase())
            $('#notification').text("")
            $('#validate').attr('disabled', false)        
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

$('#validate').on('click', function(e) {
    $('#notification').text("")
    let content;
      // emulate form post
      var formData = new FormData();
      formData.append('out', 'json');

      if (gameMode === "css") {
        formData.append('css', 'yes');
        content = document.getElementById('submission').value
        formData.append('content', content)
        validateHTMLOrCSS(formData)
      } else if (gameMode === "html") {
        formData.append('parser', 'html5')
        content = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Jamstack Attack!</title>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            </head>
            <body>
                <div>${document.getElementById('submission').value}</div>
            </body>
            </html>
        `
        formData.append('content', content)
        validateHTMLOrCSS(formData)
      } else if (gameMode === "js") {
        fetch('/coding', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "code": document.getElementById('submission').value
            })
          })
          .then(response => response.json())
          .then(data => {
            if (!data.hasOwnProperty('errors')) {
                $('#notification').text("It's valid! You win!")
                $('#validate').attr('disabled', true)
                document.getElementById('again').classList.remove('is-hidden')
            } else {
                $('#notification').text(`Sorry, that code has at least ${data.errors.length} error${data.errors.length > 1 ? "s" : ""}!`)
                console.log(data.errors); // data.messages is an array
            }
          })
          .catch(err => {
              console.error(err)
          })
      } else if (gameMode === "json") {
          try {
            let result = JSON.parse(document.getElementById('submission').value)
            if (typeof result === "object") {
                $('#notification').text("It's valid! You win!")
                $('#validate').attr('disabled', true)
                document.getElementById('again').classList.remove('is-hidden')
            }
          } catch(error) {
            $('#notification').text(`Sorry, that code still has at least one error!`)
            console.warn(error);
          }
      }
})

function validateHTMLOrCSS(formData) {
    // make ajax call
    $.ajax({
        url: "https://validator.w3.org/nu/",
        data: formData,
        dataType: "json",
        type: "POST",
        processData: false,
        contentType: false,
        success: function(data) {
            if (data.messages.length == 0) {
                $('#notification').text("It's valid! Great job!")
                $('#validate').attr('disabled', true)
                document.getElementById('again').classList.remove('is-hidden')
            } else {
                $('#notification').text(`Sorry, that code still has at least ${data.messages.length} error${data.messages.length > 1 ? "s" : ""}!`)
            }
            console.log(data.messages); // data.messages is an array
        },
        error: function() {
            console.warn(arguments);
        }
    });  
}