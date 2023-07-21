const charactersImages = {
  'Luke Skywalker': './assets/imgs/Skywalker.jpg',
  'C-3PO': './assets/imgs/C-3PO.jpeg',
  'R2-D2': './assets/imgs/R2-D2.webp',
  'Darth Vader': './assets/imgs/Darth-Vader.jpg',
  'Leia Organa': './assets/imgs/Leia-Organa.webp',
  'Owen Lars':'./assets/imgs/Owen-Lars.jpeg',
  'Beru Whitesun lars': './assets/imgs/Beru-Whitesun-lars.jpeg',
  'R5-D4': './assets/imgs/R5-D4.jpg'
}

const song = new Audio(`./assets/musics/Star-Wars.mp3`)
const BASE_URL = "https://swapi.dev/api/"

const nextBtn = document.querySelector('.next__btn')
const form = document.querySelector('.search')
const input = document.querySelector('.search input')
const info = document.querySelector('.info')
const items = document.createElement('ul')
items.classList.add('items')
info.appendChild(items)
const planetsItems = document.querySelector('.planets__items')
let pageCount = 0

function renderCharacter(hero){
    const {name, birth_year, gender} = {...hero}
    const item = document.createElement('li')
    item.classList.add('item')
    items.appendChild(item)
    item.innerHTML = `
    <img class="info__img" src=${charactersImages[name] || './assets/imgs/person1.jpg'}   alt="">
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
    renderCharacter(y)
  }
}

function getInfo(e){
  e.preventDefault()
  if(confirm("Чи не будете ви проти прослухати культовий саундтрек?")){
    song.play()
  }
  const item = document.querySelector('.item')
  if(typeof item !== undefined){
    items.innerHTML = ``
  }
  let filmNumber = input.value
  const movieTitle = document.querySelector('.title__info')
  movieTitle.textContent = `FILM N: ${filmNumber}`

  fetch(`${BASE_URL}films/${filmNumber}/`)
  .then(response => {
    return response.json()
  }).then((data) => {
    getCharacters(data.characters)
  })
}

function renderPlanets(data){
  planetsItems.innerHTML = ``
  data.forEach(element => {
    const planetItem = document.createElement('li')
    planetItem.classList.add('planet__item')
    planetItem.textContent = element.name
    planetsItems.appendChild(planetItem)
  });
}

async function nextPage(){
  planetsItems.innerHTML = `<h4>LOADING...<h4>`
  pageCount++
  const planets = await fetch(`https://swapi.dev/api/planets/?page=${pageCount}`)
  .then((response) => response.json())
  renderPlanets(planets.results)
}

nextBtn.addEventListener('click', nextPage)
form.addEventListener('submit', e => getInfo(e))

nextPage()