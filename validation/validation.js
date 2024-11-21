const form = document.forms['registrationForm']

form.addEventListener('submit', (event) => {
  event.preventDefault()
  let isValid = true

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