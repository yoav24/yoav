const root = document.querySelector(".root")
const buyShoe = document.querySelector(".buyshoe")
const cart = document.querySelector("#cart")
const shoe_update = document.querySelector(".shoe_update")
const navbar = document.querySelector(".navbar")

if (localStorage.getItem("shoes") == null) {
    localStorage.setItem("shoes", JSON.stringify([]))
    console.log(`created new lacolstorage`)
} else {
    console.log(`we have a localstorage data`)
}
if (localStorage.getItem("buyShoes") == null) {
    localStorage.setItem("buyShoes", JSON.stringify([]))
    console.log(`created new lacolstorage`)
} else {
    console.log(`we have a localstorage data`)
}


const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const shoe_obj = {
    shoes: JSON.parse(localStorage.getItem("shoes")),
    buyShoes: JSON.parse(localStorage.getItem("buyShoes")),

    render(shoes) {
        console.log(shoes)

        let html = ''

        shoes.forEach(el => {
            html += `<div class="shownShoe">
                <p>${el.shoe}</p>
                <img src='${el.shoe_img}' alt="Image of shoes" height="50px" width="50px">
                <button onclick="hendle_delete_shoe('${el.id}')">delete</button>
                <button onclick="hendle_edit_shoe('${el.id}')">uptade</button>
                <button onclick="hendle_buy_shoe('${el.id}')"><i class="fa-sharp fa-solid fa-cart-plus"></i></button>
                </div>
    `});
        root.innerHTML = html

    },

    render_buy_shoes(buyShoes) {
        console.log(buyShoes)
        let html = ''
        if (buyShoes.length > 0) {
            buyShoes.forEach(el => {
                html += `<div>
        <p>${el.shoe}</p>
        <img src='${el.shoe_img}' alt="Image of shoes" height="50px" width="50px">
        <button onclick="hendle_delete_buy_shoe('${el.id}')">delete</button>
        </div>
        `});
        }
        else {
            html = `<div>cart empty</div>`
        }


        buyShoe.innerHTML = html

    },
    renderOneShoe(shoe) {
        let html = `
        <form onsubmit="get_update_shoe_from_form(event)" id="${shoe.id}">
            <input type="text" name="shoe" placeholder="Enter your shoe name" value="${shoe.shoe}"/>
            <input type="url" name="shoe_img"  src="${shoe.shoe_img}"/>
            <button type="submit">Update</button>
        </form>
    `
        shoe_update.innerHTML = html
    },
    get_obj(ev) {
        const shoe = ev.target.elements.shoe.value
        const shoe_img = ev.target.elements.shoe_img.value
        this.shoes.push({ id: uid(), shoe, shoe_img })
        localStorage.setItem("shoes", JSON.stringify(this.shoes))
        this.render(this.shoes)
    },
    delete_shoe(id) {
        this.shoes = this.shoes.filter(item => item.id !== id)
        localStorage.setItem("shoes", JSON.stringify(this.shoes))
        this.render(this.shoes)
    },
    delete_buy_shoe(id) {
        this.buyShoes = this.buyShoes.filter(item => item.id !== id)
        this.render_buy_shoes(this.buyShoes)
        localStorage.setItem("buyShoes", JSON.stringify(this.buyShoes))
        this.showCartMount(cart, this.buyShoes)
    },
    buy_shoe(id) {
        const findShoe = this.shoes.find(item => item.id == id)
        this.buyShoes.push(findShoe)
        console.log(this.buyShoes)
        this.render_buy_shoes(this.buyShoes)
        this.showCartMount(cart, this.buyShoes)
        localStorage.setItem("buyShoes", JSON.stringify(this.buyShoes))
    },

    edit_shoe(id) {
        const shoe = this.shoes.filter(item => item.id == id)
        this.renderOneShoe(shoe[0])
    },
    get_update_shoe(ev) {
        console.log(`hello`)
        const id = ev.target.id
        const shoe = ev.target.elements.shoe.value
        const shoe_img = ev.target.elements.shoe_img.value

        const index = this.shoes.findIndex(item => item.id == id)

        this.shoes[index] = { id, shoe, shoe_img }
        localStorage.setItem("shoes", JSON.stringify(this.shoes))
        this.render(this.shoes)
    },
    filter_shoew(searchItem) {
        const findShoes = this.shoes.filter(item =>
            item.shoe.includes(searchItem)
        )

        console.log(findShoes)
        this.render(findShoes)
    },
    sortShoes() {
        const shoesSorted = this.shoes.sort((a, b) => {
            const nameA = a.shoe.toUpperCase(); // ignore upper and lowercase
            const nameB = b.shoe.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });

        this.render(shoesSorted)
    },
    showCartMount(el, buyShoes) {
        el.innerHTML = `
            <div>we have :${buyShoes.length} in the cart</div>
        `
    }
}
buyShoe.style.display = "none"
cart.addEventListener('click', () => {
    console.log(buyShoe)
    buyShoe.style.display = "block"
})

const rendershoes = () => {
    shoe_obj.render(shoe_obj.shoes)
}
const get_obj_from_form = (ev) => {
    ev.preventDefault()
    shoe_obj.get_obj(ev)
}

const get_update_shoe_from_form = (ev) => {
    ev.preventDefault()
    shoe_obj.get_update_shoe(ev)
}
const hendle_edit_shoe = (id) => {
    shoe_obj.edit_shoe(id)
}
const hendle_delete_shoe = (id) => {
    shoe_obj.delete_shoe(id)
}
const hendle_delete_buy_shoe = (id) => {
    shoe_obj.delete_buy_shoe(id)
}
const hendle_buy_shoe = (id) => {
    shoe_obj.buy_shoe(id)
}
function findShoe(ev) {
    console.log(ev.target.value)
    const searchItem = ev.target.value

    shoe_obj.filter_shoew(searchItem)

}

function sortShoesByName() {
    shoe_obj.sortShoes()
}

shoe_obj.showCartMount(cart, shoe_obj.buyShoes)

function handleOpenNavBar() {
    navbar.classList.toggle("openMenu")
}
