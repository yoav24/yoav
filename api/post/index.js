const seeNameAndAge = document.querySelector(".seeNameAndAge")
const getDataFromApi = async () => {
    const { data } = await axios.get("https://reqres.in/api/users")
    console.log(data)
}
getDataFromApi()





const sendDataToApi = async (ev) => {
    ev.preventDefault()
    const name = ev.target.elements.name.value
    const age = ev.target.elements.age.value
    const { data } = await axios.post("https://reqres.in/api/users", { name, age })
    seeNameAndAge.innerHTML = `<div>${data.age}</div>
    <div>${data.name}</div>
    <div>${data.createdAt}</div>
    <div>${data.id}</div>

    `
    console.log(data)
}
const sendNewDataToApi = async  ()=>{
    const name= "yoav"
    const age= 11
    const {data} = await axios.map("https://reqres.in/api/users",{name,age})
    seeNameAndAge.innerHTML = `<div>${data.age}</div>
    <div>${data.name}</div>
    <div>${data.createdAt}</div>
    <div>${data.id}</div>`
    console.log(data)

}
sendNewDataToApi()
