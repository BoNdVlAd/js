const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary){
  const tax = salary * this.tax
  return tax
}

function getMiddleTaxes(){
  const averageTax = this.tax * this.middleSalary 
  return averageTax
}

function getTotalTaxes(){
  const totalTax = this.tax * this.middleSalary * this.vacancies
  return totalTax
}

function getMySalary(){
  setInterval(() => {
  const obj = {
    salary: Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500,
  }
  obj.taxes = this.tax * obj.salary
  obj.profit = obj.salary - obj.taxes
  console.log('4)',obj)
  }, 10000);
}

console.log('1) рахує скільки податків ви заплатите як IT-спеціаліст в Україні (1000) : ', getMyTaxes.call(ukraine, 1000))
console.log('1) рахує скільки податків ви заплатите як IT-спеціаліст в Латвії (1000) : ', getMyTaxes.call(latvia, 1000))
console.log('1) рахує скільки податків ви заплатите як IT-спеціаліст в Литві (1000) : ', getMyTaxes.call(litva, 1000))

console.log('2) рахує скільки у середньому податків платять IT-спеціалісти в Україні', getMiddleTaxes.call(ukraine))
console.log('2) рахує скільки у середньому податків платять IT-спеціалісти в Латвії', getMiddleTaxes.call(latvia))
console.log('2) рахує скільки у середньому податків платять IT-спеціалісти в Литві', getMiddleTaxes.call(litva))

console.log('3) рахує, скільки всього податків платять IT-спеціалісти в Україні', getTotalTaxes.call(ukraine))
console.log('3) рахує, скільки всього податків платять IT-спеціалісти в Латвії', getTotalTaxes.call(latvia))
console.log('3) рахує, скільки всього податків платять IT-спеціалісти в Литві', getTotalTaxes.call(litva))

getMySalary.call(ukraine)
getMySalary.call(latvia)
getMySalary.call(litva)