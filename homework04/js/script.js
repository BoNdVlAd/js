const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// choose men from the array
let men = students.slice(0, 2)
men = [...men, ...students.slice(4, 5)]
// choose women from the array
let women = students.slice(2, 4)
women = [...women, ...students.slice(5, 6)]

let pairs = []
let pairsAndProjects = []
let studentAndMark = []
let pairsAndRandomMarks = []

const pair = (men, women) => {
  const result = men.map((e, i)=>(
    [e, women[i]]
  ))
  return result;
}

const projects = (pairs, themes) => {
  const result = pairs.map((e, i)=>(
    [`${e[0]} i ${e[1]}`, themes[i]]
  ))
  return result;
}

const mark = (students, marks) => {
  const result = students.map((e, i)=>(
    [e, marks[i]]
  ))
  return result;
}

const randomMark = (pairsAndProjects) => {
  const result = pairsAndProjects.map((e, i)=>(
    e.concat((Math.floor(Math.random() * 5) + 1))
  ))
  return result;
}

pairs = pair(men, women)
console.log('Пари :\n', pairs)

pairsAndProjects = projects(pairs, themes)
console.log('Пари та теми проєктів :\n', pairsAndProjects)

studentAndMark = mark(students, marks)
console.log('Студент з оцінкою :\n', studentAndMark)

pairsAndRandomMarks = randomMark(pairsAndProjects)
console.log('Пари з випадковими оцінками :\n', pairsAndRandomMarks)

