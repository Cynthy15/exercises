
//Exercise 12: Aggregating Data(reduce)
const pricesUSD2 = [10.50, 20.00, 5.25];
//a
const total = pricesUSD2.reduce((sum, price) => sum + price, 0);
console.log(total);
const totalCost = pricesUSD2.reduce((sum, price) => sum + price, 0);
console.log(`Total cost: $${totalCost.toFixed(2)}`);
//b
const maxPrice = pricesUSD2.reduce((max, price) => price > max ? price : max);
console.log(`Max price: $${maxPrice.toFixed(2)}`);
//c
const countAbove15 = pricesUSD2.reduce((count, price) => price > 15 ? count + 1 : count, 0);
console.log(`Prices greater than $15: ${countAbove15}`);
