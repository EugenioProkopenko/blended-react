// Задача 18

import axios from 'axios';

// Функція fetchUsers повертає проміс, який через axios отримує список користувачів з API.

// import axios from "axios";

// const fetchUsers = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response.data;
// };

// const getUsers = async () => {
//   const users = await fetchUsers();
//   console.log(users);
// };

// getUsers();

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.
interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}
const fetchUsers = async (): Promise<Users[]> => {
  const response = await axios.get<Users[]>(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

const getUsers = async (): Promise<void> => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();
