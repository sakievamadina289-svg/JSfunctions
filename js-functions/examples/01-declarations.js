// Тема 1–2: объявление функций, параметры и return

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Aida");   // Hello, Aida!
greet("Nurlan"); // Hello, Nurlan!

function add(a, b) {
  const sum = a + b;
  return sum;
}

console.log(add(2, 3)); // 5

// Ранний выход
function divide(a, b) {
  if (b === 0) {
    console.log("Cannot divide by zero");
    return;
  }
  return a / b;
}

console.log(divide(10, 2)); // 5
console.log(divide(1, 0));  // Cannot divide by zero, затем undefined

// Без return
function noReturn(a, b) {
  const result = a + b;
}
console.log(noReturn(2, 3)); // undefined
