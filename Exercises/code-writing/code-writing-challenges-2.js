/*
    The code writing challenges in this module are designed to help you become more familiar with how the different
    control flow tools available to you work. For each challenge you will be given a snipet of code and instructions
    for what you need to do to make the code work. Make sure to remove the true boolean in each statement when
    working on the exercises.
*/

/*
    Exercise One: create a variable called myBoolean, assign it a boolean value,  and use it to make the else 
    statement below execute
*/
let myBoolean = false;
if(myBoolean){
    console.log("If you can see this you have NOT completed exercise one");
} else {
    console.log("if you can see this you are done with exercise one")
}

/*
    Exercise Two: create two variables, one called numOne and the other numTwo, and assign them both numeric values.
    Use them to make the else statement below execute. HINT: you will need to use one or more logical operators
*/
var numOne = 10;
var numTwo = 15;
if(numOne >= numTwo){
    console.log("If you can see this you have NOT completed exercise two");
} else {
    console.log("if you can see this you are done with exercise two")
}

/*
    Exercise Three: create a variable called myString and assign it a string value (remember to use either single
    quotes, double quotes, or back tics). Use the variable you created and the strict equality operator to make the
    else statement below execute
*/
myString = "5";
if("5" === 5){
    console.log("If you can see this you have NOT completed exercise three");
} else {
    console.log("if you can see this you are done with exercise three")
}

/*
    Exercise Four: create a variable called myNumThree and assign it a numeric value. Then create a variable called
    myStringTwo and assign it a different value. Use these two variables and the loose equality operator to make 
    the else statement execute
*/

myNumThree = 3;
myStringTwo = "2";
if(3 == 2){
    console.log("If you can see this you have NOT completed exercise four");
} else {
    console.log("if you can see this you are done with exercise four")
}


const M = parseInt(readline());
const N = parseInt(readline());
var inputs = readline().split(' ');
sum = 0
for (let i = 0; i < N; i++) {
    const E = parseInt(inputs[i]);
    sum = sum + (E%M)
}

console.log(sum)
