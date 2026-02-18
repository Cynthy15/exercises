
// SECTION H: Advanced Challenges

// exercise 19: Remove Duplicates Without Set

const data = [1, 5, 2, 8, 5, 1, 9, 2];

// using filter + indexOf
const uniqueData = data.filter((value, index) => 
  data.indexOf(value) === index
);
console.log(uniqueData);

// exercise 20: Recreate reduce Using a Loop

function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  
  return accumulator;
}

// Test myReduce
const numbers = [10, 20, 30];
const sum = myReduce(numbers, (acc, num) => acc + num, 0);
console.log("Sum using myReduce:", sum);

// exercise 21: Shallow vs Deep Copy

const company = [
  {name: "A", details: {city: "NY"}}
];

// Shallow Copy
const spreadCopy = [...company];
spreadCopy[0].details.city = "LA";

console.log("Original Company (after shallow change):", company);
console.log("Spread Copy:", spreadCopy); // Both changed because nested object is still referenced


// Deep Copy
const deepCopy = JSON.parse(JSON.stringify(company));
deepCopy[0].details.city = "Chicago";

console.log("Original Company (after deep copy change):", company);
console.log("Deep Copy:", deepCopy); // Only deepCopy changed because it is fully independent

