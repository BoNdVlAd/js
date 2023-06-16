const getMaxDigit = (number) => {
  const digits = String(number).split('');
  return Math.max(...digits);
};

const powNumber = (number, degree) => {
  if (degree === 0) {
    return 1;
  }
  let result = number;
  for (let i = 1; i < degree; i++) {
    result *= number;
  }
  return result;
};
const formatName = (name) => {
  let strName = name.split('');
  strName[0] = strName[0].toUpperCase();
  strName = strName.join('');
  return strName;
};
const salaryAfterTax = (salary, tax) => {
  return salary - salary * (tax / 100);
};

const getRandomNumber = (N, M) => {
  return Math.floor(Math.random() * (M - N) + N);
};

const countLetter = (letter, word) => {
  let count = 0;
  const arr = word.split('');
  for (let symbol of arr) {
    count += symbol.toLowerCase() === letter.toLowerCase() ? 1 : 0;
  }
  return count;
};
const convertCurrency = (money) => {
  if (money[money.length - 1] === '$') {
    money = money.replace('$', ' ');
    return Number(money) * 36 + 'UAH';
  } else if (money.slice(money.length - 3, money.length).toLowerCase() === 'uah') {
    money = money.slice(0, money.length - 3);
    return Number(money) / 36 + '$';
  } else {
    return 'Вибачте, але ми не конвертуємо таку валюту';
  }
};

const getRandomPassword = (len) => {
  let password = '';
  for (let i = 0; i < len; i++) {
    password += Math.floor(Math.random() * 10);
  }
  return password;
};

const deleteLetters = (letter, word) => {
  let arr = word.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === letter) {
      arr.splice(i, 1);
    }
  }
  return arr.join('');
};

const isPalyndrom = (word) => {
  word = word.replace(/\s/g, '');
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i].toLowerCase() !== word[word.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

const deleteDuplicateLetter = (sentence) => {
  let arr = sentence.replace(/\s/g, '').split('');
  for (let i = 0; i < arr.length; i++) {
    for (let q = i + 1; q < arr.length; q++) {
      if (arr[i].toLowerCase() === arr[q].toLowerCase()) {
        arr = arr.filter((a) => a.toLowerCase() !== arr[q].toLowerCase());
      }
    }
  }
  return arr;
};

console.log(getMaxDigit(1236));
console.log(powNumber(2, 4));
console.log(formatName('vlad'));
console.log(salaryAfterTax(1000, 19.5));
console.log(getRandomNumber(1, 10));
console.log(countLetter('а', 'Асталавіста'));
console.log(convertCurrency('3600U'));
console.log(getRandomPassword(8));
console.log(deleteLetters('a', 'blablabla'));
console.log(isPalyndrom('Я несу гусеня'));
console.log(deleteDuplicateLetter('Бісквіт був дуже ніжним'));
