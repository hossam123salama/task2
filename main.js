//Q1 Try for…in, for…of with an array.

var number = [10, 20, 30, 40];

for (let element in number) {
  
  console.log(`index: ${ element}`)//index
}

console.log("*************************");



for (let element of number) {
  console.log(`Value: ${element}`); //values
}

console.log("*************************");

number.forEach((element, index ,arr) => {

  console.log(`index: ${index}, Value: ${element}`);

});
console.log("******************************************************************************");

//Q2 Print student data using template literals
//using object
 var student ={
    Std_name : "HossamSalama",
    fac_name : "Computer Science",
    Uni_name : "ELMinya",
    grad : 80,
 }
;

console.log(`${ student.Std_name} is a student in the faculty of ${ student.fac_name} in university ${student.Uni_name} and his final grade is ${ student.grad}.`);

console.log("******************************************************************************");

//Q3. Check if ‘hello’ includes the letter ‘e’

var str = "hello";
console.log(str.includes('e')); // true

console.log("******************************************************************************");

//Q4. Create an object and set a default value if null using ?? operator
var student = {
    name: null,
    age: 20
  };
  
  student.name = student.name ?? "Unknown";
 
  console.log(student.name); 
  console.log(student.age);      

  console.log("******************************************************************************");

//Q5. Use the array [1,5,3,4,2,4,6,8,5] with arrow functions
let numbers = [1, 5, 3, 4, 2, 4, 6, 8, 5];

// Qa. Return odd numbers using Array.filter()
let oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers); // [1, 5, 3, 5]

console.log("************************");
// b.Print even values using Array.forEach()
numbers.forEach(num => {
  if (num % 2 === 0)

    console.log(num); // 4, 2, 4, 6, 8
});
console.log("******************************************************************************");
// c. Print first number > 5
var numberGreaterThan5 = numbers.find(num => num > 5);
console.log(numberGreaterThan5); // 6

console.log("******************************************************************************");
// d. Create a new array with doubled values using Array.map()
var doubledArray = numbers.map(num => num * 2);

console.log(doubledArray); // [2, 10, 6, 8, 4, 8, 12, 16, 10]

console.log("******************************************************************************");

//Q6-Alert the sum of 2 numbers using a self-invoking function

((a, b) => {
    const sum = a + b;
    // alert(sum);
  })(5, 10); 

  console.log("************************");

//7-Study new array methods and apply them
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// Q a. Test if every element is a string
let typeStrings = fruits.every(fruit => typeof fruit === "string");
console.log(typeStrings); 

console.log("************************");
// Qb. Test if some elements start with "a"
let elementStartWithA = fruits.some(fruit => fruit.startsWith("a"));
console.log(elementStartWithA ); 
console.log("************************");
// Qc. Filter elements starting with "b" or "s"
let filteredFruits = fruits.filter(fruit => fruit.startsWith("b") || fruit.startsWith("s"));
console.log(filteredFruits); 
console.log("************************");
// Qd. Use forEach to display elements of the new array
filteredFruits.forEach(fruit => console.log(fruit));


