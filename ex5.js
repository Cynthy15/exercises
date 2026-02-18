
//Exercise 5: Advanced Searching with find and findIndex
const products= [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 499 },
    { id: 3, name: "Tablet", price: 299 },
    { id: 4, name: "Headphones", price: 199 },
    { id: 5, name: "Speaker", price: 1500 }
];

//a 
let foundProduct= products.find(product => product.id === 2); //"==="strictly equal operators checks datatypes and "== "compares the datatypes and values
console.log(foundProduct);

//b
let foundIndex= products.findIndex(product => product.price > 1000);
console.log(foundIndex); // returns -1 if no product is found with price greater than 1000
