//In math, a function takes input(s) to generate an output.
//In programming, a function does a lot more. 
//Not only can a function take input(s) and generate an output,
//It can also execute a group of codes inside it.

//Why is a function useful?
//Code reuse.
//Readability (Clean code).
//Organization. A way to effectively organize complex codes and reduce the complexity.

//There are 2 ways to define a function.
//We won't go over what makes them different other than syntax,
//but understand that JavaScript provides 2 ways to define a function.

//The first way: function expression
//A function expression stores function into a variable
var func1 = function(){

}; //function expression requires a semi-colon here.



//The second way: function declaration
//Function declaration STRICTLY begins with the 'function' keyword.
function func2(){

} //no semi-colon at the end of function declaration



////////////////////////////
//An example of a function with inputs
function doSomething(input1, input2, input3){
	//do something with input1, input2, and input3
}
///

//An example of a function with a single parameter
function greet(name){

	// console.log(arguments); //Array-like Object
	console.log("Hello " + name);
	// console.log("Hello " + name + " " + arguments[1]); //works but not recommended
}

// greet(); //"Hello undefined"
// greet("George"); //"Hello George"
greet("George", "Nguyen"); //"Hello George". JavaScript does not fail if you provide more than expected number of inputs.

//An example of a function that generates an output.
function sum(num1, num2){ //accepts two numbers as parameters
	var result = num1 + num2;

	return result; //outputs a value.
}

//A lexical scope question: Can we access the variable result (located inside the sum function) from outside?
// console.log(result); //does not work. result variable does not exist in global scope.


var add7and8 = sum(7,8); //sum(7,8) outputs the value 15.
// console.log(add7and8);

//A function can accept any datatype as parameter/argument (e.g. number, boolean, string, object, array, function, etc)
//A function can also return any datatype.


function sum(num1, num2){
	var result = num1 + num2;
	return result; //give the value to the outer scope.
}

var name = "Jay Park"; //keyword 'var' = lexical scope
// let name2 = "Ju Park"; //block scope

function greet2(){
	console.log("Hello", name);
}
greet2();

//In JavaScript, a function can also accept a function as an input (parameter/argument). It can also return a function.
//We identify such function as a higher-order function
//An example of higher-order function: 
//forEach(collection, callback); //callback is a function that we accept as an input

function subtract(number1, number2){
	return number1 - number2;
}

function multiply(number1, number2){
	return number1 * number2;
}

function operate(n1, n2, operator){
	return operator(n1, n2);
}

var output = operate(100,8, multiply);
// console.log(output);


function addBy(n1){

	return function(n2){
		return n1 + n2;
	};
}

var addBy7 = addBy(7); //stores a function that addBy returns. i.e. function(n2){return 7 + n2;};
var addBy9 = addBy(9);
// console.log(addBy7(8));
// console.log(addBy9(50));

//Functional Programming #1: forEach
//Let's implement forEach 
//forEach function takes a collection of items or values(e.g. an object or array)
//and executes callback function on every item of the collection.
//forEach is a way to abstract the use of for-loops


//Let's say we are given the following for-loop to print every number of an array:
var numbers = [1,2,3,4,5];
for(var i=0; i < numbers.length; i++){
	console.log(numbers[i]);
}

//We can accomplish the above with forEach 
function log(item){
	console.log(item);
}

function forEach(input, callback){


	if (Array.isArray(input)) {
		for (var i = 0; i < input.length; i++) {
			callback(input[i]);
			//function(item){console.log(item)}
			//function(input[i]){console.log(input[i])}
		}
	}
	else {
		//iterate through an object
		for (var key in input){
			callback(input[key]);
		}
	}
}

forEach(numbers, log); //cleaner than for-loop
forEach(numbers, function(item){
	console.log(item);
});

//End of forEach
//////////////////////////////////////
//Methods in an Object

//Before we dive into methods, let's review object
function bye(){
	console.log("Goodbye!");
}

var person = {
	name: "George Nguyen", 
	age: 23,
	residency: "Tustin",
	greeting: function(){
		console.log("Hi there");
	},
	goodbye: bye
};

//another name for key in an object is called PROPERTY
console.log(person["residency"]); //technically true, but bracket notation is not recommended when you are trying to access key as a property
console.log(person.residency); //recommended when you are accessing key as a property
person.greeting();
//Method: A property of an object that holds a function. We can execute a method
person.goodbye();

//That's it for methods. 


//Functional Programming #2: map function
//Try to implement a function called map
//map function accepts an array and callback as inputs.
//map returns a new collection that saves the result of the executed callback on each item
//The callback for map only accepts a single value.

//An example use of the map function.
function doubleNumber(number){ //doubleNumber accepts a single value (i.e. number)
	return number*2;
}

var result = map([1,2,3,4,5], doubleNumber); //[2,4,6,8,10]



//Where we left off.
function map(array, callback){
	forEach(array, function(item){
		
	});
}
