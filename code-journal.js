/* Variables - containers that store values */

var name; // a declared variable, but not initialized (no value) and it's in the global scop (MUY MAL)
let ____; // a declared variable (cannot be changed)
const bar = 'Bar'; // declared variable that cannot be changed - significa constant

// =is the assigning operator, read as "is assigned the value of.."

const ANSWER = 42;

// Strings

let string1 = "Hello World";
let string2 = "What's gucci, Utah?";
let string3 = new String("Hello Utah World");

// Numbers

let myNum = 5343543543544;
let myNum2 = 75.38; // floating number

"1" == 1 // true, type coersion and loose equality checking
"1" === 1 // false because this is strict equality checking

// Boolean

let myBool = true

// Array

let myArray = [____] // this Array is empty (need to fill in)
let myArray2 = [42.8748, "String", myBool, ANSWER, true]

/* For Loop (needs 4 parts)
let i = X, firs tstatement
second statement: qualifier?
thrid condition: how the for loop runs i++ (i+1) */

function sumTwoThings(one, two) {
    return one + two;
}

// Arrow Functions
const theFunction = () => "I am djfkhsd"

//a higher order function is a function that accepts another as a parameter
// filter, map, and reduce are the most popular, but forEach, every, and find are also HOFS 

// filter method example - filter returns an array of elements that "pass"