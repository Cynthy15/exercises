
//SECTION D: Functional Programming (Higher-Order METHODS)
//Exercise 10: Mapping Data(map)
const pricesUSD = [10.50, 20.00, 5.25];
//a
const exchangeRate = 1.3; 
const pricesEUR = pricesUSD.map(price => price * exchangeRate);
console.log(pricesEUR);

//b
const priceStrings = pricesUSD.map(price => `Item price: $${price.toFixed(2)}`);
console.log(priceStrings);
