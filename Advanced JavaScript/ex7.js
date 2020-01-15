//! ES2016 Notes

//! Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah']
console.log(dragons1.includes('John'))

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah']
console.log(dragons2.filter(name => name.includes('John')))

// #3) Create a function that calculates the power of 100 of a number entered as a parameter
const pwr100 = num => num ** 100
console.log(pwr100(2))

// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(pwr100(10000))
