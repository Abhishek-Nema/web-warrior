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


