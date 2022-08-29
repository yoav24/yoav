let circle = document.querySelector(".circle1")
circle.classList.add("circle_style")
let circle2 = document.querySelector(".circle2")
let clicks = 0
function click() {
    clicks = clicks +1
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
