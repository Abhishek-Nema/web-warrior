// q1
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`
}

let teaOrder = makeTea("green tea which is healthy")
console.log(teaOrder);

// q2
function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder()
}

let teaResult = orderTea("chai")
console.log(teaResult);

// q3
let calculateTotal = (price, quantity) => price * quantity
let totalCost = calculateTotal(2000, 5)
console.log(totalCost);

// q4
function processTeaOrder(funcName){
    return funcName("earl grey");
}

function makeTea(teaName){
    return `Tea is ${teaName}`
}

let res = processTeaOrder(makeTea)
console.log(res);

// q5
function createTeaMaker(){
    return function(nameOfTea){
        return `Making ${nameOfTea}`
    }
}
let teaMaker = createTeaMaker()
let result = teaMaker("green tea")
console.log(result);


