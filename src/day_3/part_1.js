const fs = require('fs')

fs.readFile('in.txt', (err, data) => {

  if (err) throw err

  const lines = data.toString().split('\n')
  const toAdd = []
  
  for (let i = 0; i < lines.length; i++) {
    
    const line = lines[i]
    const nums = line.matchAll(/\d+/g)

    for (let num of nums) {

      const val = String(num[0])

      // if first row, do not go back
      // if first row, endRow = startRow + 2, else + 3 unless at end
      // if first col, do not go back
      // if first col, endCol = num.length + 1, else startCol + num.length + 3
      const startRow = i == 0 ? 0 : i - 1,
            endRow = i == 0 ? startRow + 2 : startRow + 2 < lines.length ? startRow + 3 : lines.length,
            startCol = num.index == 0 ? 0 : num.index - 1,
            endCol = num.index == 0 ? val.length + 1 : startCol + val.length + 1 < line.length ? startCol + val.length + 2 : line.length

      let symbol = false
      for (let j = startRow; j < endRow; j++) if (lines[j].substring(startCol, endCol).match(/[^.\d]/)) symbol = true

      if (symbol) toAdd.push(Number(num[0]))

    }

  }

  console.log(toAdd.reduce((acc, cur) => acc + cur, 0))

})