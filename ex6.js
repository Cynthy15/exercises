
// Exercise 6: Checking Integrity(some,every)
//a
const userAges= [18, 24, 33, 16, 40];
let age;
console.log(userAges.some(age => age < 18));
//b
console.log(userAges.every(age => age >= 18));
//c
console.log(userAges.some(age => age % 5 === 0));
