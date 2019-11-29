// ! Advanced Objects

// Reference Type

var object1 = { value: 10 }
var object2 = object1
var object3 = { value: 10 }

// Context vs Scope

// Context defines where one is within the object

// .this === reefers to what object it is inside

// Instantiation

// - Making instances or multiple copies of an object
// - class === creating a copy

class Player {
  // The first action executed within the object is the contractor function
  constructor(name, type) {
    // The properties created and assigned to the object
    console.log('player', this)
    this.name = name
    this.type = type
  }
  // Created methods to execute or run actions on each new object copy
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
    console.log('Wizard', this)
  }
  play() {
    console.log(`Weeeeeeee I am a ${this.type}`)
  }
}

// The keyword `new` is the signal to create a new object as indicated
const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Nancy', 'Dark Magic')
console.log(wizard1)
console.log(wizard2)
console.log(wizard1.introduce())
console.log(wizard2.play())

//! Type Coercion

1 == '1' // The JS engine will assume we meant 1 == 1 and return true.
console.log(1 == '1')
// Occurs when == is used vice === which enables strict mode
console.log(1 === '1')
// All languages have type coercion
// JS is an especially heavy type coercion because it is dynamically type
// Object.is() also return very similar results as === utilizing strict mode

var x = [1, 2, 3]

// assignment is by reference-copy, so
// y references the *same* array as x,
// not another copy of it.
var y = x

y === x // true
y === [1, 2, 3] // false
x === [1, 2, 3] // false
// In this snippet, y === x is true because both variables hold a reference to the same initial array. But the === [1,2,3] comparisons both fail because y and x, respectively, are being compared to new different arrays [1,2,3]. The array structure and contents don't matter in this comparison, only the reference identity.

// JS does not provide a mechanism for structural equality comparison of object values, only reference identity comparison. To do structural equality comparison, you'll need to implement the checks yourself.

// But beware, it's more complicated than you'll assume. For example, how might you determine if two function references are "structurally equivalent"? Even stringifying to compare their source code text wouldn't take into account things like closure. JS doesn't provide structural equality comparison because it's almost intractable to handle all the corner cases!
