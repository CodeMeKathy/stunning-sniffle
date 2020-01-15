//! ES10 (2019)  Notes

//* .flat()
// Removes nested arrays and returns a single array
// By default .flat() removes one nested layer, but a specified number can be passed through the function

// const array2 = [1, [2, 3], [4, 5]]
// console.log(array2.flat()) // [1, 2, 3, 4, 5]

//* .flatMap()
// Allows one to apply both the .flat() method and .map() on an array
// const jurassicPark = [
//   ['🐢'],
//   '🐠',
//   '🐠',
//   ['🐠', '🐠'],
//   [[[['🐬']]], '🌴'],
//   ['🐖', '⛵']
// ]
// console.log(jurassicPark.flat(50))
// const jurassicParkChaos = jurassicPark.flatMap(creature => creature + '🐠')
// console.log(jurassicParkChaos)

//* .trimStart() & .trimEnd()

// const userEmail1 = '           sally@gmal.com'
// const userEmail2 = 'BobbySue@gmail.com        '
// console.log(userEmail1.trimStart())
// console.log(userEmail2.trimEnd())

//*  Object.fromEntries(userProfiles)
//  Takes an array and returns an object

userProfiles = [
  ['commanderTom', 23],
  ['derekZelander', 40],
  ['hansel', 38]
]

Object.fromEntries(userProfiles)

//* Vice Object.entries
// Which takes an object and returns an array.

userProfiles2 = [
  ['commanderTom', 23],
  ['derekZelander', 40],
  ['hansel', 38]
]

const obj = Object.fromEntries(userProfiles2)
Object.entries(obj)

//* Try, Catch Block Update
// Allows one to a try a piece of code and if there are any errors return catch block action

try {
  true + 'hi'
} catch {
  console.log('You messed up.')
}

// Previous to E10 an error was required to be pass though an error parameter
try {
  true + 'hi'
} catch(error) {
  console.log('You messed up. ' + error)
}

