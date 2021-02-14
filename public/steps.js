  let currentLevel = 0;
  let level = document.getElementById('level')
  let prop = document.getElementById('prop')
  let val = document.getElementById('val')
  let boxsr = document.getElementById('boxsr')
  let boxjr = document.getElementById('boxjr')
  let levels, test;
  
  function fetchGame(e) {
    boxsr.removeChild(boxjr)
    boxjr = document.createElement('div')
    boxjr.id = "boxjr"
    boxjr.textContent = "#BOXJR"
    boxsr.appendChild(boxjr);
    [...document.querySelectorAll('dd')].forEach(i => {
        document.getElementById('rule').removeChild(i)
    });
    [...document.getElementById('declaration').children].forEach(i => {
      i.removeAttribute('disabled')
    })
        
    currentLevel = 0
    fetch('/steps')
        .then(response => response.json())
        .then(data => {
            levels = data.steps
            test = levels[currentLevel].test
            level.textContent = "Level " + (currentLevel + 1) + " of " + levels.length + ": " + levels[currentLevel].task
            data.setup.forEach(i => {
                boxjr.style[i.property] = i.value
                let dd = document.createElement('dd')
                dd.textContent = `${i.property}: ${i.value};`
                rule.appendChild(dd)
            })
            e.target.setAttribute('disabled', true)
            document.getElementById('player-1').classList.remove('is-hidden')
        })
}

  document.getElementById('start').addEventListener('click', fetchGame)  

  document.getElementById('solve').addEventListener('click', function(e) {
      if (prop.value == test.property && val.value == test.value) {
        boxjr.style[css(prop.value)] = val.value
        let lineItem = [...document.querySelectorAll('dd')].find(el => el.textContent.indexOf(prop.value) == 0)
        if (lineItem) {
            lineItem.textContent = `${prop.value}: ${val.value};`
            lineItem.style.color = "yellow"
        } else {
          let dd = document.createElement('dd')
          dd.textContent = prop.value + ": " + val.value + ";"
          dd.style.color = "yellow"
          rule.appendChild(dd)
        }
        prop.classList.remove('wrong')
        val.classList.remove('wrong')
        prop.value = ""
        val.value = ""
        prop.focus()
        currentLevel += 1
        if (currentLevel == levels.length) {
            document.getElementById('start').removeAttribute('disabled')
            level.textContent = "Level complete!";
            [...document.getElementById('declaration').children].forEach(i => {
              i.setAttribute('disabled', true)
            })
        } else {
            level.textContent = "Level " + (currentLevel + 1) + " of " + levels.length + ": " + levels[currentLevel].task
            test = levels[currentLevel].test    
        }
      } else {
        if (prop.value != test.property) {
            prop.value = ""
            prop.classList.add('wrong')
        }
        if (val.value != test.value) {
            val.value = ""
            val.classList.add('wrong')
        }
      }
  });
  
  function css(str) {
    let prop = str.split('-')
    if (prop.length == 1) {
      return str
    }
    for (let i = 1; i < prop.length; i++) {
      prop[i] = prop[i].charAt(0).toUpperCase() + prop[i].slice(1)
    }
    prop = prop.join('')
    return prop
  }