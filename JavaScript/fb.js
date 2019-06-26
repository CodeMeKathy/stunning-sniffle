// Scope: A facebook Lite Program

// Sample Data

let database = [
  {
    username: 'CodeMeKathy',
    password: 'Kathy'
  }
]

let newsFeed = [
  {
    username: 'Bobby',
    timeline: 'So tired after studying all day.'
  },
  {
    username: 'Sally',
    timeline: 'Happy Friday!!'
  }
]

// #1. Check User Credentials

let userNamePrompt = prompt('What is your username?')
let passwordPrompt = prompt('What is your password?')

function signInCheck (user, pass) {
  // signInCheck passes through two parameters: user and pass.
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed)
  } else {
    alert('Sorry wrong username and password.  Please refresh page and try again.')
  }
}
// When the function is called or invoked, accordingly the same number of arguments need to be passed through.
signInCheck(userNamePrompt, passwordPrompt)
