// Задача 5

// function createUser({name, age}) {
//   return {
//     name,
//     age,
//     isAdmin: false
//   };
// }

// createUser({ name: "Alice", age: 30 });

// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.

interface CreateUse {
  name: string;

  age: number;
  isAdmin?: boolean;
}

function createUser({ name, age }: CreateUse) {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: 'Alice', age: 30 });
