const form = document.forms['registrationForm']

form.addEventListener('submit', (event) => {
  event.preventDefault()
  let isValid = true

  if ([...form.elements['topic[]']].filter(t => t.checked).length < 2) {
    isValid = false
    form.elements['topic[]'].setCustomValidity('Tienes que elegir al menos 2')
  }

  if (isValid) {
    console.log('Submitting form...')
  }
})

form.addEventListener('input', (event) => {
  if (event.target.tagName === 'INPUT') {
    if (event.target.checkValidity()) {
      event.target.nextElementSibling.textContent = 'válido'
    } else {
      event.target.nextElementSibling.textContent = event.target.validationMessage
    }
  }
})

document.getElementById('email').addEventListener('input', (e) => {
  let mail = form.elements['email'].value
  let domain = mail.split('@')[1] ?? ''
  if (domain.length <= 3) {
    isValid = false
    form.elements['email'].setCustomValidity('El dominio debe tener 3 o más carácteres')
    document.getElementById('emailError').textContent = 'El dominio debe tener 3 o más carácteres'
  } else {
    form.elements['email'].setCustomValidity('')
  }
})