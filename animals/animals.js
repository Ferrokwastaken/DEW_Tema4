const divAnimals = document.getElementById('animals')

DATA.forEach(animal => {
  const span = document.createElement('span')
  span.id = animal.code + '_animal'
  span.title = animal.name
  span.innerHTML = '&#' + animal.code + ';'
  divAnimals.append(span)
})

const categories = new Set(...DATA.map(a => a.category))
console.log(categories)