//! Array Methods

// Array methods that can be called on any array that will preform some kind of action on or with that array.

//* Map()

const myArray = [1, 2, 3, 4]

console.log(myArray.map(num => num + 1))

//* Promises

const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve('I have succeeded')
    }, 1000)
  } else {
    reject('I have failed')
  }
})

myPromise
  .then(value => value + '!!!!')
  .then(newValue => console.log(newValue))
  .catch(rejectValue => console.log(rejectValue))

//* API Fetch Request
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json()))
console.log(Promise)

//* filter()

//* includes()

//* find()

//* reduce()
