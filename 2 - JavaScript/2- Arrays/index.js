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

// console.log(arrHobies.slice(arr.length-1))

//------map------
const newArr = arrHobies.map((el) => {
    return `I love ${el}`
})

// console.log(newArr)

//----forEach-----
const newArr1 = arrHobies.forEach(el => {
    return `I love ${el}`
});

console.log(newArr1)

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
// console.log(findByIndex)

const arrLenght = arr1.length;
// console.log(arrLenght)
/////////
/*
1. Write new array includes name and age with length of 5.
2. Slice the array from 2 to 4
3. Create new array by using map.
4. Filter the array.
*/
const arr = [
    { name: "yoav", age: 11 },
    { name: "noam", age: 15 },
    { name: "naama", age: 9 },
    { name: "yonatan", age: 25 },
    { name: "alon", age: 41 }
]
const arrslice = arr.slice(2, 5)
const newarr2 = arr.map((el) => {
    return { name: el.name, age: el.age + 5 - 3 }
}
)
// console.log(newarr2)
var arr3 = newarr2.filter((el) =>
    el.age > 20
)
// console.log(arr3)

//--------FOR------
for (let i = 0; i < arr.length; i++) {
    // console.log(i)
    // console.log(`my name is ${arr[i].name}`)
    if(arr[i].name=="yoav"){
        // console.log('yoav')
    } else {
        // console.log("else")
    }
}

//-----------
for(let i=0;i<70;i++){
    if( i % 7== 0){
        if(i % 5 ==0){
            // console.log("boom" + i )
        }
        // console.log("boom")
    }
    else{
        // console.log(i)
    }
}
// new arr with name and age find methods for arr use the methods on the arr
// do for on arr if age > ___ do if age >35 so consle.log(name) if(age>x)
// else if (x>age>y) || (age>y) => console.log(name)
// else => console.lof(name)

