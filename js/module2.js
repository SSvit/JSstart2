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
// // for (let i = 0, i < cart.length; i += 1) {
// //     console.log(cart[i]);
// // }

// // total += cart[i];

// // або
// for (const value of cart) {
//     total += value;
// }

// console.log('Total: ', total);


