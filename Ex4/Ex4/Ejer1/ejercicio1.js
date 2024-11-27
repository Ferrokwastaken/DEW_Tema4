// Israel Antonio Duque Silva
const to_doDiv = document.getElementById('to-do')
const in_progressDiv = document.getElementById('in-progress')
const doneDiv = document.getElementById('done')

tasks.forEach(task => {
  const newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'task ' + task.priority)
  newDiv.id = task.id
  newDiv.innerHTML = task.task
  if (task.state == 'to-do') {
    to_doDiv.append(newDiv)
  } else if (task.state == 'in-progress') {
    in_progressDiv.append(newDiv)
  } else {
    doneDiv.append(newDiv)
  }
})
// ----------------------------------------
const form = document.querySelector('form')
const input = document.querySelector('input')
input.required = true
input.pattern = '/[a-zA-z]{3+}/'
form.addEventListener('submit', (event) => {
  event.preventDefault()
})
// ---------------------------------------------
document.querySelectorAll('.task .low').forEach(element => {
  element.draggable = true
  element.addEventListener('dragstart', onDragStart)
})

function onDragStart(event) {
  console.log(event.target.id)
}