// const credits = 23580;
// const pricePerDroid = 3000;

// const orderPieces = 4; // null or ceil.number
// let totalPrice = orderPieces * pricePerDroid; //totalPrice,  рассчитанную общую цену заказа.
// let balanceCredit = credits - totalPrice; // balanceCredit,  разницу между credits и totalPrice.
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const resultBuy = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// const ACCESS_DENIED = 'Недостаточно средств на счету!';
// let message;

// if (orderPieces > 0 && balanceCredit >= 0) {
//   message = resultBuy;
// } else if (orderPieces > 0 && balanceCredit < 0) {
//   message = ACCESS_DENIED;
// } else {
//   message = CANCELED_BY_USER;
// }
// // console.log(totalPrice);
// // console.log(balanceCredit);
// console.log(message);
// Д
const orderPieces = null;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

// Write code under this line
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (orderPieces > 0 && balanceCredit < 0) {
  message = ACCESS_DENIED;
} else {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
}

console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
