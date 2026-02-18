

//Exercise 8: Concatenation, Joining, and Slicing
const arr1=["A", "B", ];
const arr2=["C", "D",];
const sentenceParts=["Hello", "world", "this", "is", "great"];
//a
const combined = arr1.concat(arr2);
console.log(combined);
//b
const sentence = sentenceParts.join(" ");
console.log(sentence);
//c
const middleThree = sentenceParts.slice(1, 4);
console.log(middleThree);
