// q1
let sum = 0
let i = 1

while (i <= 5) {
    sum = sum + i
    i++
}
console.log(sum);

// q2
let countdown = []
let lastNum = 5

while (lastNum >= 1) {
    countdown.push(lastNum);
    lastNum--
}
console.log(countdown);

// q3
/*
let teaCollection = []
let userInp;

do {
    userInp = prompt("Enter your fav. tea, (Enter 'stop' for exit)")
    if (userInp != "stop") {
        teaCollection.push(userInp)
    }
} while (userInp != "stop")
*/

// q4

let total = 0
let firstNum = 0

do {
    total = total + firstNum
    firstNum++
} while (firstNum <= 3)

console.log(total);

// q5
let tableArr = [2, 4, 6]
let multipliedNumbers = []

for (let index = 0; index < tableArr.length; index++) {
    let res = tableArr[index] * 2
    multipliedNumbers.push(res)
}
console.log(multipliedNumbers);

// q6

let cityList = []
let cityArray = ["Paris", "New York", "Tokyo", "London"]

for (let index = 0; index < cityArray.length; index++) {
    let elm = cityArray[index]
    cityList.unshift(elm)
}
console.log(cityList);

