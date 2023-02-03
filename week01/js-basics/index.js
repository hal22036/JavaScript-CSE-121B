
let name = 'Mosh';

console.log(name);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let age = 30;
let isApproved = true;
let firstName = undefined;
let selectedColor = null;


let person = {
    name: "Mosh",
    age: 30
}
//Dot Notation
person.name = 'John';

//Bracket Notation
person['name'] = 'Mary';
console.log(person);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);


//performing a task
function greet(name, lastname) {
    console.log('Hello ' + name + ' ' + lastname);
}

greet('John', 'Smith');
greet('Mary', 'Jane');

// calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));


