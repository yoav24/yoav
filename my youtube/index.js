const sideBar = document.querySelector(".side-bar")
const sideBarElemnts = document.querySelectorAll('.side-bar-vidoes-options div')
const sideBarElemnts2 = document.querySelectorAll('.last-vidoes-options div')
const allElSideBar = [...sideBarElemnts, ...sideBarElemnts2]
const exploreOptins = document.querySelector(".explore-options")



function sideBarDisappear(){
    const windowWidht = window.innerWidth
   
    if(windowWidht > 791) {
        allElSideBar.forEach(el=>{
            console.log(el)
            el.classList.toggle('side-bar-icons-dis')
        })
        exploreOptins.classList.toggle("explore-disappear")
        sideBar.classList.toggle("side-shorter")
    } else if (windowWidht < 791) {
        sideBar.classList.toggle("side-bar-disappear")
        allElSideBar.forEach(el=>{
            console.log(el)
            // el.classList.toggle('side-bar-icons-dis')
        })
    }
}

window.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target.localName)

    if(e.target.localName !== "aside") {
       console.log(`side`)
        // sideBar.classList.remove("side-bar-disappear")
    }
})

// console.log(sideBarElemnts)
// console.log(sideBarElemnts2)

// console.log(allElSideBar)


// function sidebarClose ( ) {

// }


// window.addEventListener('resize',()=>{
//     console.log(window.innerWidth)
    
// })