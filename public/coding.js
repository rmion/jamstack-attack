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
    
    let li = document.createElement('li')
    li.textContent = tokens[gameMode].snips[3]
    li.addEventListener('click', function(e) {
        document.getElementById('submission').value += e.target.textContent
    })
    document.getElementById('hand').appendChild(li)
  })

$('#validate').on('click', function(e) {
    e.target.setAttribute('disabled', true)
    let content;
    // let content = "h1 { color: red }"
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
                $('#validate').text("It's valid! You win!")
            } else {
                $('#validate').text("Sorry, that code was invalid!")
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
                $('#validate').text("It's valid! You win!")
            } else {
                $('#validate').text("Sorry, that code was invalid!")
            }
            console.log(data.messages); // data.messages is an array
        },
        error: function() {
            console.warn(arguments);
        }
    });  
}