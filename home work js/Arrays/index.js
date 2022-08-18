var arr = [
    {name: "Gil", age: 20},
    {name: "Itamar", age: 11},
    {name: "Omer", age: 15},
    {name: "Neta", age: 9}];

// arr.forEach(user =>{
//     if (user.age > 15){
//         console.log(user)
//     }
// })


// var x= 30
// var y= 16
// arr.forEach(item =>{
//     if (item.age>x){
//     console.log(item.name)
// }
// else if (y <item.age < x){ //16<gil<30
//     console.log(`${item.name} is ${item.age}`)
// } else {
//     console.log(`the user are ${item.age}`)
// }
// })
// if(arr.age>x){
//     console.log(arr.name)
// }
// else if (x>arr.age>y || arr.age>y);{
//     console.log(arr.name)
// }
// const arrmap =arr.map((el)=>{
//     return{name: el.name,age: el.age/2}
// });
// console.log(arrmap);
// const arrfilter = arr.filter(item=>
//     item.age>14);
// console.log(arrfilter);
// const arrlen = arr.length;
// console.log(arrlen)


//------------
for(let i=0; i<arr.length; i++){
    // if (arr[i].name == "Neta"){
    //     console.log("neta")
    // }
    if(arr[i].age <10) {
        console.log(`${arr[i].name} ${arr[i].age} the age is less than 10`)
    } else if (arr[i].age <20) {
        console.log(`${arr[i].name} ${arr[i].age} the age is less than 20`)
    } else {
        console.log(arr[i].name)
    }
}

const new_arr = arr.filter(item =>  item.age == 9)

console.log(new_arr)

let x = 5
let y ="5"

console.log(x==y) //true
console.log(x===y) //false
