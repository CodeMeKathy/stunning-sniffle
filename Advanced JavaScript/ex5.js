// Complete the below questions using this array:
const array = [
  {
    username: 'john',
    team: 'red',
    score: 5,
    items: ['ball', 'book', 'pen']
  },
  {
    username: 'becky',
    team: 'blue',
    score: 10,
    items: ['tape', 'backpack', 'pen']
  },
  {
    username: 'susy',
    team: 'red',
    score: 55,
    items: ['ball', 'eraser', 'pen']
  },
  {
    username: 'tyson',
    team: 'green',
    score: 1,
    items: ['book', 'pen']
  }
]

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newArr = []
const usernameFilter = array.forEach(array => {
  newArr.push(`${array.username}!`)
})
console.log(newArr)

//Create an array using map where all the usernames end with an "?"

const usernameQuestionMarkFilter = array.map(person => {
  return `${person.username}?`

  // return person.username
})
console.log(usernameQuestionMarkFilter)

//Filter the array to only include users who are on team: red

const redTeamMembers = array.filter(person => {
  return person.team == 'red'
})
console.log(redTeamMembers)

//Find out the total score of all users using reduce

const totalScore = array.reduce((score, user) => {
  return score + user.score
}, 0)
console.log(totalScore)

// (1), what is the value of i or index?

// the index should be the value of each element within the array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9]
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i)
//   alert(num)
//   return num * 2
// })

//* Pure Alternative
const newArray = arrayNum.map((num, i) => {
  return num * 2
})
console.log(newArray)

//TODO BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newList = array.filter(user => {
  return `${user.items}!`
})
console.log(newList)
