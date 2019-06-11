// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.

let firstNum = Number(prompt('Enter your first number'))
let secondNum = Number(prompt('Enter your second number'))

let sum = firstNum + secondNum

alert(sum)

// BONUS: Make a program that can subtract, multiply, and also divide!

let division = firstNum / secondNum
alert(division)

let multiplication = firstNum * secondNum
alert(multiplication)

let subtraction = firstNum - secondNum
alert(subtraction)
