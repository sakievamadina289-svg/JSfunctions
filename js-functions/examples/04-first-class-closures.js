// Тема 8–9: функции как значения, коллбэки, замыкания

// Коллбэк
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

repeat(3, (i) => {
  console.log("Hello", i);
});

// Возврат функции
function makeMultiplier(n) {
  return function (x) {
    return x * n;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Замыкание: счётчик
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1 — независимый count

// Функции в массиве и объекте
const operations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
};
console.log(operations.add(5, 3)); // 8
console.log(operations.sub(5, 3)); // 2
