const button = document.querySelector(".button")
const head = document.querySelector(".head")


button.addEventListener('mouseenter', () => {
   button.style.backgroundColor = "hsl(158, 55%, 37%)"
   button.innerHTML = `<i class="fa-solid fa-cart-plus"></i> add to cart `
})
button.addEventListener('mouseout', () => {
   button.style.backgroundColor = "hsl(158, 36%, 37%)"
   button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> add to cart `
})
window.addEventListener('keyup', (event) => {
   if (event.code === "ArrowUp") {
      head.style.bottom += "2.5%"
   }
   else if (event.code === "ArrowDown") {
      head.style.top = "2.5%"
   }
})