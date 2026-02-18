
//SECTION : Objects Inside Arrays(Real-World Data Structures)
//Exercise 13: Sorting Objects
const users = [{name: "Zoe", age: 30}, {name: "Adam", age: 25}, {name: "Charlie", age: 30}];

//a
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log(sortedByAge);
const sortedByAgeAndName = [...users].sort((a, b) => {
    if (a.age !== b.age) {
        return a.age - b.age;
    }
    return a.name.localeCompare(b.name);
});
console.log(sortedByAgeAndName);
