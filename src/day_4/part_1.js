const fs = require('fs')

fs.readFile('in.txt', (err, data) => {

  if (err) throw err

  const lines = data.toString()
                    .split('\n')
                    .forEach((line) => line.split(': '))
                    .forEach((line) => line.split(' | '))

  const winningIds = []
  
  // console.log(winningIds.reduce((acc, cur) => acc + cur, 0))
  console.log(lines)

})