//! ES8 (2017) Notes

// Two new string Methods:
// .padStart()
// const turtle1 = 'Turtle'
// console.log(turtle1.padStart(2))

// .padEnd()
// const turtle2 = 'Turtle2'
// console.log(turtle2.padEnd(2))

const fun = (a, b, c, d) => {
  console.log(a)
}

fun(1, 2, 3, 4)

// New Object Iteration:

// Object.values
// Object.entries

//  Previously only `Object.keys` allowed us to do something similar to arrays but on objects

// - Objects are not accessible or iterable by Array methods: .map(), .filter() or .reduce()

let obj = {
  username0: 'Santa',
  username1: 'Rudolph',
  username2: 'Mr. Grinch'
}

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key])
})

Object.values(obj).forEach(value => {
  console.log(value)
})
Object.entries(obj).forEach(value => {
  console.log(value)
})
Object.entries(obj).map(value => {
  console.log(value)
})

Object.entries(obj).map(value => {
  console.log(value[1] + value[0].replace('username', ''))
})
