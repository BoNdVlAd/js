let sum = 0;

let N = Number(prompt('N:').trim());
if (isNaN(N) || N % 1 !== 0) {
  while (true) {
    N = Number(prompt('N має бути цілим числом!\nВведіть N ще раз: '));
    if (!isNaN(N) && N % 1 === 0) {
      break;
    }
  }
}

let M = Number(prompt('M:').trim());
if (isNaN(M) || M % 1 !== 0) {
  while (true) {
    M = Number(prompt('M має бути цілим числом!\nВведіть M ще раз: '));
    if (!isNaN(M) && M % 1 === 0) {
      break;
    }
  }
}

let skipEven = confirm('Чи потрібно пропускати парні числа?');

for (let index = N; index <= M; index++) {
  if (skipEven) {
    sum += index % 2 === 0 ? 0 : index;
  } else {
    sum += index;
  }
}

console.log(`N=${N}, M=${M}\nпропускати парні=${skipEven}\nсума чисел : ${sum}`);
alert(`N=${N}, M=${M}\nпропускати парні=${skipEven}\nсума чисел : ${sum}`);
