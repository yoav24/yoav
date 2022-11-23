const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const root = document.getElementById("root")

const tasksObj = {
    tasks: [],
    get_task (ev) {
        const task = ev.target.elements.task.value
        const dateOfTask = ev.target.elements.dateOfTask.value
    
        this.tasks.push({id: uid(), task,dateOfTask})
        this.render(this.tasks)
    },
    render(tasks) {
        console.log(tasks)
        let html = ''

        tasks.forEach(item => {
            html += `
                <div>
                    <p>${item.task}</p>
                    <p>${item.dateOfTask}</p>
                    <button onclick="hendle_delete_task(${item.id})">Delete</button>
                </div>
            `
        })

        root.innerHTML = html
    },
    //create new function of delete 
    //this.tasks
     //use filter
}

const get_task_from_form = (ev) => {
    ev.preventDefault()
    tasksObj.get_task(ev)
}

const hendle_delete_task = (id) =>{

   //only passing the id
}