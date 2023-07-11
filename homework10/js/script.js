const wrapper = document.querySelector('.wrapper')
let keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k']

for (let i = 0; i < keys.length; i++) {
  const soundBtn = document.createElement('div')
  soundBtn.classList.add('sound__block')
  soundBtn.textContent = keys[i]
  wrapper.appendChild(soundBtn)
}

let musics = []
for (let i = 1; i <= 8; i++) {
  musics.push(new Audio(`./musics/sound${i}.mp3`))
}

let soundsBtns = document.querySelectorAll('.sound__block')

soundsBtns.forEach((e, index)=>{
  e.addEventListener('click', ()=>{
    musics[index].play()
    soundsBtns[index].classList.add('active')
    let playTime = musics[index].duration * 1000
    setTimeout(() => {
      soundsBtns[index].classList.remove('active')
    }, playTime);
  })
})

function onPress(e) {
  if(keys.includes(e.key)){
    musics[keys.indexOf(e.key)].play()
    soundsBtns[keys.indexOf(e.key)].classList.add('active')
    let playTime = musics[keys.indexOf(e.key)].duration * 1000
    setTimeout(() => {
      soundsBtns[keys.indexOf(e.key)].classList.remove('active')
    }, playTime);
  }
}

document.addEventListener('keydown', onPress)





