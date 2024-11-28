const form = document.forms.suscripcionForm
const themeContainerDiv = document.getElementById('temasContainer')
const nombreError = document.getElementById('nombreError')
const dniError = document.getElementById('dniError')
const priceSpan = document.getElementById('precio')
const subscriptions = {
  'basico': {
    precio: 5,
    temas: 1
  },
  'estandar': {
    precio: 10,
    temas : 3
  },
  'premium': {
    precio: 15,
    temas: 6
  },
  'elite': {
    precio: 20,
    temas : TEMAS.length
  }
}

TEMAS.forEach(tema => {
  const input = document.createElement('input')
  input.type = 'checkbox'
  input.name = 'tema[]'
  input.id = input.value = tema
  input.addEventListener('change', changeTheme)

  const label = document.createElement('label')
  label.htmlFor = tema
  label.textContent = tema

  themeContainerDiv.append(input, label)
})

form.elements.nombre.addEventListener('input', (event) => {
  event.target.value = event.target.value.toLocaleUpperCase()
  if (event.target.value.length < 3) {
    event.target.setCustomValidity('Tienes que tener 3 carácteres o más')
  } else {
    event.target.setCustomValidity('')
  }
  nombreError.textContent = event.target.validationMessage
})

form.elements.dni.addEventListener('input', (event) => {
  dniError.textContent = event.target.validationMessage
  event.target.value = event.target.value.toLocaleUpperCase()
})

form.elements.tipo.forEach(radio => radio.addEventListener('click', (e) => {
  let tipo = form.elements.tipo.value
  priceSpan.textContent = subscriptions[tipo].precio
}))

priceSpan.textContent = subscriptions.basico.precio

function changeTheme (e) {
  let tipo = form.elements.tipo.value
  console.log('Numero de temas subscripcion: ', subscriptions[tipo].temas)
  console.log('Temas seleccionados(checked): ')
  console.log('Numero de temas seleccionados: ')
}
