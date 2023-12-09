const fs = require('fs')

fs.readFile('in.txt', (err, data) => {

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
    const balls = [0, 0, 0]

    for (let game of games) {

      const red = reds.test(game) && Number(game.match(reds)[1])
      const green = greens.test(game) && Number(game.match(greens)[1])
      const blue = blues.test(game) && Number(game.match(blues)[1])

      if (red && red > balls[0]) balls[0] = red
      if (green && green > balls[1]) balls[1] = green
      if (blue && blue > balls[2]) balls[2] = blue

    }

    winningIds.push(balls)
    
  }
  
  console.log(winningIds.reduce((acc, cur) => cur.reduce((a, c) => a * c, 1) + acc, 0))

})