/*
    The code writing challenges in this module are designed to help you become more familiar with how the different
    control flow tools available to you work. For each challenge you will be given a snipet of code and instructions
    for what you need to do to make the code work. Make sure to remove the false boolean in each statement when
    working on the exercises.
*/

/*
    Exercise One: create a variable called myBoolean, assign it a boolean value,  and use it to make the if 
    statement below execute
*/
let myBoolean = true;
if(myBoolean){  
    console.log("If you can see this in the console then you are done with exercise one");
}

/*
    Exercise Two: create two variables, one called numOne and the other numTwo, and assign them both numeric values.
    Use them to make the if statement below execute. HINT: you will need to use one or more logical operators
*/
let numOne = 4;
let numTwo = 5;
if(numTwo > numOne){
    console.log("if you can see this in the console then you are done with exercise two");
}

/*
    Exercise Three: create a variable called myString and assign it a string value (remember to use either single
    quotes, double quotes, or back tics). Use the variable you created and the strict equality operator to make the
    if statement below execute
*/
var myString = "hello";
if(myString === "hello"){
    console.log("if you can see this in the console then you are done with exercise three");
}

/*
    Exercise Four: create a variable called myNumThree and assign it a numeric value. Then create a variable called
    myStringTwo and assign it the same value but as a string. Use these two variables and the loose equality operator
    to make the if statement execute
*/
let myNumThree = 5;
let myStringTwo = "5";
if( myNumThree == myStringTwo){
    console.log("if you can see this in the console then you are done with exercise four");
}