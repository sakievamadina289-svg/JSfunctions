// Тема 5–7: параметры, значения по умолчанию, rest, return, область видимости

// Значения по умолчанию
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet("Aida"); // Hello, Aida!
greet();       // Hello, Guest!

// Rest-параметры
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2));       // 3
console.log(sum(1, 2, 3, 4)); // 10

// Возврат объекта
function buildUser(name, group) {
  return {
    name,
    group,
    createdAt: new Date(),
  };
}
const user = buildUser("Aida", "SE-101");
console.log(user.name); // Aida

// Область видимости
const x = 10;

function demo() {
  const y = 20;
  console.log(x); // 10
  console.log(y); // 20
}

demo();
console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined

// let / const — блочная область видимости
if (true) {
  let blockVar = "внутри блока";
  const blockConst = "тоже внутри";
}
// console.log(blockVar); // ReferenceError
