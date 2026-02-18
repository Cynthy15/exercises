
// Exercise 11: Filtering Data(filter)

const testScores = [45, 78, 92, 30, 65, 88];
//a
const passingScores = testScores.filter(score => score >= 70);
console.log(passingScores);
//b
const average = testScores.reduce((sum, score) => sum + score, 0) / testScores.length;
const belowAverageScores = testScores.filter(score => score < average);
console.log(belowAverageScores);
                                            
