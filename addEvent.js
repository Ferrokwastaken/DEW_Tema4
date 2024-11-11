const paragraph = document.querySelector('p')
const button = document.querySelector('button')
const checkbox = document.querySelector('#check')

function addText () {
  paragraph.textContent += 'Contenido añadido'
}

// button.addEventListener('click', addText)

checkbox.addEventListener('change', function () {
  console.log('Change now', checkbox.checked)
  if (checkbox.checked) {
    button.addEventListener('click', addText)
  } else {
    button.removeEventListener('click', addText)
  }
})