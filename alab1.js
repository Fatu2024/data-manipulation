// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50); //this is true
console.log('------')

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);
console.log('------')

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 < 25 || n2 > 25 || n3 > 25 || n4 > 25;  //changing the sign for n1 to make this true
console.log(isOver25);
console.log('------')

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);
console.log('------')

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique; 
console.log(isValid);
console.log('------')

// Finally, log the results.
// console.log('isValid');
// console.log('------')

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  //Check if all numbers are divisible by 5. Cache the result in a variable.
// let allDivisibleby5 =true
// console.log(allDivisibleby5);
// console.log('------')

// Check if the first number is larger than the last. Cache the result in a variable.
// let n1islargerthann4 = true
// console.log(n1islargerthann4);
// console.log('------')

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number. (answer 5)
let sum = (n2 -n1);
console.log(sum)
console.log('------')

// Multiply the result by the third number. (answer 100)
let result = (sum * n3);
console.log(result)
console.log('------')

// Find the remainder of dividing the result by the fourth number. (reminder=0)
let answer = (result / n4) %2;
console.log(answer);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in 
// other logic comparisons. Rename the variable as appropriate.
// changed symbol from n1 line 33 to < to  and ran it, it ran false
// then removed the not marker (!) from line 42's over25 make it true.