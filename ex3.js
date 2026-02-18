
//Exercise three: Shallow Copying of Arrays and the reference trap

//a
const originalScores=[90,85,78];
//b
const referenceCopy= originalScores; // reference copy, not a new array
console.log(referenceCopy);
//c 
referenceCopy[0]= 100;
console.log("Original Scores:", originalScores);
console.log("Reference Copy:", referenceCopy);

//d
const spreadCopy= [...originalScores]; // creates a new array with the same elements
//e
spreadCopy[0]= 50;
console.log("Original Scores:", originalScores);
console.log("Spread Copy:", spreadCopy);
