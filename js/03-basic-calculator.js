/*
The Basic Calculator (25 points)

In this part of the assignment you will build a simple calculator using the skills 
you’ve acquired in regards to functions. You will ask the user for a number, a second number, 
and then finally ask them what kind of operation they want to perform, either add, subtract, 
multiply, or divide. Depending on what they select, you will perform that operation. 
To complete this part of the assignment follow the steps outlined here:
*/

// ADD A FUNCTION CALLED CALCULATE
// COLLECT FIRST NUMBER FROM USER
// COLLECT SECOND NUMBER FROM USER
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT

// Import and initialize prompt-sync
// need to : npm install prompt-sync
const prompt = require('prompt-sync')();

function calculate(x, y, operation){
    //console.log(typeof x, typeof y, typeof operation)
    switch (operation) {
        case 'a':
            let add = x + y
            alert(`Result: Addition of ${x} and ${y} = ${add}`)
            break
        case 's': 
            let sub = x - y
            alert(`Result: Subtraction of ${x} and ${y} = ${sub}`)
            break;
        case 'm':
            let multi = x * y
            alert(`Result: Multiplication of ${x} and ${y} = ${multi}`)
            break;
        case 'd':
            let divide =  x / y
            alert(`Result: Division of ${x} and ${y} = ${divide.toFixed(4)}`)
            break;
    }
}
 
function getNum(msg) {
    let num = Number(prompt(`Enter the ${msg} number: `))
    while (isNaN(num)) {
        num = Number(prompt("Invalid value. Please enter a number : "))
    }
    //console.log(`${msg} Number =  ${num}`)
    return num
}

 

function getFromUser() {
    const valid = ["a", "s", "m", "d"]
    let operation
    
    do {
        x = getNum("First")
        y = getNum("Second")
        oper = prompt("Which operation? Enter a=Add, s=Subtract, m=Multipy, d=Divide : ")
        if (oper ===  valid[0] || oper === valid[1] || oper === valid[2] || oper === valid[3]) {
            //console.log(typeof oper)
            //console.log(oper)
            
        } else {
            alert("Invalid selection, Try again!!! ")
            x = getNum("First")
            y = getNum("Second")
            oper = prompt("Which operation? Enter a=Add, s=Subtract, m=Multipy, d=Divide : ")
        }
        
        
    } while (!valid.includes(oper))
    //console.log(`Operation =  ${operation}`)
    return x, y, oper
}

let x, y, z = getFromUser()
calculate(x, y, z)