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
var myfriends = myfriend.forEach((el) => {
    return "my name is" + el.name + "I" + el.age +" years old and I love to play"+ el.hobbies
})
console.log(myfriends)
console.log(window.document.title)
