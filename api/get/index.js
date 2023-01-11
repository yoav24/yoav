const root=document.querySelector(".root")
const jockbtn=document.querySelector(".jock")

const  getJockFromApi = async () => {
    const {data} = await axios.get("https://api.chucknorris.io/jokes/random")
    console.log(data)
    root.innerHTML=`<p>${data.value}</p>`
}

jockbtn.addEventListener('click', getJockFromApi)


/*
GET - הבקשה נותנת מידע מהשרת ללא מידע מהקליינט  
POST - בקשה נותנת מידע מהשרת עם מידע מהקליינט
PATCH
PUT
DELETE - מוחק את המידע
*/