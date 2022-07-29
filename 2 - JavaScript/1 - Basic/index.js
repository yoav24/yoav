// NaN = Not a Number

// alert("hello") //only ok
// let userAns = +prompt("Hello")
// console.log(userAns)
// let userAnsCon = confirm('tralalala')
// console.log(userAnsCon)

// function helloFun() {
//     let userAns = prompt("Hello")
//     userAns = userAns + userAns
//     console.log(userAns)
// }

// 4+2=6
// 6=4+x // 6-4=x
// //2=x
var fname = prompt("what is you'r first name?")
var lname = prompt("what is you'r last name?")
function func(fname, lname) { //regular function
    // return fname + " "+lname
    return `My full name is ${fname} ${lname}`
}
console.log(func(fname,lname))
// (a, b) => { //anonymous function
//     return a + b
// }

// const funcArrow = (a, b) => { // arrow function
//     return a + b
// }

