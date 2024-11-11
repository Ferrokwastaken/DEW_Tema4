const fruits = document.querySelectorAll('li')
const cart = document.querySelector('#cart')
const button = document.querySelector('button')

fruits.forEach(fruit => {
  fruit.addEventListener('click', select)
  fruit.addEventListener('dblclick', removeLi)
})

function select () {
  console.log('Selected...', this)
  this.classList.toggle('selected')
}

function removeLi () {
  this.remove()
}

button.addEventListener('click', () => {
  fruits.forEach(fruit => {
    fruit.removeEventListener('dblclick', removeLi)
    fruit.addEventListener('dblclick', sendToCart)
  })
})

function sendToCart () {
  cart.append(this)
}