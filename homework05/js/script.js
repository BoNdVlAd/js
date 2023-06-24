function getRandomArray(length, min, max){
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = Math.floor(Math.random() * (max - min + 1)) + min
  }
  return result;
}

function getModa(...numbers){
  numbers = numbers.filter(e => e % 1 === 0)
  let elementCount = {}
  elementCount = numbers.reduce((accum, current)=> (accum[current] = accum[current] + 1 || 1, accum), {})
  maxValue = Math.max(...Object.values(elementCount))
  index = Object.values(elementCount).indexOf(maxValue)
  return Object.keys(elementCount)[index]
}

function getAverage(...numbers) {
  numbers = numbers.filter(e => e % 1 === 0)
  const result = numbers.reduce((accum, current) => accum + current) / numbers.length
  return result
}

function getMedian(...numbers){
  numbers = numbers.filter(e => e % 1 === 0)
  numbers.sort((a, b) => a - b)
  if(numbers.length % 2 === 0){
    return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2
  }else{
    return numbers[Math.floor(numbers.length / 2)]
  }
}

function filterEvenNumbers(...numbers){
  return numbers.filter(e => e % 2 !== 0)
}

function countPositiveNumbers(...numbers){
  return numbers.filter(e => e > 0).length
}

function getDividedByFive(...numbers){
  return numbers.filter(e => e % 5 === 0)
}

function replaceBadWords(string){
  const badWords = ['shit', 'fuck']
  string = string.split(' ')
  for(let i of string){
    for(let q of badWords){
      if(i.includes(q)){
        string[string.indexOf(i)] = string[string.indexOf(i)].replace(String(q), '*'.repeat(q.length))
      }
    }
  }
  return string.join(' ')
}

function divideByThree(word){
  word = word.toLowerCase().trim()
  if(word.length < 3){
    return word
  }
  let result = []
  for (let i = 0; i < word.length; i+=3) {
    result.push(word.slice(i, i + 3))
  }
  return result
}

console.group("Функції")
console.log('повертає масив випадкових цілих чисел(10, 1, 5) : ',getRandomArray(10, 1, 5))

console.log('вираховує моду всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ : ',getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 78.45, 5))

console.log('рахує середнє арифметичне всіх переданих в неї аргументів НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ : ', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 2.12))

console.log('рахує медіану всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ : ', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

console.log('фільтрує парні числа (1, 2, 3, 4, 5, 6) : ', filterEvenNumbers(1, 2, 3, 4, 5, 6))

console.log('рахує кількість чисел більших за 0 (1, -2, 3, -4, -5, 6) : ', countPositiveNumbers(1, -2, 3, -4, -5, 6))

console.log('фільтрує усі елементи в масиві та залишиє тільки ті, які діляться на ціло на 5', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

console.log('замінює погані слова на * (Its bullshit! => Its bull****!) : ', replaceBadWords("It's bullshit!"))

console.log('розбиває кожне слово на умовні склади по 3 букви ("    Commander") : ', divideByThree("    Commander"))
console.groupEnd()
