// Israel Antonio Duque Silva
const inputName = document.getElementById('nombre')
inputName.pattern = '/[A-Z]/{3+}'

const inputDni = document.getElementById('dni')
inputDni.setAttribute('required', true)
inputDni.setAttribute('pattern', '/[0-9]{8}-[A-Z]{1}/')
inputDni.setAttribute('maxlength', '10')

const divContainer = document.getElementById('temasContainer')
TEMAS.forEach(element => {
  const createInput = document.createElement('input')
  createInput.type = 'checkbox'
  createInput.name = 'tema[]'
  createInput.id = element
  createInput.value = element
  const createLabel = document.createElement('label')
  createLabel.htmlFor = element
  createLabel.innerHTML = element
  divContainer.append(createInput, createLabel)
})

const form = document.getElementById('suscripcionForm')
form.addEventListener('submit', (event) => {
  event.preventDefault()
})