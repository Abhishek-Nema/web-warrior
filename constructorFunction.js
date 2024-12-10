function Car(maker, model, year){
    this.maker = maker
    this.model = model
    this.year = year
    this.details = function(){
        return `This car model ${this.model} is made by ${this.maker}, in ${this.year}`
    }
}

Car.prototype.sound = function(){
    return `${this.model} makes low noise`
}

let tataCar = new Car("Tata", "Nexon", 2023)
let hyundaiCar = new Car("Hyundai", "Grand i20", 2022)

console.log(tataCar.details());
console.log(hyundaiCar);
console.log(tataCar.sound());
