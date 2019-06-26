// Scope: A facebook Lite Program w/ Multiple Users

// Sample Data

let database = [
  {
    username: 'CodeMeKathy',
    password: 'Kathy'
  },
  {
    username: 'CodesFire',
    password: 'Q123456'
  },
  {
    username: 'BamBam',
    password: 'stillicode'
  },
  {
    username: 'Sally',
    password: 'rainbow'
  },
  {
    username: 'JaneDoe',
    password: 'Jane'
  }
]

let newsFeed = [
  {
    username: 'CodeMeKathy',
    timeline: 'Too excited to begin my Chingu Voyage.'
  },
  {
    username: 'CodesFire',
    timeline: 'Happy Almost Friday!!'
  },
  {
    username: 'BamBam',
    timeline: 'So tired after studying all day.'
  },
  {
    username: 'Sally',
    timeline: 'Happy Hump Day!!'
  },
  {
    username: 'JaneDoe',
    timeline: 'YOLO!!'
  }
]

// Check User Credentials

let userNamePrompt = prompt('What is your username?')
let passwordPrompt = prompt('What is your password?')

let isUserValid = (username, password) => {
  for (let i = 0; i < database.length; i++) {
    if (username === database[i].username && password === database[i].password) {
      return true
    }
  }
  return false
}

let signIn = (username, password) => {
  // Break down into two functions.
  // signInCheck passes through two parameters: user and pass.
  if (isUserValid(username, password)) {
    console.log(newsFeed)
  } else {
    alert('Sorry wrong username and password.  Please refresh page and try again.')
  }
}
// When the function is called or invoked, accordingly the same number of arguments need to be passed through.
signIn(userNamePrompt, passwordPrompt)
