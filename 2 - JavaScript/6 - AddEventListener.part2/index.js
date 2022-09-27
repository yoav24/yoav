const btnDbl = document.getElementById('btnDBLClick')
const root = document.querySelector('.root')

btnDbl.addEventListener('dblclick', () => {
    alert('You click on me duble')
})

window.addEventListener('keyup', (event) => {
    if (event.code === "ArrowUp") {
        root.innerHTML += "<p>&uarr;</p>"
    } else if (event.code == 'ArrowDown') {
        root.innerHTML += "<p>&darr;</p>"
    } else if (event.code == 'ArrowLeft') {
        root.innerHTML += "<p>&rarr;</p>"
    } else if (event.code == 'ArrowRight') {
        root.innerHTML += "<p>&larr;</p>"
    } else {
        root.innerHTML += `<p>${event.code}</p>`
    }
})

//////////////////////////////////////////
const mouseDiv = document.getElementById('mouse')

mouseDiv.addEventListener('mouseenter', () => {
    mouseDiv.style.backgroundColor = "yellow"
})

mouseDiv.addEventListener('mouseout', () => {
    mouseDiv.style.backgroundColor = "cadetblue"

    setTimeout(() => {
        mouseDiv.style.backgroundColor = "red"
    }, 5000)
})