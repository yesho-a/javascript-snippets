function add(a, b , callback){ 
   document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
   callback(); 
   } 
     function disp(){ 
   document.write('This must be printed after addition'); 
   } 
     
   // Calling add() function 
   add(5,6,disp); 
        function area(x,y,callback){
            document.write(`The area of ${x} and ${y} is ${x*y}. ` + "<br>");
            callback();
        }
        function disp(){ 
   document.write('This must be printed after addition'); 
   } 
        area(8,9,disp)
        
         function message(str,callback) {    
                document.write(str);    
                callback();    
            }    
            message("This is message", function () {    
                alert("Message has displayed");    
            }); 
        
        function abc(var1,var2) {    
                alert(var1 + var2);    
            }    
            function xyz(name,surname,callback) {    
                if (typeof callback == "function")    
                    callback(name,surname);    
                else    
                    alert("Argument is not function type");    
            }    
            xyz("Sourav "," Kayal", abc);  
        
            function greet(name, callback) {
                console.log('Hi' + ' ' + name);
                callback();
            }
            
            // callback function
            function callMe() {
                console.log('I am callback function');
            }
            
            // passing function as an argument
            greet('Peter', callMe);

// Callback Function Example
function greet(name, myFunction) {
  console.log("Hello world");

  // callback function
  // executed only after the greet() is executed
  myFunction(name);
}

// callback function
function sayName(name) {
  console.log("Hello" + " " + name);
}

// calling the function after 2 seconds
setTimeout(greet, 5000, "John", sayName);


function greet(name) {
  // inner function
  function displayName() {
    console.log("Hi" + " " + name);
  }

  // calling inner function
  displayName();
}

greet("John"); // Hi John*/

// javascript closure example

// outer function

function greet() {
  // variable defined outside the inner function
  let name = "John";

  // inner function
  function displayName() {
    // accessing name variable
    return "Hi" + " " + name;
  }

  return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1());*/
// closure example

function calculate(x) {
  function multiply(y) {
    return x * y;
  }
  return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8*/


let a = 0;
function sum() {
  function increaseSum() {
    // the value of a is increased by 1
    return (a = a + 1);
  }
  return increaseSum;
}

const x = sum();
console.log(x()); // 1
console.log(x()); // 2
console.log(x()); // 3
a = a + 1;
console.log(a); // 4*/

//Interval

function greet() {
  console.log("Hello world");
}

setInterval(greet, 1000);

// program to display a text using setTimeout method

function greet() {
  console.log("Hello world");
}

setTimeout(greet, 3000);
console.log("This message is shown first");

// program to display a text using setTimeout method

function greet() {
  console.log("Hello world");
}

let intervalId = setTimeout(greet, 3000);
console.log("Id: " + intervalId);

// program to display time every 3 seconds
function showTime() {
  // return new date and time
  let dateTime = new Date();

  // returns the current local time
  let time = dateTime.toLocaleTimeString();

  console.log(time);

  // display the time after 3 seconds
  setTimeout(showTime, 3000);
}

// calling the function
showTime();


const number = 1;
try {
  if (number > 50) {
    console.log("Success");
  } else {
    // user-defined throw statement
    throw new Error("The number is low");
  }

  // if throw executes, the below code does not execute
  console.log("hello");
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
}

let age = 10;
try {
  if (age > 18) {
    console.log("Success");
  } else {
    throw new Error("You are under age");
  }
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
}



function add(a, b) {
  try {
    if (typeof a !== "number") {
      //throw TypeError("The first argument must be a number");
      throw new Error("The first argument must be a number");
    }

    if (typeof b !== "number") {
      throw new Error("The second argument must be a number");
    }

    return a + b;
  } catch (error) {
    console.log("Error message: " + error);
    document.write("Error message: " + error);
  }
}

add("string", 1);

function greet(name, callback) {
  console.log("Hi " + "" + name);
  callback();
}

function callMe() {
  console.log("I am a callback function");
}

greet("peter", callMe);


function greet() {
  console.log("Hello world");
}

function sayName(name) {
  console.log("Hello" + " " + name);
}

// calling the function
setTimeout(greet, 2000);
sayName("John");

*/
// Callback Function Example

function greet(name, myFunction) {
  console.log("Hello world");

  // callback function
  // executed only after the greet() is executed
  myFunction(name);
}

// callback function
function sayName(name) {
  console.log("Hello" + " " + name);
}

// calling the function after 2 seconds
setTimeout(greet, 9000, "John", sayName);


async function f() {
  console.log("Asc function");
  return Promise.resolve(1);
}

f();
f().then(function (result) {
  console.log(result);
});


