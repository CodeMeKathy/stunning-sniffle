//Solve these problems:

// //! #1 Create a one line function that adds adds two parameters

// const sum1 = (a, b) => a + b
// console.log(sum1(4, 6))

// //! Closure: What does the last line return?
// const addTo = (x) => (y) => x + y
// var addToTen = addTo(10)
// addToTen(3)
// console.log(addToTen(3))

// //! Currying: What does the last line return?
const sum = (a, b) => a + b
console.log(sum(30, 1))
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
console.log(curriedSum(30)(1));

// //! Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)
// console.log(add5(12))

// //! Composing: What does the last line return?
const compose = (f, g) => a => f(g(a))

const add1 = num => num + 1
const add5 = num => num + 5
compose(add1, add5)(10)
// const compose = (f, g) => a => add1(add5(10))
// => add1(10+5)
// => 15 + 1
// => 16
console.log(compose(add1, add5)(10))

//! What are the two elements of a pure function?
// 1. Deterministic - Given the same input, will always return the same output
// 2. Produces no side effects
