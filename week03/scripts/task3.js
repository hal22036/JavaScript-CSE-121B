/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1,number2) {
    const sum = number1 + number2;
    return sum
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers() {
    const firstNumber = parseInt(document.querySelector('#addend1').value)
    const secondNumber = parseInt(document.querySelector('#addend2').value)
    const sum = add(firstNumber,secondNumber)
    document.querySelector('#sum').value = sum
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector('#addNumbers').addEventListener('click', addNumbers)
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1,number2) {
    const difference = number1 - number2;
    return difference
}
function subtractNumbers() {
    const firstNumber = parseInt(document.querySelector('#minuend').value)
    const secondNumber = parseInt(document.querySelector('#subtrahend').value)
    const difference = subtract(firstNumber,secondNumber)
    document.querySelector('#difference').value = difference
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1,number2) {
    const product = number1 * number2;
    return product
}
function multiplyNumbers() {
    const firstNumber = parseInt(document.querySelector('#factor1').value)
    const secondNumber = parseInt(document.querySelector('#factor2').value)
    const product = multiply(firstNumber,secondNumber)
    document.querySelector('#product').value = product
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1,number2) {
    const difference = number1 / number2;
    return difference
}
function divideNumbers() {
    const firstNumber = parseInt(document.querySelector('#dividend').value)
    const secondNumber = parseInt(document.querySelector('#divisor').value)
    const quotient = divide(firstNumber,secondNumber)
    document.querySelector('#quotient').value = quotient
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();
// Step 2: Declare a variable to hold the current year
let year;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function 
//and assign it to the variable declared in Step 2
year = date.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById('year').innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById('array').innerHTML = numbers;
// Step 3: Use the filter array method to find all of the odd numbers of the array 
//variable and assign the result to the HTML element with an ID of "odds" 
//( hint: % (modulus operartor) )
const oddNumbers = numbers.filter((number) => number % 2 === 1);
document.getElementById('odds').innerHTML = oddNumbers;
// Step 4: Use the filter array method to find all of the even numbers of the array 
//variable and assign the result to the HTML element with an ID of "evens"
const evenNumbers = numbers.filter((number) => number % 2 === 0);
document.getElementById('evens').innerHTML = evenNumbers;
// Step 5: Use the reduce array method to sum the array variable elements and assign 
//the result to the HTML element with an ID of "sumOfArray"
let sumOfArray = numbers.reduce((total, number) => {
    return total + number;
});
document.getElementById('sumOfArray').innerHTML = sumOfArray;
// Step 6: Use the map array method to multiple each element in the array variable 
//by 2 and assign the result to the HTML element with an ID of "multiplied"
let multiplied = numbers.map(number => number * 2);
document.getElementById('multiplied').innerHTML = multiplied;
// Step 7: Use the map and reduce array methods to sum the array elements after 
//multiplying each element by two.  Assign the result to the HTML element with an ID of 
//"sumOfMultiplied"
let sumOfMultiplied = multiplied.reduce((total, number) => {
    return total + number;
});
document.getElementById('sumOfMultiplied').innerHTML = sumOfMultiplied;
