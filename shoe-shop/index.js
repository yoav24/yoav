const root = document.querySelector(".root")
const shoe_update = document.querySelector(".shoe_update")
if (localStorage.getItem("shoes") == null) {
    localStorage.setItem("shoes", JSON.stringify([]))
    console.log(`created new lacolstorage`)
} else {
    console.log(`we have a localstorage data`)
}
const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const shoe_obj = {
    shoes: JSON.parse(localStorage.getItem("shoes")),
    render(shoes) {
        console.log(shoes)
        let html = ''
        shoes.forEach(el => {
            html += `<div>
    <p>${el.shoe}</p>
    <img src='${el.shoe_img}' alt="Image of shoes" height="50px" width="50px">
    <button onclick="hendle_delete_shoe('${el.id}')">delete</button>
    <button onclick="hendle_edit_shoe('${el.id}')">uptade</button>
    </div>
    `});
        root.innerHTML = html

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
        const findShoes = this.shoes.filter(item => {
            // item.shoe.includes(searchItem)
            item.shoe == searchItem
        })

        console.log(findShoes)
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
        console.log(shoesSorted)
    }
}
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
function findShoe(ev) {
    console.log(ev.target.value)
    const searchItem = ev.target.value

    shoe_obj.filter_shoew(searchItem)

}

function sortShoesByName () {
    shoe_obj.sortShoes()
}
