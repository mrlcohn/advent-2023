const fs = require('fs')

fs.readFile('in.txt', (err, data) => {

  if (err) throw err

  const lines = data.toString().split('\n')
  const spelled = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ]

  let total = 0

  for (let line of lines) {

    let num = ''

    let found = false
    for (let i = 0; i < line.length; i++) {
      if (!found) {
        if (line[i] >= '0' && line[i] <= '9') {
          num += line[i]
          found = true
        } else {
          for (let spell of spelled) {
            if (line.indexOf(spell) == i) {
              num += spelled.indexOf(spell) + 1
              found = true
            }
          }
        }
      }
    }

    found = false
    for (let i = line.length - 1; i >= 0; i--) {
      if (!found) {
        if (line[i] >= '0' && line[i] <= '9') {
          num += line[i]
          found = true
        } else {
          for (let spell of spelled) {
            if (line.indexOf(spell, i) == i) {
              num += spelled.indexOf(spell) + 1
              found = true
            }
          }
        }
      }
    }
    
    total += Number(num)

  }

  console.log(total)

})