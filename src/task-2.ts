// Задача 2

// Опис: Є функція, яка приймає суму (число) та тип валюти.

// function convertCurrency({amount, currency}) {
//   console.log(`Converting ${amount} to ${currency}`);
// }

// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.

interface ConvertCurrency {
  amount: number;
  currency: 'USD' | 'EUR' | 'UAH';
}

function convertCurrency({ amount, currency }: ConvertCurrency): void {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrency({
  amount: 1000,
  currency: 'EUR',
});
