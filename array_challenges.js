// q1
 let teaFlovors = ['green tea', "black tea", "oolong tea"]
 let firstTea = teaFlovors[0]
 console.log(firstTea);
 
//  q2
let cities = ["London", "Tokyo", "Paris", "New York"]
let favouriteCity = cities[2]
console.log(favouriteCity);

// q3
let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1] = "jasmine tea"
console.log(teaTypes);

// q4
let citiesVisited = ["Mumbai", "sydney"]
citiesVisited.push("berlin")
console.log(citiesVisited);

// q5
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
let lastOrder = teaOrders.pop()
console.log(lastOrder);
console.log(teaOrders);

// q6
let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas
console.log(softCopyTeas);
popularTeas.shift()
console.log(softCopyTeas);

// q7
let topCities = ["Berlin", "Singapore", "New York"]
let hardCopyCitis = [...topCities]
console.log(hardCopyCitis);
topCities.pop()
console.log(topCities);
console.log(hardCopyCitis);

// q8
let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]

let worldCities = europeanCities.concat(asianCities)
console.log(worldCities);
// or
let wc = [...europeanCities, ...asianCities]
console.log(wc);

// q9
let teaMenu = ["Masala chai", "Oolong tea", "green tea", "earl grey"]
let menuLength = teaMenu.length
console.log(`length: ${menuLength}`);

// q10
let cityBucketList = ["London", "Kyoto", "Cape Town", "Vancouver"]
let isLondonInList = cityBucketList.includes("london")
console.log(isLondonInList);
