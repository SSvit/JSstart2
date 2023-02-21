// const name = 5; 

// console.log('До');
// alert('вікно');
// console.log('Після')


// const subscription = confirm('Продовжити підписку');
// console.log(subscription)

// let subscription = prompt('Введіть кількість товару');
// subscription = Number(subscription);
// console.log(subscription);
// console.log(typeof subscription);

// let elrmentWidth = '50px';
// const result = Number.parseInt(elrmentWidth);
// console.log(result);

// elrmentWidth = Number.parseInt(elrmentWidth);

// console.log('elrmentWidth:', elrmentWidth);

// let elrmentHeidht = '200.74px';
// elrmentHeidht = Number.parseFloat(elrmentHeidht);

// console.log('elrmentHeidht:', elrmentHeidht);

// let salery = 1300.16472;
// salery = salery.toFixed(3);
// console.log(salery);

// let quantity = '30';
// let value = 'Цей рядок неможливо привести  до числа';

// console.log(Number(false));
// console.log(Number(true));
// console.log(Number('5'));
// console.log(Number('jhhjkl'));
// console.log(Number('value'));


// console.log(Math.PI);

// const base = 2;
// const power = 5;

// // const result = Math.pow(2, 3);
// const result = Math.pow(base, power);
// //приведення до степеня

// console.log(result);


//Задачка 1
// let base = prompt('Давай число');
// base = Number(base);

// console.log(base);

// let power = prompt('Давай степінь');
// power = Number(power);

// console.log(power);

// const result = base ** power;

// console.log(result);

// Задача 2 Генеруємо псевдовипадкове число

// const max = 80;
// const min = 10;


// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// Приклад написання коду для зміни фону

// const colors = ['tomato', 'teal', 'orange', 'deepping', 'skyblue'];
// const max = colors.length -1;
// const min = 0;
//  const index = Math.round(Math.random() * (max - min) + min);

//  const color = colors[index];

//  console.log(color);

//  document.body.style.backgroundColor = color;

// const massage = 'В цьому рядку 25 символів';

// console.log(massage.length);

// const firstName = 'Chelsy';
// const lastName = 'Enerald';
// const fullName = firstName + ' ' + lastName;

// // console.log(fullName);


// const room = 716;
// const type = 'VIP';

// //Метод сшивання - менш зрозумілий

// // const welcomeMsg ='Гість' + 
// // firstName + 
// // 'селиться в ' + 
// // type + 
// // ' номер ' + 
// // room;

// // шаблонний метод - зрозумілий
// const welcomeMsg = `Гість ${firstName} ${lastName} селиться в ${type} номер ${room}`;
// console.log(welcomeMsg);

// const quantity = 15;
// const orderMsg = `Ви замовляєте ${quantity} холодильників`;

// console.log(orderMsg);

// //Регістр
// let brand = 'Samsung';
// brand = brand.toLowerCase();

// console.log(brand);

// //з випливаючим вікном
// let brand = prompt('Давай бренд');
// brand = brand.toLowerCase();

// console.log(brand);


// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж'

// const string1 = 'Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!';
// const string2 = 'Найбільша РОЗПРОДАЖА цього тижня, не пропустіть!'
// const string3 = 'Рекламна компанія #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.toLowerCase().includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));


// const salary = 1500;

// if (salary <= 500) {
//     console.log('Рівень 1');
// } else if (salary > 500 && salary <= 1500) {
//     console.log('Рівень 2');
// } else if (salary > 1500 && salary < 3000) {
//     console.log('Рівень 3');
// } else {
//     console.log('Рівень 4');
// }

// console.log('Рівень 5 - вирішальний');


// const balance = -1000;
// // let message;

// // if (balance >= 0) {
// //     message = 'Позитивний баланс';
// // } else {
// //     message = 'Негативний баланс';
// // }

// const message = balance >= 0 ? 'Позитивний баланс' : 'Негативний баланс';

// console.log(message);


//?Задача, ріщення якої можна замінити switch

// const stars = 1;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такої кількості зірок немає');
// }

// switch (stars) {
//     case 1:
//         price = 20;
//         break;

//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log('Такої кількості зірок немає');
// } 

// console.log(price);


// const stars = 1;
// let price;

// if (stars === 1 ||stars === 2 ) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такої кількості зірок немає');
// }


// console.log(price);


// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;

//     case 3:
//     case 4:
//         price = 30;
//         break;
    
//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log('Такої кількості зірок немає');
// } 

// console.log(price);


// const option = 2;
// let message = '';

// switch(option) {
//     case 1:
//         message = 'Ви можете забрати товар завтра з 12.00 в нашому офісі';
//         break;
//     case 2:
//         message = 'Курєр доставить замовлення з 9.00 до 18.00';
//         break;

//     default:
//         message = 'Ви можете забрати товар завтра з 12.00 в нашому офісі';
// }

// console.log(message);



// for (let i = 0; i< 10; i += 1) {
//     console.log(i);
// }

// console.log('sdcfvgbf');


// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i +=1) {
//     const salary = Math.round(Math.random() * (maxSalary) - (minSalary) + (minSalary));

//     console.log(`ЗП робітника номер ${i} - ${salary}`);

//     totalSalary += salary;
// }

// console.log('totalSalary: ', totalSalary);


//задачка
// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 2) {
//      console.log(i);

//     if (i % 2 === 0) {
//         console.log('парне число: ', i);

//         total += i;
//     }
// }

// console.log('total: ', total);

// логіка від обратного (спочатку перевіряємо поганий кейс, якщо він не виконався виконуєтьсчя весь інший код)

// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 2) {
//      console.log(i);

//     if (i % 2 !== 0) {
//         console.log('непарне число: ', i);
//         continue;
//     }

//     console.log('парне число: ', i);

//     total += i;
// }

// console.log('total: ', total);


// let balance = 10000;
// const payment = 2000;

// console.log(`Загальна сума замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку.`);

// if (payment <= balance) {
//     balance -= payment;

//     console.log('Все добре, знімаємо гроші. Дякуємо за покупку');
//     console.log(`На рахунку залишилося ${balance} кредитів.`);
// } else {
//     console.log('На рахунку недостатньо коштів для проведення операції!');
// }

// console.log('Операція завершена!');