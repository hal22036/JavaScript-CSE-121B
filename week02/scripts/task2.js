/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Jeni Hales";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = myName;

// Step 3: declare and instantiate a variable to hold the current year
let year = new Date();

// Step 4: place the value of the current year variable into the HTML file
document.getElementById('year').innerHTML = year.getFullYear();

// Step 5: declare and instantiate a variable to hold the name of your picture
let profilePic = 'images/profilepic-jeni.png'; 

// Step 6: copy your image into the "images" folder
//images/profilepic-jeni.jpg

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('#mainImage').setAttribute('src', profilePic);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favFoodList = ['Mexican', 'Italian', 'Desserts'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = favFoodList;

// Step 3: declare and instantiate a variable to hold another favorite food
let newfood = 'Chocolate';

// Step 4: add the variable holding another favorite food to the favorite food array
favFoodList[favFoodList.length] = newfood;

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = favFoodList;

// Step 6: remove the first element in the favorite foods array
favFoodList.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favFoodList;

// Step 8: remove the last element in the favorite foods array
favFoodList.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favFoodList;


