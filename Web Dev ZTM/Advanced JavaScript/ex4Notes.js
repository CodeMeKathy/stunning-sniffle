// ! Advanced Functions

// Traditional function

// function first() {
//   var greet = 'Hi'
//   function second() {
//     console.log(greet)
//   }
//   return second
// }

// var newFunc = first()
// newFunc()
// console.log(newFunc())

const first2 = () => {
  const greet2 = 'Hi'
  const second2 = () => {
    const name = 'Suzzy'
    console.log(greet2)
  }
  return second2
}

let newNewFunc = first2()
newNewFunc()
console.log(newNewFunc())

//! Closures

// A function ran.  The function executed. It's never going to execute again, BUT it's going to remember that there are references to those variables. So the child scope always has access to the parent scope.
 
// ! Currying

// A function that takes one argument and return another function that takes the second argument.
// Currying gives you the opportunity to partially configure a function and then, it is the mean to create reusable functions. 

//! Compose

// Function composition is a mechanism of combining multiple simple functions to build a more complicated one. 
// Compose is a high order function. It is a function that returns another function. Compose can take multiple functions as arguments and converts them into an array of functions using the spread `...` operator. 

// ! Functional Purity 

// Are functions that avoid side effects like console.log() statements.

// Pure Functions take input(s) and return a value.  Nothing else.

