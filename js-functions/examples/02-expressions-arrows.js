// Тема 3–4: функциональные выражения и стрелочные функции

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // 12

const square = function (x) {
  return x * x;
};

const squareArrow = (x) => {
  return x * x;
};

const square2 = x => x * x;

const add = (a, b) => a + b;
const greet = () => console.log("Hello!");

console.log(square(4), squareArrow(4), square2(4)); // 16 16 16
console.log(add(1, 2)); // 3
greet();                // Hello!

// Лексический this: стрелочная функция берёт this снаружи
const timer = {
  seconds: 0,
  startNormal() {
    // обычная функция в обработчике получила бы свой this
    return function () { return this; };
  },
  startArrow() {
    return () => this; // this — это timer
  },
};

console.log(timer.startArrow()() === timer); // true
