const div2 = document.querySelector("#two")
window.addEventListener("scroll", () =>{
    const scrollPosition = window.scrollY
    if (scrollPosition >= 1500 ){
        div2.style.background = "blue";
    }
    else {
        div2.style.background = "yellowgreen";
    }
    console.log(scrollPosition)
})
