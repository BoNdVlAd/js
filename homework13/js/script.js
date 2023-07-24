function* createIdGenerator() {
  for (let i = 1;; i++) {
    yield i
  }
}

const idGenerator = createIdGenerator()
console.group('Завдання №1')
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.groupEnd()

const text = document.querySelector('.text')
text.style.fontSize = 14 + 'px'

function* newFontGenerator(fontSize){
  while (true) {
    const changeFont = yield fontSize
    if(changeFont === 'up'){
      fontSize += 2
    }else if(changeFont === 'down'){
      fontSize -= 2
    }
    text.style.fontSize = fontSize + 'px'
  }
}

const fontGenerator = newFontGenerator(14)

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000))

const doTask2 = async () => {
  console.group('Завдання №2')
  await sleep()
  console.log(fontGenerator.next("up").value)
  await sleep()
  console.log(fontGenerator.next("up").value)
  await sleep()
  console.log(fontGenerator.next("up").value)
  console.log(fontGenerator.next().value)
  await sleep()
  console.log(fontGenerator.next("down").value)
  await sleep()
  console.log(fontGenerator.next("down").value)
  await sleep()
  console.log(fontGenerator.next("down").value)
  console.log(fontGenerator.next().value)
  console.groupEnd()
}

doTask2()