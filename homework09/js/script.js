const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
document.body.appendChild(wrapper)

const colorButton = document.createElement('button')
colorButton.classList.add('color__button')
document.body.appendChild(colorButton)
colorButton.textContent = 'Випадкова генерація'

colorButton.addEventListener('click', ()=>{
  generateBlocksInterval()
})


function generateBlocks() {
  for (let i = 0; i < 25; i++) {
    const block = document.createElement('div')
    block.style.backgroundColor = '#' + getRandomColor()
    block.style.width = 50 + 'px'
    block.style.height = 50 + 'px'
    block.classList.add('color__block');
    wrapper.appendChild(block)
  }
}

function generateBlocksInterval() {
  // setInterval(() => {
  // for (let i = 0; i < 25; i++) {
  //   const block = document.createElement('div')
  //   block.style.backgroundColor = '#' + getRandomColor()
  //   block.style.width = 50 + 'px'
  //   block.style.height = 50 + 'px'
  //   block.classList.add('color__block');
  //   wrapper.appendChild(block)
  // }
  // }, 1000);
  setInterval(() => {
    document.querySelectorAll('.color__block').forEach((e) => {
    e.style.backgroundColor = '#' + getRandomColor()
  })
  }, 1000);
  
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = ''
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

generateBlocks()
