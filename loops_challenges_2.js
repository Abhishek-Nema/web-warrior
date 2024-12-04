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
