

const BASE_URL = "https://swapi.dev/api/"

const form = document.querySelector('.search')
const input = document.querySelector('.search input')

const info = document.querySelector('.info')
const items = document.createElement('ul')
items.classList.add('items')
info.appendChild(items)

const planetsItems = document.querySelector('.planets__items')
let pageCount = 0



function renderCharacters(hero){
    const {name, birth_year, gender} = {...hero}
    console.log(hero)
    const item = document.createElement('li')
    item.classList.add('item')
    items.appendChild(item)
    item.innerHTML = `
    <img class="info__img" src="./assets/person1.jpg" alt="">
    <p class="name">Name: ${name}</p>
    <p class="birth">Birth Year: ${birth_year}</p>
    <p class="gender">Gender: ${gender}</p>
    `

}

async function getCharacters(characters){
  let result = []
  for(let x of characters){
    let y = await fetch(x).then((response) => {
      return response.json()
    }).then((data) => {
      return data
    })
    renderCharacters(y)
  }
  return result
}


async function getInfo(e){
  const item = document.querySelector('.item')
  if(typeof item !== undefined){
    items.innerHTML = ``
  }
  e.preventDefault()
  let filmNumber = input.value
  const movieTitle = document.querySelector('.title__info')
  movieTitle.textContent = `FILM N: ${filmNumber}`

  await fetch(`${BASE_URL}films/${filmNumber}/`)
  .then(response => {
    return response.json()
  }).then((data) => {
    return getCharacters(data.characters)
  })
}

const nextBtn = document.querySelector('.next__btn')

function renderPlanets(data){
  console.log(data)
  
  data.forEach(element => {
    const planetItem = document.createElement('li')
    planetItem.classList.add('planet__item')
    planetItem.textContent = element.name
    planetsItems.appendChild(planetItem)
  });
  

}

async function nextPage(){
  planetsItems.innerHTML = ``
  pageCount++
  const planets = await fetch(`https://swapi.dev/api/planets/?page=${pageCount}`)
  .then((response) => response.json())
  renderPlanets(planets.results)
}


nextBtn.addEventListener('click', nextPage)



form.addEventListener('submit', e => getInfo(e))

nextPage()