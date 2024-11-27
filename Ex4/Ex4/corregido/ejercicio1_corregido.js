const panels = {
  'to-do': document.getElementById('to-do'),
  'in-progress': document.getElementById('in-progress'),
  'done': document.getElementById('done'),
  'paperbin': document.getElementById('paperbin')
}

let nextID = Math.max(tasks.map(task => task.id))

function addTask (task) {
  const newDiv = document.createElement('div')
  newDiv.textContent = task.task
  newDiv.classList.add('task', task.priority)
  newDiv.id = 'task_' + task.id
  newDiv.draggable = true
  newDiv.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', newDiv.id)
    // console.log(newDiv.id)
  })
  // const panel = document.getElementById(task.state)
  // panel.append(newDiv)
  panels[task.state].append(newDiv)
}

tasks.forEach(task => addTask(task))

const form = document.forms[0]
form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(form.elements.task.value)
  console.log(form.elements.priority.value)
  addTask({
    id: ++nextID,
    task: form.elements.task.value,
    priority: form.elements.priority.value,
    state: 'to-do'
  })
})

form.elements.priority.addEventListener('change', () => {
  form.elements.priority.className = form.elements.priority.value
})

Object.values(panels).forEach(panel => {
  panel.addEventListener('dragover', (event) => {
    event.preventDefault()
  })

  panel.addEventListener('drop', (event) => {
    const taskID = (event.dataTransfer.getData('text/plain'))
    const divTask = document.getElementById(taskID)
    event.currentTarget.append(divTask)
    if (event.currentTarget.id == 'paperbin') {
      let timemoutID = setTimeout(() => divTask.remove(), 10000)
      divTask.dataset.timeout = timemoutID
    } else {
      clearTimeout(divTask.dataset.timeout)
    }
  })
});

document.querySelector('#paperbin button').addEventListener('click', () => {
  const header = panels.paperbin.firstElementChild
  panels.paperbin.innerHTML = ''
  panels.paperbin.append(header)

  // for (let i = panels.paperbin.children.length - 1; i < 0; i--) {
  //   panels.paperbin.children[i].remove()
  // }

  // const tasksDiv = panels.paperbin.querySelectorAll('.task')
  // tasksDiv.forEach(t => t.remove())

  // const tasksDivs = [...panels.paperbin.children].filter((t, i) => i != 0)
  // tasksDivs.forEach(t => t.remove())
})