let circle = document.querySelector(".circle1")
circle.classList.add("circle_style")
let circle2 = document.querySelector(".circle2")
let clicks = 0
let circle1_width =  circle.offsetWidth


function click() {
    console.log('clicked')
    console.log(circle1_width)
    clicks = clicks +1
    circle.style.width = `${circle1_width + 15}px`
    if (clicks >= 5){
        circle2.classList.add("circle_style")
    }
}
function opacity(){
    circle2.classList.remove("circle_style")
    circle2.classList.add("opacity")
}
circle.onclick = click
circle2.onclick = opacity
