function handleSendData() {
    localStorage.setItem("data", "yoav")
}

function handleGetData() {
    return console.log(localStorage.getItem("data"))
}
function handleRemoveData() {
    localStorage.removeItem("data")
}
function handleSendData2() {
    localStorage.setItem("iformation", "katya")

}
function handleRemoveAllData() {
    localStorage.clear()
}

/*
JSON
{
    {"name":"Yoav"},
    {"name":"Katya"}
}

JSON.stringify() = create a string
JSON.parse() = create an object
*/