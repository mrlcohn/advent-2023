const fs = require('fs')

fs.readFile('in.txt', (err, data) => {

  if (err) throw err

  const lines = data.toString().split('\n')
  const toAdd = []
  const allGears = [] // [ gearRow, gearCol ]
  
  for (let i = 0; i < lines.length; i++) {
    
    const line = lines[i]
    const gears = line.matchAll(/[*]/g)

    for (let gear of gears) {

      const startRow = i == 0 ? 0 : i - 1,
            endRow = i == 0 ? startRow + 2 : startRow + 2 < lines.length ? startRow + 3 : lines.length,
            startCol = gear.index == 0 ? 0 : gear.index - 1,
            endCol = gear.index == 0 ? 2 : startCol + 2 < line.length ? startCol + 3 : line.length
      
      const numIndexes = []
      for (let j = startRow; j < endRow; j++) {
        
        const nums = lines[j].substring(startCol, endCol).matchAll(/[\d]+/g)
        
        for (let num of nums) numIndexes.push([j, startCol + num.index])

      }

      if (numIndexes.length == 2) {

        let total = 1
        
        for (let [numX, numY] of numIndexes) {

          const numLine = lines[numX]
          let num = numLine[numY]
          
          let temp = numY
          while (/\d/.test(numLine[--temp])) num = numLine[temp] + num

          temp = numY
          while (/\d/.test(numLine[++temp])) num = num + numLine[temp]
          if (numX == 126 && numY == 116) console.log(num)

          total *= Number(num)

        }

        toAdd.push(total)

      }

    }

  }

  console.log(toAdd.reduce((acc, cur) => acc + cur, 0))

})