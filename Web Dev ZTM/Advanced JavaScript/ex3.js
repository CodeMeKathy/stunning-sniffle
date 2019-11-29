// change everything below to the newer Javascript!

//! let + const
// var a = 'test'
// const b = true
// const c = 789
// a = 'test2'

//* E6 Alternative
// let a = 'test'
// let b = true
// let c = 789
// const a = 'test2'
// console.log(a)

//! Destructuring

// Traditional Object Declaration
// var person = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	age: 50,
//   eyeColor: 'blue',
//   city: 'New Orleans'
// }

// var firstName = person.firstName
// var lastName = person.lastName
// var age = person.age
// var eyeColor = person.eyeColor

//* E5 & E6 Alternative
const person = {
	firstName: 'CodeMeKathy',
	lastName: 'Dev',
	city: 'LA Baby'
}
const { firstName, lastName, age, eyeColor, city } = person

//* E5 & E6 Alternative

//!  Object properties
// var a = 'test'
// var b = true
// var c = 789

// var okObj = {
// 	a: a,
// 	b: b,
// 	c: c
// }

const a = 'Hi'
const b = false
const c = 420

const newObj = { a, b, c }
console.log(newObj)

//! Template strings

var message =
	'Hello ' + firstName + ' have I met you before? I think we met in ' + city + ' last summer no???'
console.log(message)

//* E5 & E6 Alternative

var messageE6 = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`
console.log(messageE6)

//! Default arguments (E5 & E6 Addition)
// default age to 10;
function isValidAge(age) {
	return age
}

const isValidAge2 = (age = 10) => age
console.log(isValidAge2())

//! Symbol (E5 & E6 Addition)
// Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first symbol')
console.log(sym)

//! Arrow functions (E5 & E6 Addition)
// Traditional Function
function whereAmI(username, location) {
	if (username && location) {
		return 'I am not lost'
	} else {
		return 'I am totally lost!'
	}
}
//* E5 & E6 Alternative
const whereAmI2 = (username, location) => {
	if (username && location) {
		return 'I am not lost'
	} else {
		return 'I am totally lost!'
	}
}
console.log(whereAmI2())
