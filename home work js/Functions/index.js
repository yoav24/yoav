// var a = prompt("enter one number")
// var b = prompt("enter one more number")

// function plus(a, b) {
//     return `if you plus this numbers it will equals to ${a + b}`
// }

// function minus(a, b) {
//     return `if you minus this numbers it will equals to ${a - b}`
// }

// function multiple(a, b) {
//     return `if you multiple this numbers it will equals to ${a * b}`
// }
// function divide(a, b) {
//     return `if you divide this numbers it will equals to ${a / b} `
// }

// console.log(plus(Number(a), Number(b)))
// console.log(minus(Number(a), Number(b)))
// console.log(multiple(Number(a), Number(b)))
// console.log(divide(Number(a), Number(b)))

// var c = prompt("how much Celsius degrees there outside?")

// function Fahrenheit(c) {
//     return ` there is ${c * 9 / 5 + 32} Fahrenheit degrees outside `
// }

// console.log(Fahrenheit(Number(c)))

// var km = prompt("how much km you have left?")
// var kmh = prompt("how many kmh are you now?")

// function km_kmh(km, kmh) {
//     return `this drive takes ${km / kmh} hours`
// }

// console.log(km_kmh(Number(km), Number(kmh)))

var num1 = prompt("enter one number")
var num2 = prompt("enter one more number")
var num3 = prompt("enter the last number")

function min(num1, num2, num3) {
    return Math.min(num1, num2, num3)
}

function max(num1, num2, num3) { //name of function
    return Math.max(num1, num2, num3)
}

console.log(min(Number(num1), Number(num2), Number(num3)))
console.log(max2(Number(num1), Number(num2), Number(num3)))  //name of function