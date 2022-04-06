let array1 = [];
let array2 = [];

let n = Number(prompt('Введите количество чисел в первом массиве: '));
while (n < 1) {
  n = Number(prompt('Некорректное количество, попробуйте еще раз: '));
}

console.log('Заполните первый массив:\n');
for (i = 0; i < n; i++) {
  array1.push(Number(prompt(i+1 + ') ')));
}

let m = Number(prompt('Введите количество чисел во втором массиве: '));
while (n < 1) {
  m = Number(prompt('Некорректное количество, попробуйте еще раз: '));
}

console.log('Заполните второй массив:\n');
for (i = 0; i < m; i++) {
  array2.push(Number(prompt(i+1 + ') ')));
}

function compareArrays(arr1, arr2) {
  return (arr1.length === arr2.length) && (arr1.every((v, i) => arr2[i] === v))
}

let result = compareArrays(array1, array2);
console.log(result);