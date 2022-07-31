// const arr = [
//     { name: "yoav" }, //[0]
//     { name: "yoav1" }, //[1]
//     [{ name: "yoav2" }, { name: "yoav3" },] //[2][0]
// ]

// console.log(arr[2][0])

//-------slice--------
const arrHobies = [
    "coding", "basketball", "sleep"
] //slice

// console.log(arrHobies.slice(-1))

//------map------
const newArr = arrHobies.map((el) => {
    return `I love ${el}`
})

// console.log(newArr)

//----forEach-----
const newArr1 = arrHobies.forEach(el => {
    return `I love ${el}`
});

// console.log(newArr1)

//-----filter----
const arr1 = [
    { name: "Yoav", hobbie: "coding" },
    { name: "Yoav", hobbie: "basketball" },
    { name: "Katya", hobbie: "sleep" }
]

const yoav = arr1.filter(item =>
    item.name == "Yoav"
)

console.log(yoav)

//----find------
const yoav1 = arr1.find(item =>
    item.name == "Yoav"
)

console.log(yoav1)

//-----findIndex----
const findByIndex = arr1.findIndex(item => item.name == "Katya")
console.log(findByIndex)

