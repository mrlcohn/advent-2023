const fs = require('fs')

fs.readFile('in.txt', (err, data) => {

  if (err) throw err

  const lines = data.toString().split('\n')

  let total = 0

  for (let line of lines) {

    let num = ''

    for (let i = 0; i < line.length; i++) {
      if (line[i] >= '0' && line[i] <= '9') {
        num += line[i]
        break
      }
    }

    for (let i = line.length - 1; i >= 0; i--) {
      if (line[i] >= '0' && line[i] <= '9') {
        num += line[i]
        break
      }
    }
    
    total += Number(num)

  }

  console.log(total)

})