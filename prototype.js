let genericCar = {
    tyres: 4,
    body: "metallic"
}

let tesla = {
    driver: "AI",
    gears: "automatic",
    __proto__ : genericCar  // old way
}


console.log(`Properties of tesla: `, tesla, `Properties inherited by tesla: `, tesla.__proto__);
// console.log(tesla.__proto__);
// console.log(tesla.tyres);

Object.setPrototypeOf(tesla, genericCar)  // new way with getProtoypeOf
console.log(`Properties of tesla: `, tesla, `Properties inherited by tesla: `, Object.getPrototypeOf(tesla));
