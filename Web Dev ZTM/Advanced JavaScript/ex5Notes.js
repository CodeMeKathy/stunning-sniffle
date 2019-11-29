//! Advanced Arrays

//* forEach()

// forEach loops over something and carries out the action indicated by the callback function.  *In order to return an array you have to create one and push to it.

const array = [1, 2, 10, 16]

const newArr = []

const doubleArr = array.forEach(num => {
  newArr.push(num * 2)
})
console.log('forEach =>', newArr)

//* map()

// Unlike forEach(), map() returns a new and modified array.
// map() requires and expects a return statement, without one undefined is returned.  map() iterates through the collection of elements within the array to apply the operation on each element and storing the result of each invocation of the operation as a new element in the new array.

const mapArr = array.map(num => {
  return num * 2
})
console.log(array)
console.log('map =>', mapArr)

//* filter()

const filterArr = array.filter(num => {
  return num > 5
})
console.log(filterArr)

//* reduce

// Reduce combines the power of filter and map into one operation.

const reduceArr = array.reduce((acc, num) => {
  return acc + num
})
console.log(array)
// 
console.log(reduceArr)
