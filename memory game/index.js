const images = [
    { id: 1, src: "https://i.pinimg.com/originals/78/cf/3e/78cf3eee0658dbf205e821f5a31db5e3.png" },
    { id: 2, src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2acc139b-8d65-4eb7-8788-fad993edf59a/dce92ad-a4d890fb-40ec-4b0b-927d-c675f40053d1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhY2MxMzliLThkNjUtNGViNy04Nzg4LWZhZDk5M2VkZjU5YVwvZGNlOTJhZC1hNGQ4OTBmYi00MGVjLTRiMGItOTI3ZC1jNjc1ZjQwMDUzZDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.g2z3YaF3jqg9OAMHQIwGy5sTSs0SQV_Eufqh3TzZpcw" },
    { id: 3, src: "https://www.downloadclipart.net/large/easter-rabbit-png-hd.png" },
    { id: 4, src: "https://www.transpenninetrail.org.uk/wp-content/uploads/2021/02/hannah-horse.png"},
    { id: 5, src: "https://pngimg.com/uploads/lion/lion_PNG23264.png" },
    { id: 6, src: "https://cdn11.bigcommerce.com/s-ob7m2s98/products/15799/images/47721/007__50947.1563817308.500.500.png?c=2" },
    { id: 7, src: "https://us.123rf.com/450wm/ciputdesign/ciputdesign1910/ciputdesign191000010/136517255-cute-monkey-cartoon-on-white-background.jpg?ver=6" },
    { id: 8, src: "https://i.pinimg.com/originals/0c/06/71/0c06714d7c6c0b341b5980740e01d09b.pn" },
]

function shuffle(arr){
    return arr.sort(()=> Math.round(Math.random()*100)-50)
}

function chooseLevel(level) {
    //נערבב את המערך
    //נחתוך את המערך
    //נשכפל כרטיסים

    const a = shuffle(images)
    console.log(a)



}
