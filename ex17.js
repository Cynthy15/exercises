// SECTION G: Mini Projects

// exercise17: (project)Student Result System

const students = [
  {name: "A", score: 85},
  {name: "B", score: 45},
  {name: "C", score: 92},
  {name: "D", score: 68}
];

// Filter Passed (score >= 70)
const passedStudents = students.filter(student => student.score >= 70);
console.log(passedStudents);

// Average Score using reduce()
const averageScore = students.reduce((sum, student) => sum + student.score, 0) / students.length;
console.log("Average Score:", averageScore);

// Top Scorer
const topScorer = students.reduce((top, student) => 
  student.score > top.score ? student : top
);
console.log("Top Scorer:", topScorer);

//exercise18: (project)Shopping Cart Management

let cart = [
  {id: 1, name: "Shirt", price: 20, quantity: 2},
  {id: 2, name: "Pants", price: 50, quantity: 1}
];

const totalCost = cart.reduce((total, item) => 
  total + (item.price * item.quantity), 0
);
console.log("Total Cost:", totalCost);

const itemIndex = cart.findIndex(item => item.id === 1);
if (itemIndex !== -1) {
  cart[itemIndex].quantity = 3;
}
console.log("Updated Cart:", cart);

// Remove Item (id:2)
cart = cart.filter(item => item.id !== 2);
console.log("Cart After Removal:", cart);
