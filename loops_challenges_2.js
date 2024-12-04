// q1
let selectedTeas = []
let teaArray = ["green tea", "black tea", "chai", "oolong tea"]
for (let index = 0; index < teaArray.length; index++) {
    if(teaArray[index]=="chai"){
        break
    }
    selectedTeas.push(teaArray[index])
}
console.log(selectedTeas);

// q2
let visitedCities = []
let cityArray = ["London", "New York", "Paris", "Berlin"]
for(let i=0; i < cityArray.length; i++){
    if (cityArray[i]==="Paris"){
        continue
    }
    visitedCities.push(cityArray[i])
}
console.log(visitedCities);

// q3
let numArr = [1, 2, 3, 4, 5]
let smallNumbers = []
for (const element of numArr) {
    if (element==4){
        break
    }
    smallNumbers.push(element)
}
console.log(smallNumbers);
