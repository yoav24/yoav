const presentApi = document.querySelector(".presentApi")
const addUserAddress = document.querySelector(".addUserAddress")

const getDataFromApi = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)

    const usersNames = data.map(item => {
        return item.name
    })

    console.log(usersNames)

    let addToHTML = ''
    data.forEach(user => {
        addToHTML += `
    <div class="user">
        <p>${user.name}</p>
        <p>${user.email}</p>
        
        <p>${user.phone}</p>
        </div>
    `})

    presentApi.innerHTML = addToHTML

    addUserAddress.addEventListener('click', () => {
        addToHTML = ``
        data.forEach(user => {
            addToHTML += `
        <div class="users">
            <p>${user.name}</p>
            <p>${user.email}</p>
            <p>${user.phone}</p>
        
        <div>
    <div class="adressOfUser">
        <p>Adress of User: ${user.address.city}</p>
        <p> ${user.address.street}</p>
        <p> ${user.address.suite}</p>
    </div>
    <p> ${user.address.geo.lng}</p>
    <p> ${user.address.geo.lat}</p>
</div>
</div>        
`})

        presentApi.innerHTML = addToHTML
    })
}

/* !!!!!Must to be 2 functions at least*/
// מהו השימוש של css
// מהם ההבדלים בין הסלקטורים ואיזה יש
// מהו הכתיבה הנכונה של הקוד
// איך אפשר להכניס css לדף
// איזה מיידות יש
// הבדלים בין שני דברים דומים
