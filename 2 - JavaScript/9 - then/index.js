let users

const getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            users = res.data
            console.log(users)
        })
}

// const showData = (users) => {
// console.log(users)
// ?}

