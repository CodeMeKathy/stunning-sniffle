# JavaScript Notes

## JavaScript TYPES

1. Number
2. String
3. Boolean
4. Undefined <!-- Used when no value is assigned.
5. Null <!-- Is literally mean nothing or having a value of empty. It also means you can not overwrite the assigned lack of value with a new assignment.
6. Symbol (new in ECMAScript 6)
7. Object

## JavaScript COMPARISONS

`!==`
`===`
`>=`
`<=`
`>`
`<`

## JavaScript VARIABLES

var

let (new in ECMAScript 6)
const (new in ECMAScript 6)

- Variables are assigned with the above key words followed by the equal sign and the assignment.
- Ex. var cat = false

## JavaScript CONDITIONALS

if ( ... ) { ...}
else
else if

<!-- ternary operator -->
<!-- switch -->

## JavaScript LOGICAL OPERATORS

&&
||
!

## JavaScript Expressions

- A portion of code that that denotes or produces a value.
- 1 + 3
- var a = 2
- return true

## JavaScript FUNCTIONS

- Function Declaration Example:

`function name() {return}`

- Function Expression Example:

`var a = function name() {return}`

- Anonymous Function Example:

When declared with a variable, but no name, the function becomes an Anonymous Function assigned to the variable.

`var a = function() {return}`

- Return Statements
  **Do not forget about adding the Return Statement**

A return statement tells JS that it has reached the final line of code and to exit the output.
`return`

- Arrow Functions (new in ECMAScript 6)

  - Ex. `let variableName = (param1, param2) => {...}`
  - Arrow functions automatically have lexical scope, meaning that one set the state of `this` where the function was defined in the first place.

- Function Components

  - parameters: The variables, `a` and `b` in the example passed through the the function declaration `function (multiply(a, b) {return a*b }`
  - arguments: The items passed through to the called functions for execution. `(multiply(4, 5))`

- Function Invoking or Calling
  - In order to `activate` and utilize a function it mush be `called` or `invoked`. This is done with the function name followed by a set of parenthesis.
  - Ex. multiply()
  - Ex. newFunction(param1, param2)

## JavaScript DATA STRUCTURES

Array <!-- Also called a List by some and in other languages.

Object

### Method

- A method is a function stored inside of object.
- For example the object `console` has many methods, or rather functions, built inside of it courtesy of JS.
- Are accessed with dot notation `object.method` utilizing the object's name.
  - Ex.
    let objectName = {
    thisIsAMethod: function name () {
    console.log('Kathy')
    }
    }
    objectName.thisIsAMethod // Output: 'Kathy'

## JavaScript LOOPING

### for Loops

- Syntax:

  ```
  for (let index=0; index condition; index++) { //index++ Means index + 1 or increment index by 1 for each index.
    console.log(i)
  }
  ```

- Example:

  ```
  for (let i = 0; i<todos.length; i++) {
      console.log(todos[i])
  }
  ```

### while Loops

- When a `while loop` executes it evaluates the the condition first and if the condition is met then it runs the provided code.
- Syntax:

  ```
  let variable = initial value;
  while (variable condition) {
    console.log(variable)
  }
  ```

- Example:

  ```
  let counterOne = 0;
  while (counterOne < 10) {
    console.log(counterOne)
    counterOne++ // index + 1 or increment index by 1 for each index.
  }
  ```

### do {while} Loops do

- When a `do while loop` executes, the provided code runs first and then condition evaluated. (Not often used.)
- Syntax:

  ```
  let variable2 = initial value;
  do {
      console.log(variable2);
      variable2++
    } while (variable condition);
  ```

### forEach (new in ECMAScript 5)

- Loops over each element in the array based on the provided argument with action.
- Allows for the integration of functions to improve the overall efficiency and quality of the code.

- Syntax:

```
todos.forEach(function(todo) {
    console.log(todo)
})
```

- In order to access the index within a forEach loop, a second argument is required.
- Syntax:

```
todos.forEach(function(todo, index) {
    console.log(todo, i)
}

todos.forEach(logTodos);
todos.Important.forEach(logTodos)
```

## JavaScript KEYWORDS

break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield

## Data Attributes

- A Data Attribute is an attribute that is an object w/ a created and assigned a name which will contain added data for that element. It is created with `data-` prefix followed by the assigned variable.
- Everything inside of the assigned data attribute is then assembled into an object.
- Data attributes allow for one to add any data element as long as it is preceded by `data-`.
- Ex. `data-key = key'75'`
## Recursion
- Recursion occurs when a function calls itself
