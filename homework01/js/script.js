//goods
const apples = 15.678;
const mangoes = 123.965;
const peaches = 90.2345;

max = Math.max(apples, mangoes, peaches); //maximum number
min = Math.min(apples, mangoes, peaches); //minimum number
const sum = apples + mangoes + peaches; //sum of products
const sumInt = Math.floor(apples) + Math.floor(mangoes) + Math.floor(peaches); //sum of products without kopiyki
const hundreds = Math.round(sumInt / 100) * 100; //the amount of goods is rounded to the nearest hundred
const even = Math.floor(sum) % 2 === 0 ? true : false; //is the sum of all goods an even
const rest = 500 - sum;
const average = ((apples + mangoes + peaches) / 3).toFixed(2);
const discount = Math.round(100 * Math.random(100)); // random discount(0% - 100%)
const priceAfterDiscount = (sum - sum * (discount / 100)).toFixed(2);
const profit = Math.floor(sum) / 2 - Math.floor(sum - priceAfterDiscount);

console.log(`Максимальна ціна: ${max} \n 
Мінімальна ціна: ${min} \n
Вартість всіх товарів: ${sum} \n
Вартість всіх товарів без копійок: ${sumInt} \n
Сума всіх товарів, округлена до сотень: ${hundreds} \n
Cума всіх товарів, парне число: ${even} \n
Сума решти: ${rest}грн \n
Середнє значення: ${average} \n
Ваша знижка: ${discount}%, тому до сплати: ${priceAfterDiscount} \n
Ціна була ${sum.toFixed(2)}, знижка склала ${discount}%, клієнт заплатив на ${Math.floor(
  sum - priceAfterDiscount,
)} меньше, собівартість = ${Math.floor(sum)} / 2 -> ${Math.floor(sum) / 2}. Чистий прибуток = ${
  Math.floor(sum) / 2
} - ${Math.floor(sum - priceAfterDiscount)} -> ${profit}
Чистий прибуток: ${profit}
`);
