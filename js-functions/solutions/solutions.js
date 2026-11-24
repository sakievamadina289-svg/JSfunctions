// Решения заданий. Запуск: node solutions/solutions.js

// Задание 1
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet("Aida"); // Hello, Aida!
greet();       // Hello, Guest!

// Задание 2
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}
console.log(add(2, 3), subtract(5, 2), multiply(3, 4), divide(10, 2), divide(1, 0));
// 5 3 12 5 null

// Задание 3
const area = function (width, height) {
  return width * height;
};
console.log(area(3, 4)); // 12

// Задание 4
const isEven = n => n % 2 === 0;
console.log(isEven(4), isEven(7)); // true false

// Задание 5
function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3), sumAll()); // 6 0

// Задание 6
function createUser(name, group = "SE-101") {
  return { name, group, createdAt: new Date() };
}
console.log(createUser("Aida").group); // SE-101

// Задание 7
function forEachTimes(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}
forEachTimes(4, i => console.log(i * i)); // 0 1 4 9

// Задание 8
function makeMultiplier(n) {
  return x => x * n;
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5), triple(5)); // 10 15

// Задание 9
function createCounter(start = 0) {
  let count = start;
  return {
    increment() { count++; return count; },
    decrement() { count--; return count; },
    value() { return count; },
  };
}
const c = createCounter(10);
c.increment();
c.increment();
c.decrement();
console.log(c.value()); // 11

// Задание 10
// f1 — чистая: зависит только от аргументов, без побочных эффектов.
// f2 — нечистая: меняет переданный массив (побочный эффект push).
// f3 — нечистая: результат зависит не только от аргументов (Math.random).
// f4 — нечистая: выводит в консоль (побочный эффект).

// Задание 11
// Ожидаемый вывод:
//   first
//   TypeError: second is not a function
// Объявление function first поднимается целиком, поэтому вызов работает.
// var second объявлена и поднята как undefined, а присваивание функции
// происходит позже — до этого вызов second() ломается.
console.log(first());
function first() { return "first"; }
try {
  console.log(second());
} catch (e) {
  console.log(e.name + ":", e.message);
}
var second = function () { return "second"; };
