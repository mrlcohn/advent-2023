const fs = require('fs')

fs.readFile('in.txt', (err, data) => {

  if (err) throw err

  const lines = data.toString()
                    .split('\n')
                    .map((line) => line.split(/:\s+/)[1])
                    .map((line) => line.split(' | '))
                    .map((line) => line.map(game => game.split(/[ ]+/)))

  const points = []

  for (let line of lines) {

    let win = 0
    for (let num of line[1]) if (line[0].includes(num)) win++

    if (win > 0) points.push(parseInt(Math.pow(2, win - 1)))
    console.log(win)

  }

  console.log(points.length)

  console.log(points.reduce((acc, cur) => acc + cur, 0))

})