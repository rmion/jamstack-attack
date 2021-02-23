  let currentLevel = 0;
  let level = document.getElementById('level')
  let prop = document.getElementById('prop')
  let val = document.getElementById('val')
  let boxsr = document.getElementById('boxsr')
  let boxjr = document.getElementById('boxjr')
  let levels, test;
  let stuckIter = 0;
  
  function fetchGame(e) {
    document.getElementById('side-by-side').removeChild(document.getElementById('boxsr'))
    boxsr = document.createElement('div')
    boxsr.id = "boxsr"
    boxsrspan = document.createElement('span')
    boxsrspan.textContent = "#BOXSR"
    boxsr.appendChild(boxsrspan)
    // boxsr.removeChild(boxjr)
    boxjr = document.createElement('div')
    boxjr.id = "boxjr"
    boxjr.textContent = "#BOXJR"
    boxsr.appendChild(boxjr);
    document.getElementById('side-by-side').insertBefore(boxsr, document.getElementById('rule'));
    // document.getElementById('side-by-side').appendChild(boxsr);
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
            level.textContent = "Level " + (currentLevel + 1) + " of " + levels.length + ":\n" + levels[currentLevel].task
            data.setup.forEach(i => {
                document.getElementById(i.el).style[i.property] = i.value
                if (i.el == data.target) {
                  let dd = document.createElement('dd')
                  dd.textContent = `${i.property}: ${i.value};`
                  rule.appendChild(dd)  
                }
            })
            stuckIter = 0;
            [...document.querySelectorAll('.target')].forEach(el => {
              el.textContent = "#" + test.el.toUpperCase()
            })
            document.getElementById('stuck').removeAttribute('disabled')
            document.getElementById('solution').textContent = ""    
            e.target.setAttribute('disabled', true)
            document.getElementById('player-1').classList.remove('is-hidden')
        })
}

  document.getElementById('start').addEventListener('click', fetchGame)

  document.getElementById('stuck').addEventListener('click', function(e) {
    stuckIter += 1;
    if (stuckIter == (test.property + ": " + test.value + ";").length) {
      e.target.setAttribute('disabled', true)
      stuckIter = 0;
    } else {
      document.getElementById('solution').textContent = (test.property + ": " + test.value + ";").slice(0, stuckIter)
    }  
  })

  document.getElementById('solve').addEventListener('click', function(e) {
      if (prop.value == levels[currentLevel].test.property && val.value == levels[currentLevel].test.value) {
        document.getElementById(levels[currentLevel].test.el).style[css(prop.value)] = val.value
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
            document.getElementById('random').classList.remove('is-hidden')
            level.textContent = "Level complete!";
            [...document.getElementById('declaration').children].forEach(i => {
              i.setAttribute('disabled', true)
            })
            stuckIter = 0;
            document.getElementById('stuck').setAttribute('disabled', true)
            document.getElementById('solution').textContent = ""
        } else {
            level.textContent = "Level " + (currentLevel + 1) + " of " + levels.length + ": " + levels[currentLevel].task
            test = levels[currentLevel].test
            stuckIter = 0;
            document.getElementById('stuck').removeAttribute('disabled')
            document.getElementById('solution').textContent = ""    
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