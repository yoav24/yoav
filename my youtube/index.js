const sideBar = document.querySelector(".side-bar")
const sideBarElemnts = document.querySelectorAll('.side-bar-vidoes-options div')
const sideBarElemnts2 = document.querySelectorAll('.last-vidoes-options div')
const allElSideBar = [...sideBarElemnts, ...sideBarElemnts2]
const exploreOptins = document.querySelector(".explore-options")




const divToHide = document.querySelector(".side-bar")
const hambergerBtn = document.querySelector(".fa-solid")


// console.log(divToHide)

function sideBarDisappear() {
    const windowWidht = window.innerWidth

    if (windowWidht > 791) {
        allElSideBar.forEach(el => {
            console.log(el)
            el.classList.toggle('side-bar-icons-dis')
        })
        exploreOptins.classList.toggle("explore-disappear")
        sideBar.classList.toggle("side-shorter")
    } else if (windowWidht < 791) {
        sideBar.classList.toggle("side-bar-disappear")
        sideBar.id = "side-bar-disappear"
        hambergerBtn.id = "hambergerBtn"
    }
}

window.addEventListener('click', (e) => {
    console.log(e)
<<<<<<< Updated upstream
    console.log(e.target.localName)

    if(e.target.localName !== "aside") {
       console.log(`side`)
        // sideBar.classList.remove("side-bar-disappear")
=======

    console.log(e.target.localName == "html")

    if (e.target.id !== "side-bar-disappear" && e.target.id !== 'hambergerBtn') {
        if (e.target.offsetParent && e.target.offsetParent.id !== 'side-bar-disappear') {
            sideBar.classList.remove("side-bar-disappear")
        } else if (e.target.localName == "html") {
            sideBar.classList.remove("side-bar-disappear")
        }
>>>>>>> Stashed changes
    }
})