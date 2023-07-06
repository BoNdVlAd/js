let dismissedStudents = {}

class Student{
  constructor(course, university, fullName, marks){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
  }

  getInfo(){
    console.log(`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`)
  }

  get getMarks(){ 
    return this.marks
  }

  set setMark(mark){
    if(this.marks !== null){
      this.marks.push(mark)
    }
    return this.marks
  }

  getAverageMark(){
    if(this.marks !== null){
      return this.marks.reduce((accum, current) => (accum + current)) / this.marks.length
    }
    return this.marks
  }

  dismiss(){
    dismissedStudents[this.fullName] = this.marks
    this.marks = null
  }

  recover(){
    this.marks = dismissedStudents[this.fullName]
  }
}

let Ostap = new Student('1', 'Вищої Школи Психотерапії м.Одеса', 'Остап Родоманський Бендер', [5, 4, 4, 5])

Ostap.getInfo()

console.log(Ostap.getMarks)

Ostap.setMark = 5
console.log(Ostap.marks)

console.log(Ostap.getAverageMark())

console.group("Студента відраховано")
Ostap.dismiss()

console.log(Ostap.getMarks)

Ostap.setMark = 5
console.log(Ostap.marks)
console.groupEnd()

console.group("Студента поновлено")
Ostap.recover()

console.log(Ostap.getMarks)

Ostap.setMark = 5
console.log(Ostap.marks)
console.groupEnd()

class BudgetStudent extends Student{
  constructor(course, university, fullName, marks){
    super(course, university, fullName, marks)
      setInterval(() => {
        this.getScholarship()
      }, 30000);
  }

  getScholarship(){
    if(!(this.marks === null)){
      console.log('Ви отримали 1400грн стипендії')
    }
  }
}

let Dmytro = new BudgetStudent('4', 'Вищої Школи Психотерапії м.Одеса', 'Дмитро Високооцінковий', [5, 5, 5, 5])
console.group('Студент на бюджетній формі навчання')
Dmytro.getInfo()
