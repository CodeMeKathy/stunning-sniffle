//! Evaluate these:

//* #1
// [2] === [2] // false
console.log([2] === [2])
// {} === {} //false each object has a different reference identity.
console.log({} === {})

//* #2 what is the value of property `a` for each object.
const object1 = { a: 5 } // 5 Wrong // 4 ??!?!
console.log(object1.a)
const object2 = object1
const object3 = object2
const object4 = { a: 5 }
console.log(object4.a) // 5
object1.a = 4

//* #3 create two classes: an Animal class and a Mammal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
  constructor(name, type, color) {
    this.name = name
    this.type = type
    this.color = color
  }
}

class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color)
    console.log('Cow', this)
  }
  sound() {
    console.log(
      `Mooooooooooo my name is ${this.name}! I am a ${this.color} ${this.type}. What is your name?`
    )
  }
}

const cow = new Mammal('Sally', 'cow', 'black')
console.log(cow)
console.log(cow.sound())
