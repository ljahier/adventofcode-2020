const fs = require('fs')

let myArr = fs.readFileSync("./passwords.txt", "utf-8").split('\n')
let count = 0

myArr.forEach(elem => {
    let tmp = elem.split(' ')
    let countLetter = 0
    let min = tmp[0].split('-')[0]
    let max = tmp[0].split('-')[1]

    for (let i of tmp[2]) {
        if (i === tmp[1].slice(0, 1)) {
            countLetter++
        }
    }
    if (countLetter >= parseInt(min) && countLetter <= parseInt(max)) {
        count++
    }
})

console.log(`First part of answer is: ${count}`)

count = 0
myArr.forEach(elem => {
    let tmp = elem.split(' ')
    let min = tmp[0].split('-')[0] - 1
    let max = tmp[0].split('-')[1] - 1
    let str = tmp[2]
    let char = tmp[1].slice(0, 1)

    if (str[min] === char && str[max] !== char || str[min] !== char && str[max] === char) { // 
        count++
    }
})

console.log(`Second part of answer is: ${count}`)