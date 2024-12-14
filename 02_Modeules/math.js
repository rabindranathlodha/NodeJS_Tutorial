function addNumbers(a, b) {
    const sum = a + b;
    console.log("The sum of", a, "and", b, "is:", sum);
}

function subtractNumbers(a, b) {
    const difference = a - b;
    console.log("The difference between", a, "and", b, "is:", difference);
}

module.exports = {
    add: addNumbers,
    sub: subtractNumbers
}