/**
 * Normal Function
 * A traditional function that takes two arguments and returns their sum.
 */
function sum(a, b) {
    return a + b;
}

/**
 * Arrow Function
 * A concise way to define functions.
 * Mostly used for anonymous functions.
 */
let sum1 = (a, b) => a + b;

// console.log("The result of the arrow function is " + sum1(2,3));

//Checks whether a number is positive or negative.

function isPositive(value) {
    return value >= 0;
}

// console.log(isPositive(2));

/***
 * Arrow function variant of isPositive.
 * Parentheses can be omitted when there is only one parameter.
 */
let isPositive1 = (value) => value >= 0;
let isPositive2 = value => value >= 0;

// console.log("The Result is "+isPositive2(6));
// console.log("The Result is "+isPositive1(-3));

/**
 * Generates a random number.
 * returns {number} A random number between 0 and 1
 */
function randomMath() {
    return Math.random();
}

/**
 * Arrow function version of randomMath.
 */
let randomMath2 = () => Math.random();

// console.log(randomMath());

/**
 * Anonymous Function Example
 * Event listener for document click event using an anonymous function.
 */
// document.addEventListener('click', function() {
//     console.log('Click');
// });

// document.addEventListener('click', () => console.log('Click'));

/**
 * Prints the full name of a person.
 */
function printName(a, b) {
    return `The name of the person is ${a} ${b}`;
}

// console.log(printName("Anup", "Chand"));

/**
 * Arrow function version of printName.
 */
let me = (a, b) => `The name of the person is ${a} ${b}`;

console.log(me("Anup", "Ojha"));
