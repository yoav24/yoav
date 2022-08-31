const btnClick = document.querySelector('.click')
const btnUp = document.querySelector('.up')
const div3 = document.querySelector('#tree')
const div1 = document.querySelector('#one')

btnClick.addEventListener('click', () => {
    div3.scrollIntoView({
        behavior: "smooth", //default: auto
        block: "start", //start, center, end, nearest //default:start //יישור
    })
})

// const body = document.querySelector('body')
btnUp.addEventListener('click', () => {
    // body.scrollIntoView({
    //     behavior: "smooth"
    // })

    window.scrollTo({
        top: 0,
        behavior: "auto"
    })
})

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition)
})

//HW - Scroll
/*
Create divs elements like in lesson.
When the window scrooling down to 1500, chenge the green background (div id="two") to blue
when it less 1500 chenge back to green
*/
