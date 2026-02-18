

//SECTION C: Transformation and Reordering
//Exercise 7: Sorting and Reversing

const dataPoints=[42, 10, 500, 2, 77];
//a
const ascendingSorted = [...dataPoints].sort((a, b) => a - b); // sorts in ascending order
console.log(ascendingSorted);

//b
const descendingSorted = [...dataPoints].sort((a, b) => b - a); // sorts in descending order
console.log(descendingSorted);
//c
const reversed = [...dataPoints].reverse(); // reverses the original array order
console.log(reversed);
