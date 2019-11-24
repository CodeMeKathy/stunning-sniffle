//#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//   if (winBattle()) {
//       return 10
//   } else {
//       return 1
//   }
// }
// // Ternary Operator Alternative

// var experiencePoints = winBattle() ? 10 : 1

//Using this function, answer the questions below:
// function moveCommand(direction) {
//   var whatHappens;
//   switch (direction) {
//       case "forward":
//           break;
//           whatHappens = "you encounter a monster"
//       case "back":
//           whatHappens = "you arrived home"
//           break;
//           break;
//       case "right":
//           return whatHappens = "you found a river"
//           break;
//       case "left":
//           break;
//           whatHappens = "you run into a troll"
//           break;
//       default:
//           whatHappens = "please enter a valid direction"
//   }
//   return whatHappens
// }

// //#2 return value when moveCommand("forward");
// // undefined
// console.log(moveCommand("forward"));

// //#3 return value when moveCommand("back");
// // whatHappens = You arrived home
// // return whatHappens // You arrived home
// console.log(moveCommand("back"));

// //#4 return value when moveCommand("right");
// // You found a river
// console.log(moveCommand("right"))

// //#5 return value when moveCommand("left");
// // undefined
// console.log(moveCommand("left"))

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function greetings(greeting) {
	var greet
	switch (greeting) {
		case 'Hi':
			greet = 'Hi!'
			break
		case 'How are you doing today?':
			greet = 'Well.  Thank you for asking.  How are you doing today?'
			break

		default:
			greet = 'Say "Hi"'
			break
	}
	return greet
}
console.log(greetings())
console.log(greetings('Hi'))
console.log(greetings('How are you doing today?'))
