
const root = document.querySelector('#root')
// console.log(root)

// console.log(root.innerText)
// console.log(root.innerHTML)
// root.innerText = "<p>Yoav</p>"
// root.innerHTML = "<p>Yoav2</p>"

// root.style.background = "blue"
// root.style.fontSize = "1.5rem"
// root.style.color = "white"

// root.classList.add("fromJS")
// root.classList.remove("one")
// root.classList.toggle("fromJS")

// function handleGetText() {
//     console.log(root.innerText)
// }

// root.onclick = handleGetText

//---------------------------------
// const rootALL = document.querySelectorAll('.root')
// console.log(rootALL)


// // console.log(rootALL.innerText)
// rootALL.forEach((el) => {
//     console.log(el.innerText)
//     el.style.color = "red"
// })

//-------------------------------

// Create square with red background
// Create function that change the background color - onclick
const squre = document.querySelector(".squre")
squre.style.background = "red"
squre.style.width = "2rem"
squre.style.height = "2rem"

// squre.classList.add("square")
function change_color (){
    squre.style.background = "blue"
}
squre.onclick = change_color