// Задача 7

// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
// ];

// Завдання:

// Створіть інтерфейс User, який описує структуру об’єкта з іменем і віком.
// Типізуйте змінну users.
// Додайте ще одного користувача до масиву, дотримуючись структури.
// Переконайтеся, що TypeScript не дозволяє додати об’єкт без обов’язкових полів (name, age).

interface Users {
  name: string;
  age: number;
}

const users: Users[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

users.push({ name: 'Galyna', age: 18 });
console.log(users);
