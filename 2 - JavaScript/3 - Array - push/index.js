const arr = [
    { name: "Yoav", age: 11 }
]

const newUser = {
    name:"Katya",
    age:29
}

arr.push(newUser)




// arr = [
//     { name: "Yoav", age: 11 },
//     newUser
// ]
// console.log(arr)
var myfriend = [
    {name:"Omer", age: 11 , hobbies: "coding" },
    {name:"Neta", age: 12 , hobbies: "basketball,drumming" },
    {name:"Ethan", age: 10  , hobbies: "basketball,swiming" },
    {name:"Noam", age: 12 , hobbies: "basketball,to draw"},
    {name:"Alon", age: 12 , hobbies: "basketball"}
]
var myfriends = myfriend.map((el) => {
    return `my name is  ${el.name}   I  ${el.age}   years old and I love to play  ${el.hobbies} `
})
document.getElementById("title").innerHTML = `<h1>${window.document.title}</h1>`
let title = document.getElementById("title")
title.style.color = "red"
console.log(myfriends)
console.log(window.document.title)