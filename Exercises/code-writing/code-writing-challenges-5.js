/*
    The code writing challenges in this module are designed to help you become more familiar with how the different
    control flow tools available to you work. For each challenge you will be given a snipet of code and instructions
    for what you need to do to make the code work. Make sure to fill in the proper values in each for statement 
    below
*/

/*
    Exercise One: make the for loop below print the numbers 0-10, increase the number printed by one each 
    iteration. The console should look like this after running the script:
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10

    HINT: you can provide all the relevant information within the for statement to control the loop
*/

for(let i = 0; i <= 10; i++){
    console.log(i);
}



/*
    Exercise two: make the for loop below print the even numbers from 0 to 20, one at a time. The console should
    look like this after executing the script:
    2
    4
    6
    8
    10
    12
    14
    16
    18
    20

    HINT: this requires more fine-tune control over the increment of your control variable
*/

for(let i = 0; i <= 20; i += 2){
    console.log(i);
}



/*
    Exercise Three: make the for loop below print the odd numbers from 30 through 0, one at a time. The console 
    should look like this after running the script:
    29
    27
    25
    23
    21
    19
    17
    15
    13
    11
    9
    7
    5
    3
    1

    HINT: there is a mathematical operator that can help simplify your code logic
*/

// for(let i = 29; i >= 0; i -= 2){
//     console.log(i);
// }

for(let x = 30; x >= 1; x--){
    if (x % 2 === 1){
    //     console.log(x + " is an even number");
    // } else {
        console.log(x);
    }
}


/*
    Exercise Four: make the for loop below print out the characters of the provided string one by one to the console.
    the console should look like this after running:
    H
    e
    l
    l
    o

    w
    o
    r
    l
    d
    !

    HINT: there is a way to format your for statement to have your code loop through the string

*/



let myString = "Hello world!";

for(letter of myString){
console.log(letter);
}