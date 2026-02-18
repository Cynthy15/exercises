

//Exercise 14: Mapping and Filtering Objects

const userNames = users.map(user => user.name);
console.log(userNames);

const usersOlderThan28 = users.filter(user => user.age > 28);
console.log(usersOlderThan28);
