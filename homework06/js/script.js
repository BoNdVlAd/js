const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
  math: [4, 4, 3, 4],
  algorithms: [3, 3, 3, 4, 4, 4],
  data_science: [5, 5, 3, 4]
  }
  }, {
  name: "Victor",
  course: 4,
  subjects: {
  physics: [5, 5, 5, 3],
  economics: [2, 3, 3, 3, 3, 5],
  geometry: [5, 5, 2, 3, 5]
  }
  }, {
  name: "Anton",
  course: 2,
  subjects: {
  statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
  english: [5, 3],
  cosmology: [5, 5, 5, 5]
  }
  }];

function getSubjects(){
  let arrSubjects = Object.keys(this.subjects)
  arrSubjects = arrSubjects.map(subject => (
     subject[0].toUpperCase() + subject.slice(1).replace('_', ' ')
  ))
  return arrSubjects
}

function getAverageMark(){
  let allMarks = []
  allMarks = allMarks.concat(...Object.values(this.subjects))
  const result = (allMarks.reduce((accum, current) => (accum + current)) / allMarks.length).toFixed(2)
  return result
}

function getStudentInfo(){
  return{
    course: this.course,
    name: this.name,
    averageMark: getAverageMark.bind(this)()
  }
}

function getStudentsNames(students){
  const arrNames = students.map(e => e.name).sort()
  return arrNames
}

function getBestStudent(students){
  const allAverageMarks = students.map(e=>(
    getAverageMark.bind(e)()
  ))
  const result = students[allAverageMarks.indexOf(String(Math.max(...allAverageMarks).toFixed(2)))].name
  return result
}

function calculateWordLetters(word){
  let letterCount = {}
  word = word.split('')
  letterCount = word.reduce((accum, current) => (accum[current] = accum[current] + 1 || 1, accum), {})
  return letterCount
}

console.log('1)повертає список предметів : ', getSubjects.bind(students[0])())

console.log('2)повертає середню оцінку по усім предметам для переданого студента : ', getAverageMark.bind(students[0])())

console.log('3)повертає інформацію загального виду по переданому студенту : ', getStudentInfo.bind(students[0])())

console.log('4)повертає імена студентів у алфавітному порядку : ', getStudentsNames(students))

console.log('5)повертає кращого студента зі списку по показнику середньої оцінки : ', getBestStudent(students))

console.log('6)повертає обєкт, в якому ключі це букви у слові, а значення – кількість їх повторень(тест) : ', calculateWordLetters("тест"))