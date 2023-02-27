// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// console.table(friends);

// friends[1] = 'kjhgfcvbn';

// console.table(friends[2]);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);
// // a дорівнює b

// console.log([1, 2, 3] === [1, 2, 3]);
// //а не дорівнює b, тому що це посилання, складний тип

// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// console.table(friends);
// // // 1 спосіб
// // const lastIndex = friends.length - 1;

// // for (let i = 0; i <= lastIndex; i += 1) {
// //     console.log('lkjh');
// // }

// // 2 спосіб
// for (let i = 0; i < friends.length; i += 1) {
//     friends[i] += '-1';
// // щоб змінити елемент масиву
// }

// console.table(friends);
// // Якщо потрібно зиінити елемент масиву використовуємо for

// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// // console.table(friends);

// // щоб перебрати елементи
// for (const friend of friends) {
//     console.log(friend);
// }

// const cart = [23, 45, 32, 67, 89, 65];
// let total = 0;

// // // або
// // for (let i = 0; i < cart.length; i += 1) {
// //     console.log(cart[i]);
// // }

// // total += cart[i];

// // або
// for (const value of cart) {
//     total += value;
// }

// console.log('Total: ', total);

// const cart = [23, 45, 32, 67, 89, 65];

// for (let i = 0; i < cart.length; i += 1) {
// cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);

// const numbers = [1, 5, 8, 9, 10, 15, 22, 14, 56, 42, 84];
// let total = 0;

// // 1 спосіб
// for (let i = 0; i < numbers.length; i +=1) {
//     const number = numbers[i];
//     console.log(number);

//     if (number % 2 === 0){
//         console.log('Парне!');

//         total += number;
//     }
// }

// console.log(total);

// 2 спосіб

// for (const number of numbers) {
//     console.log(number);

//     if (number % 2 === 0) {
//             console.log('Парне!');
//             total += number;
//         }
// }

// console.log('Total:', total);

// const logins = ['rrDoge', 'jjKivi', 'ssPoly', 'bbKet'];
// const loginToFind = 'ssPoly';
// // 1, 2 спосіб
// let message = `Користувач ${loginToFind} не найден.`;

// // 1 спосіб
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('Ура! рівні!!!');
//         message = `Користувач ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log(message);

// // 2 спосіб
// for (const login of logins) {
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('Ура! рівні!!!');
//         message = `Користувач ${loginToFind} найден.`;
//         break;
//     }

// }
// console.log(message);

// // 3 спосіб (декларативний код)
// const message = logins.includes(loginToFind)
// ? `Користувач ${loginToFind} найден.`
// : `Користувач ${loginToFind} найден.`;

// console.log(message);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('smallestNumber: ', smallestNumber);

// const friends = ['Mango', 'Poly', 'Kivi', 'Ajax'];

// const string = friends.join(', ');
// console.log(friends);
// console.log(string);

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     // if (letter === letter.toLowerCase()) {
//     //     console.log('Ця літера в нижньому регістрі! - ', letter);

//     //     invertedString += letter.toUpperCase();
//     // } else {
//     //     invertedString += letter.toLowerCase();
//     // }

//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log(invertedString);

// const title = 'Top 10 benefits of React framework';

// // const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);

// // const words = normalizedTitle.split(" ");
// // console.log(words);

// // const slug = words.join('-');
// // console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);

// const cards = [
//   'Картка-1',
//   'Картка-2',
//   'Картка-3',
//   'Картка-4',
//   'Картка-5',
// ];

// console.table(cards);

// const cardToRemove = 'Картка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// console.log(cards.splice(index, 1));

// console.table(cards);

// const cardToInsert = 'Картка-6';
// const index = 5;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// const cardToUpdate = 'Картка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Оновлена карта-4');
// console.table(cards);
