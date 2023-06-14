let sum = 0;
let N;
let M;

while (true) {
  N = Number(prompt('N має бути цілим числом!\nN має бути більшим за 0\nВведіть N: ').trim());
  if (!isNaN(N) && N % 1 === 0 && N > 0) {
    break;
  }
}

while (true) {
  M = Number(prompt('M має бути цілим числом!\nM має бути більшим за N\nВведіть M: ').trim());
  if (!isNaN(M) && M % 1 === 0 && M > N) {
    break;
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
