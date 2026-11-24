// Тема 10–11: чистые/нечистые функции и hoisting

// Чистая функция
function add(a, b) {
  return a + b; // всегда один результат для одних и тех же входов
}
console.log(add(2, 3)); // 5

// Нечистая функция — меняет внешнее состояние
let total = 0;

function addToTotal(value) {
  total += value;
}

addToTotal(5);
addToTotal(7);
console.log(total); // 12

// Hoisting: объявление функции поднимается
sayHello(); // работает

function sayHello() {
  console.log("Hello!");
}

// Функциональное выражение НЕ поднимается
try {
  sayBye(); // ReferenceError
} catch (e) {
  console.log("Ошибка:", e.message);
}

const sayBye = function () {
  console.log("Bye!");
};
sayBye(); // Bye!
