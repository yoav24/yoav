const root = document.querySelector('.root')

const hendleSendData = (ev) => {
    ev.preventDefault();

    const nameOfUser = ev.target.elements.nameOfUser.value
    const ageOfUser = ev.target.elements.ageOfUser.value
    console.log(nameOfUser, ageOfUser)

    root.innerHTML += `
        <div>
            <p>Name: ${nameOfUser}, age: ${ageOfUser}</p>
           
        </div>
    `
}