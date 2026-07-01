
//Practice with Functions

//STEP 1
/*
1) Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and
 return the result. It should log a string like "Half of 5 is 2.5.".
*/

function halfNumber(num) {
    let half = parseFloat(num / 2)
    console.log(`Answer (1) --> Half of ${num} is ${half}.`)
}
halfNumber(5)

//STEP 2
/* 
2) Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. 
It should also log a string like "The result of squaring the number 3 is 9."
*/

function squareNumber(num) {
    let squareIt = num ** 2
    console.log(`Answer (2) --> The result of squaring the number ${num} is ${squareIt}.`)
}
squareNumber(3)

//STEP 3
/*
3) Write a function called percentOf() that accepts two numbers, figure out what percent the first 
   number represents of the second number, and return the result. It should log a string like 
   "2 is 50% of 4."
*/

function percentOf(num1, num2){
    if ((num1 - num2) === 0) {
        console.log(`Answer (3) --> ${num1} is 0% of ${num2}.`)
    } 
    else{
        let result = ((num1 / num2) * 100).toFixed() 
        console.log(`Answer (3) --> ${num1} is ${result}% of ${num2}.`)
    }
}
percentOf(2,4)

//STEP 4
/*
4) Write a function called findModulus() that accepts two numbers. Within the function 
 write a statement that returns the modulus of the first and second parameters. It should log 
 a string like "2 is the modulus of 4 and 10."
 */

function findModulus(num1, num2) {
    let result = num1 % num2
    console.log(`Answer (4) --> ${result} is the modulus of ${num2} and ${num1}.`)
}
findModulus(10,4)