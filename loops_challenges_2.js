// q1
let selectedTeas = []
let teaArray = ["green tea", "black tea", "chai", "oolong tea"]
for (let index = 0; index < teaArray.length; index++) {
    if (teaArray[index] == "chai") {
        break
    }
    selectedTeas.push(teaArray[index])
}
console.log(selectedTeas);

// q2
let visitedCities = []
let cityArray = ["London", "New York", "Paris", "Berlin"]
for (let i = 0; i < cityArray.length; i++) {
    if (cityArray[i] === "Paris") {
        continue
    }
    visitedCities.push(cityArray[i])
}
console.log(visitedCities);

// q3
let numArr = [1, 2, 3, 4, 5]
let smallNumbers = []
for (const element of numArr) {
    if (element == 4) {
        break
    }
    smallNumbers.push(element)
}
console.log(smallNumbers);

// q4
let arrayOfTeas = ["chai", "green tea", "herbal tea", "black tea"]
let preferredTeas = []

for (const tea of arrayOfTeas) {
    if (tea === "herbal tea") {
        continue
    }
    preferredTeas.push(tea)
}
console.log(preferredTeas);

// q5
let cityPopulation = {}

let citiesPopulation = {
    "London": 890000,
    "New York": 840000,
    "Paris": 220000,
    "Berlin": 350000
}

// q6

let worldCities = {
    "Sydney" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 3500000,
    "Paris" : 2200000
}
let largeCities = {}

for (const city in worldCities) {
    if(worldCities[city]<3000000){
        continue
    }
    largeCities[city] = worldCities[city]
}
console.log(largeCities);

// q7
let arrTeas = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []

// q8
let cities = ["Berlin", "Tokyo", "Sydney", "Paris"]
let travelledCities = []

cities.forEach(function(elm) {
    if(elm==="Sydney"){
        return;
    }
    travelledCities.push(elm)
});
console.log(travelledCities);

// q9
let arrayOfNumbers = [2, 5, 7, 9]
let doubledNumbers = []

for (let index = 0; index < arrayOfNumbers.length; index++) {
    if(arrayOfNumbers[index]===7){
        continue
    }
    let multipliedAns = arrayOfNumbers[index] * 2
    doubledNumbers.push(multipliedAns)
}
console.log(doubledNumbers);

// q10
let varitiesOfTeas = ["chai", "green tea","black tea", "jasmine tea", "herbal tea"]
let shortTeas = []

for (const teaName of varitiesOfTeas) {
    if(teaName.length > 10) {
        break
    }
    shortTeas.push(teaName)
}
console.log(shortTeas);



