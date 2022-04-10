const categories = document.getElementById('categories')
const items = categories.innerHTML
let data = [
  {
    icon: 'couch.png',
    text: 'Furniture',
    color: '#FFECEC'
  },
  {
    icon: 'house.png',
    text: 'Property',
    color: '#DBD5EC'
  },
  {
    icon: 'building.png',
    text: 'Job',
    color: '#ECF0FF'
  },
  {
    icon: 'plane.png',
    text: 'Travel',
    color: '#D7F9F3'
  },
  {
    icon: 'boat.png',
    text: 'Boat',
    color: '#E2FFD4'
  },
  {
    icon: 'motor.png',
    text: 'MC',
    color: '#C9F4FF'
  },
  {
    icon: 'money.png',
    text: 'Economy',
    color: '#FFF3C9'
  },
  {
    icon: 'holiday.png',
    text: 'Holiday',
    color: '#FFD9C9'
  },
]

const displayCards = (items) => { 
  return items.map(item => {
    return `
      <div class="card" style="background-color: ${item.color}">
        <img src="./images/${item.icon}" />
        <p>${item.text}</p>
      </div>
    `
  })
}

const search = (e) => {
  const text = e && e.value
  let filtered = data
  if (text) {
    filtered = data.filter(item => {
      return item.text.toLowerCase().includes(text.toLowerCase())
    })
  }
  const notFound = document.getElementById('not-found')
  notFound.classList.add('hidden')
  if (!filtered.length) {
    notFound.classList.remove('hidden')
  } 
  const cards = displayCards(filtered)
  categories.innerHTML = cards.join('')
}

search()