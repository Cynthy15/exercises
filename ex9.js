
// Exercise 9: Flattening Arrays(flats)
const nestedList = [1, [2, 3], [4, [5, 6]], 7];
//a
const flattenedOnce = nestedList.flat();
console.log(flattenedOnce);
const fullyFlattened = nestedList.flat(Infinity);
console.log(fullyFlattened);
