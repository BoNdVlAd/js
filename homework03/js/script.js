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
  strName = strName.map(e=>e.toLowerCase())
  strName[0] = strName[0].toUpperCase();
  strName = strName.join('');
  return strName;
};
const salaryAfterTax = (salary, tax) => {
  return salary - salary * (tax / 100);
};

const getRandomNumber = (N, M) => {
  M += 1
  return Math.floor(Math.random() * (M - N)) + N
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
  return arr.join('');
};

console.log(`Функція №1(найбільша цифра(1236)): ${getMaxDigit(1236)}`);
console.log(`Функція №2(ступінь(2 у 4 степені)): ${powNumber(2, 4)}`);
console.log(`Функція №3(робить першу букву великою(vLAD)): ${formatName('vLAD')}`);
console.log(
  `Функція №4(зарплата після оплати податку(salary:1000; tax:19.5%)): ${salaryAfterTax(
    1000,
    19.5,
  )}`,
);
console.log(`Функція №5(випадкове число у межах(9-10)): ${getRandomNumber(9, 10)}`);
console.log(
  `Функція №6(скільки разів буква повторюється в слові(\'а\' у слові \'Асталавіста\')): ${countLetter(
    'а',
    'Асталавіста',
  )}`,
);
console.log(`Функція №7,8(конвертює валюту(3600uah)): ${convertCurrency('3600uah')}`);
console.log(`Функція №9(створює випадковий пароль(довжина = 8)): ${getRandomPassword(8)}`);
console.log(
  `Функція №10(видаляє всі букви(букву \'a\' у слові \'blablabla\')): ${deleteLetters(
    'a',
    'blablabla',
  )}`,
);
console.log(
  `Функція №11(перевіряє, чи є слово паліндромом(Я несу гусеня)): ${isPalyndrom('Я несу гусеня')}`,
);
console.log(
  `Функція №12(видаляє з речення букви, що повторюються(Бісквіт був дуже ніжним)): ${deleteDuplicateLetter(
    'Бісквіт був дуже ніжним',
  )}`,
);
