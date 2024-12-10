class Vehicle {
    constructor(maker, model){
        this.maker = maker
        this.model = model
    }

    run(){
        return `${this.model} is operated by ${this.maker}`
    }
}

class Car extends Vehicle{
    features(){
        return `${this.maker} has the featrure of AI assistant`
    }
}

let teslaCompany = new Car("Tesla", "Cybertruck")
console.log(teslaCompany);
console.log(teslaCompany.run());
console.log(teslaCompany.features());
console.log(Car.features());  // this will throw an error as featues() is not static method, but an instance method

