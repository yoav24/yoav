const root = document.querySelector('#root')
const cell = document.getElementsByClassName('cell')
let player = "x"

const winIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9]
]

for (let i = 1; i <= 9; i++) {
    root.innerHTML += `<div class="cell" pos="${i}"></div>`
}

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick)
}

function cellClick() {
    const data = []

    if (!this.innerHTML) {
        this.innerHTML = player
    } else {
        alert('alredy used')
        return;
    }

    for (let i in cell) {
        if (cell[i].innerHTML == player) {
            data.push(parseInt(cell[i].getAttribute('pos')))
        }
    }

    if (checkWin(data)) {
        alert('you win!')
    }

    player = player == "x" ? "o" : "x"
}

function checkWin(data) {
    for (let i in winIndex) {
        let win = true
        for (let j in winIndex[i]) {
            let id = winIndex[i][j]
            let index = data.indexOf(id)

            if (index == -1) {
                win = false
            }
        }

        if (win) return true;
    }
    return false
}