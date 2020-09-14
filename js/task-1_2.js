const stok = 100;
const invoice = 100; //50,100,150
const message =
  invoice > stok
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);
