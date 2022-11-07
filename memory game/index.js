const resetbtn = document.querySelector(".reset")
const root = document.querySelector(".root")
const images = [
    { id: 1, src: "./img/dog.png" },
    { id: 2, src: "./img/cat.png" },
    { id: 3, src: "./img/rabbit.png" },
    { id: 4, src: "./img/horse.png" },
    { id: 5, src: "./img/lion.png" },
    { id: 6, src: "./img/tiger.png" },
    { id: 7, src: "./img/monkey.png" },
    { id: 8, src: "./img/dolphin.png" },
]
const checkWinArr = []
const doubleCards = []
let openedCards = []

function shuffleFunction(arr) {
    return arr.sort(() => Math.round(Math.random() * 100) - 50)
}

function chooseLevel(level) {
    //נערבב את המערך
    //נחתוך את המערך
    //נשכפל כרטיסים
    //נערבב את המערך

    const shuffleCards = shuffleFunction(images)

    const slicedCards = shuffleCards.slice(0, level)

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < slicedCards.length; j++) {
            doubleCards.push(slicedCards[j])
        }
    }

    const cardsToPlay = shuffleFunction(doubleCards)
    console.log(cardsToPlay)
    renderCards(cardsToPlay)
}

function renderCards(cards) {
    document.querySelector(".welcome-page").style.display = "none"

    let html = ''

    cards.forEach(el => {
        html += `
            <div id="${el.id}" class="card" clikedFirst="true">
                <div class="backCard"></div>
                <div class="frontCard">
                    <img src=${el.src} alt=${el.src}/>
                </div>
            </div>
        `
    });

    root.innerHTML = html
    
    const allCardsOfGame = document.querySelectorAll(".card")

    allCardsOfGame.forEach(cd => {
        cd.addEventListener("click", () => {
            console.log(cd.id)
            cd.classList.add("flip")

            if (openedCards.length === 0 || openedCards.length === 1) {
                openedCards.push(cd)
                checkCards()
            }
        })
    })
}

const checkCards = () => {
    if (openedCards.length === 2) {
        checked(openedCards)
        openedCards = []
    }
}

const checked = (playedCards) => {
    if (playedCards[0].id ==playedCards[1].id) {
        console.log('you win')
        checkWinArr.push(playedCards[0].id,playedCards[1].id) 
        if(checkWinArr.length == doubleCards.length){
            resetbtn.style.display = "block"
        }
    } 
    else {
        console.log(`try again`)
        setTimeout(() => {
            playedCards[0].classList.toggle("flip")
            playedCards[1].classList.toggle("flip")
        }, 1000)
    }
}

resetbtn.addEventListener("click", () => {
    location.reload()
})

// images.forEach.addEventListener('click',()=>{
//     console.log("Aaaaaaa")
// })
// images.forEach(el=>{
//     el.a
// })