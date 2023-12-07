const fs = require('fs')

fs.readFile('src/day_2/in.txt', (err, data) => {

  if (err) throw err

  const lines = data.toString().split('\n')

  const gameIds = /Game (\d+)/
  const reds = /(\d+) red/
  const greens = /(\d+) green/
  const blues = /(\d+) blue/

  const winningIds = []

  for (let line of lines) {

    const gameId = line.match(gameIds)[1]
  
    const games = line.substring(line.indexOf(':') + 1).split(';')
    let tooMany = false

    for (let game of games) {

      const red = reds.test(game) && game.match(reds)[1]
      const green = greens.test(game) && game.match(greens)[1]
      const blue = blues.test(game) && game.match(blues)[1]

      if (red > 12 || green > 13 || blue > 14) tooMany = true

    }

    if (!tooMany) winningIds.push(Number(gameId))
    
  }
  
  console.log(winningIds.reduce((acc, cur) => acc + cur, 0))

})