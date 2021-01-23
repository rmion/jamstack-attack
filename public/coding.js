const modes = [
    "html",
    "css",
    "js"
]
function r() {
    return modes[Math.floor(Math.random() * modes.length)]
}
var gameMode;

document.getElementById('start').addEventListener('click', function() {
    gameMode = "html"
    document.querySelectorAll('.mode').forEach(el => el.textContent = gameMode.toUpperCase())
    document.getElementById('player-1').classList.remove('is-hidden')
    document.getElementById('intro').classList.add('is-hidden')
})

function newGame() {
    document.getElementById('submission').value = tokens[gameMode][Math.floor(Math.random() * tokens[gameMode].length)]
    document.getElementById('again').classList.add('is-hidden')
    $('#notification').text("")
    $('#validate').attr('disabled', false)
}

document.getElementById('again').addEventListener('click', newGame)
document.getElementById('start').addEventListener('click', newGame)

$('#validate').on('click', function(e) {
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
                $('#nofitication').text("It's valid! You win!")
                document.getElementById('again').classList.remove('is-hidden')
            } else {
                $('#notification').text("Sorry, that code was invalid!")
                console.log(data.errors); // data.messages is an array
            }
          })
          .catch(err => {
              console.error(err)
          })
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
                $('#notification').text("Sorry, that code was invalid!")
            }
            console.log(data.messages); // data.messages is an array
        },
        error: function() {
            console.warn(arguments);
        }
    });  
}