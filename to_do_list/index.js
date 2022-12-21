const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const root = document.getElementById("root")
const task_update = document.getElementById("task_update")

if (localStorage.getItem("tasks") == null) {
    localStorage.setItem("tasks", JSON.stringify([]))
    console.log(`created new lacolstorage`)
} else {
    console.log(`we have a localstorage data`)
}

const tasksObj = {
    tasks: JSON.parse(localStorage.getItem("tasks")),

    render(tasks) {
        if (tasks.length === 0) {
            root.innerHTML = `
            <div>No tasks</div>
            `
        } else {
            let html = ''

            tasks.forEach(item => {
                html += `
                            <div>
                                <p>${item.task}</p>
                                <p>${item.dateOfTask}</p>
                                <button onclick="hendle_delete_task('${item.id}')">Delete</button>
                                <button onclick="hendle_edit_task('${item.id}')">Update</button>
                            </div>
                        `
            })

            root.innerHTML = html
        }
    },
    renderOneTask(task) {
        let html = `
            <form onsubmit="get_update_task_from_form(event)" id="${task.id}">
                <input type="text" name="task" placeholder="Enter your text" value="${task.task}"/>
                <label for="123">Choose date to start your task</label>
                <input type="date" name="dateOfTask" id="123" value="${task.dateOfTask}"/>
                <button type="submit">Update</button>
            </form>
        `
        task_update.innerHTML = html
    },
    get_task(ev) {
        const task = ev.target.elements.task.value
        const dateOfTask = ev.target.elements.dateOfTask.value

        this.tasks.push({ id: uid(), task, dateOfTask })
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
        this.render(this.tasks)
    },
    deleteTask(id) {
        this.tasks = this.tasks.filter(item => item.id !== id)//צריך הסבר
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
        this.render(this.tasks)
    },
    edit_task(id) {
        const task = this.tasks.filter(item => item.id == id)
        this.renderOneTask(task[0])
    },
    get_uptade_task(ev) {
        const id = ev.target.id
        const task = ev.target.elements.task.value
        const dateOfTask = ev.target.elements.dateOfTask.value

        const index = this.tasks.findIndex(item => item.id == id)

        this.tasks[index] = { id, task, dateOfTask }
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
        this.render(this.tasks)
    }
}

const renderTasks = () => {
    tasksObj.render(tasksObj.tasks)
}

const get_task_from_form = (ev) => {
    ev.preventDefault()
    tasksObj.get_task(ev)
}

const get_update_task_from_form = (ev) => {
    ev.preventDefault()
    tasksObj.get_uptade_task(ev)
}

const hendle_delete_task = (id) => {
    tasksObj.deleteTask(id)
    //only passing the id
}

const hendle_edit_task = (id) => {
    tasksObj.edit_task(id)
}