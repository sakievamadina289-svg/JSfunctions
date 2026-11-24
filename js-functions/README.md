# Функции в JavaScript — конспект, примеры и задания

Этот репозиторий — материал по теме «Функции в JavaScript»: теория, рабочие примеры и задания с решениями.

## Структура

```
js-functions/
├── README.md          — конспект по теме
├── examples/          — запускаемые примеры к каждому разделу
├── exercises/         — задания для самостоятельной работы
└── solutions/         — решения заданий
```

Запуск любого примера:

```bash
node examples/01-declarations.js
```

## Конспект

### 1. Что такое функция

Функция — многократно используемый блок кода, который:

- принимает входные данные (параметры / аргументы),
- выполняет работу,
- опционально возвращает результат.

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Aida");   // Hello, Aida!
greet("Nurlan"); // Hello, Nurlan!
```

- `name` — **параметр** (переменная внутри функции).
- `"Aida"`, `"Nurlan"` — **аргументы** (реальные значения при вызове).

### 2. Объявление функции (Function Declaration)

```js
function add(a, b) {
  const sum = a + b;
  return sum;
}

const result = add(2, 3); // 5
```

- `return` возвращает значение из функции.
- Без `return` функция возвращает `undefined`.

**Ранний выход:**

```js
function divide(a, b) {
  if (b === 0) {
    console.log("Cannot divide by zero");
    return; // выход из функции
  }
  return a / b;
}
```

### 3. Функциональное выражение (Function Expression)

Функцию можно сохранить в переменную:

```js
const multiply = function (a, b) {
  return a * b;
};

multiply(3, 4); // 12
```

| Объявление | Выражение |
|---|---|
| `function add() {}` | `const add = function () {};` |

Выражения удобны, когда функцию нужно передать как аргумент, создать условно или контролировать момент её создания (нет «сюрпризов» с hoisting).

### 4. Стрелочные функции (Arrow Functions)

```js
// обычное выражение
const square = function (x) {
  return x * x;
};

// стрелочная с блоком
const squareArrow = (x) => {
  return x * x;
};

// стрелочная с одним выражением — return не нужен
const square2 = x => x * x;

const add = (a, b) => a + b;
const greet = () => console.log("Hello!");
```

**Важно:** у стрелочных функций нет собственного `this` — он берётся из внешней области (лексический `this`). Для методов объектов и классов лучше обычные функции; для коллбэков (`map`, `filter`, `forEach`) стрелочные очень удобны.

### 5. Параметры, аргументы, значения по умолчанию

**Позиционные параметры** — порядок важен:

```js
function printUser(name, age) {
  console.log(`${name} is ${age} years old.`);
}
printUser("Aida", 20);
```

**Параметры по умолчанию:**

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet("Aida"); // Hello, Aida!
greet();       // Hello, Guest!
```

**Rest-параметры (`...`)** — собирают все аргументы в массив:

```js
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
sum(1, 2);       // 3
sum(1, 2, 3, 4); // 10
```

### 6. Оператор `return`

- `return` немедленно завершает функцию.
- Возвращается одно значение, но это может быть объект или массив.

```js
function buildUser(name, group) {
  return { name, group, createdAt: new Date() };
}
const user = buildUser("Aida", "SE-101");
console.log(user.name); // "Aida"
```

Если `return` забыть — будет `undefined`:

```js
function add(a, b) {
  const result = a + b;
  // нет return!
}
console.log(add(2, 3)); // undefined
```

### 7. Область видимости (Scope)

Область видимости — это место, где переменная доступна.

- Переменные, объявленные внутри функции, — локальные для неё.
- Функции создают собственную область видимости.
- Внутренние функции видят внешние переменные, но внешний код не видит внутренности функции.

```js
const x = 10; // глобальная (в этом файле)

function demo() {
  const y = 20; // локальная для demo
  console.log(x); // 10
  console.log(y); // 20
}

demo();
console.log(x); // 10
// console.log(y); // ReferenceError
```

- `let` и `const` — блочная область видимости (`if`, `for`, `{}`).
- `var` — функциональная, может приводить к странностям. Лучше использовать `let` / `const`.

### 8. Функции — «первоклассные граждане» (First-Class Citizens)

Функции в JS — обычные значения:

- их можно хранить в переменных,
- передавать как аргументы,
- возвращать из других функций,
- класть в массивы и объекты.

**Коллбэки:**

```js
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

repeat(3, (i) => console.log("Hello", i));
```

Так устроены `setTimeout`, `addEventListener`, `map`, `filter` и многие другие.

**Возврат функции:**

```js
function makeMultiplier(n) {
  return function (x) {
    return x * n;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
double(5); // 10
triple(5); // 15
```

### 9. Замыкания (Closures)

Замыкание — когда внутренняя функция «помнит» переменные внешней, даже после того как внешняя завершила работу.

```js
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
counter2(); // 1 — у каждого счётчика свой count
```

Замыкания используются для инкапсуляции, фабрик функций, модулей и многих продвинутых паттернов.

### 10. Чистые и нечистые функции

**Чистые (pure):**
- результат зависит только от аргументов,
- нет побочных эффектов (не меняют внешние переменные, DOM и т. п.).

```js
function add(a, b) {
  return a + b;
}
```

Плюсы: легко тестировать, легко понимать, нет скрытого поведения.

**Нечистые (impure):** зависят от внешнего состояния или меняют его.

```js
let total = 0;
function addToTotal(value) {
  total += value; // меняет внешнюю переменную
}
```

Нечистые функции иногда необходимы (UI, логирование, сеть), но их стоит держать под контролем.

### 11. Hoisting (кратко)

- Объявления функций (`function name() {}`) поднимаются: их можно вызывать до объявления.
- Функциональные выражения и стрелочные функции в `let` / `const` до объявления недоступны.

```js
sayHello(); // работает

function sayHello() {
  console.log("Hello!");
}
```

```js
sayHello(); // ❌ ReferenceError

const sayHello = function () {
  console.log("Hello!");
};
```

Полезная привычка: определять функции до использования.

## Краткое резюме

| Понятие | Суть |
|---|---|
| Declaration | `function name(...) {...}` |
| Expression | `const name = function(...) {...};` |
| Arrow | `const name = (...) => {...};` — без собственного `this` |
| Параметр vs аргумент | определение vs реальное значение при вызове |
| `return` | возвращает значение; без него — `undefined` |
| Scope | функции создают область видимости |
| First-class | функции — обычные значения |
| Closure | функция помнит внешние переменные |
| Pure vs impure | предсказуемая vs побочные эффекты |
| Hoisting | объявления функций поднимаются |
