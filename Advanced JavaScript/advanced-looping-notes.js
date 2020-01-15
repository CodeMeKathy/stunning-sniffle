//! Advanced Looping Notes

const basket = ['apples', 'oranges', 'grapes']

//* Traditional `for` Loops

// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i])
// }

//* ES5 .forEach()

// basket.forEach(item => console.log(item))

//* ES6 `for of` Loop
// Iterating: arrays, strings
// for (item of basket) {
//   console.log(item)
// }

//* ES6 `for in` Loop
// Works with Objects and their properties
// Most objects are NOT iterable, but most object properties are enumerable
// enumerating: objects

const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

for (item in detailedBasket) {
  console.log(item)
}
