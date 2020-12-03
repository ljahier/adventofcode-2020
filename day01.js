const fs = require('fs')

let myArr = fs.readFileSync('./list.txt', 'utf-8').split('\n')

function firstPart() {
    let res = []

    for (let val1 of myArr) {
        for (let val2 of myArr) {
            // console.log(val1)
            // console.log(val2)
            if (parseInt(val1) + parseInt(val2) === 2020) {
                res.push(val1)
                res.push(val2)
                return res
            }
        }
    }
}
let first_part_res = firstPart()

console.log(`first part answer is : ${first_part_res[0] * first_part_res[1]}`)

function secondPart() {
    let res = []

    for (let val1 of myArr) {
        for (let val2 of myArr) {
            for (let val3 of myArr) {
                if (parseInt(val1) + parseInt(val2) + parseInt(val3) === 2020) {
                    res.push(val1)
                    res.push(val2)
                    res.push(val3)
                    return res
                }
            }
        }
    }
}

let second_part_res = secondPart()

console.log(`second part answer is : ${second_part_res[0] * second_part_res[1] * second_part_res[2]}`)