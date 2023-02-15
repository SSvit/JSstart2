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

const colors = ['tomato', 'teal', 'orange', 'deepping', 'skyblue'];
const max = colors.length -1;
const min = 0;
 const index = Math.round(Math.random() * (max - min) + min);

 const color = colors[index];

 console.log(color);

 document.body.style.backgroundColor = color;