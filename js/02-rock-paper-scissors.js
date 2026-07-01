/*
The Rock, Paper, Scissors Game (20 points)

Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
Our code will break the game into 3 phases:

User makes a choice. How will we collect the user’s choice?
Computer makes a choice. How will we collect the computer’s choice?
A conditional that determines who wins.
*/



// Import and initialize prompt-sync
// need to : npm install prompt-sync
const prompt = require('prompt-sync')();

const rock = 1, scissors = 2, paper = 3

function random1thru3() {
    const min = 1, max = 3
    //generate a random number among 1, 2 and 3
    return Math.floor(Math.random() * (max - min + 1)) + min 
    
}

function defComputerChoices() {
    let choice = parseInt(random1thru3())

    if (choice === 1) {
        console.log("Computer: 1\n")
    } else if (choice === 2) {
        console.log("Computer: 2\n")
    } else if (choice === 3){
        console.log("Computer: 3\n")
    }
    return parseInt(choice)
}

//User's pick
function userPick() {
    let choice = prompt("Rock=1, Scissors=2, Paper=3 (Enter 1, 2, or 3): ")
    while (isNaN(choice) || choice < 1 || choice > 3) {
        choice = prompt("Invalid value. Please enter a number between 1 and 3 : ");
    }
    console.log(`You choose: ${choice}`)
    return choice
}

let uPick = parseInt(userPick())
let computerPick = defComputerChoices()

if (uPick === 1 && computerPick === 2) {
    //Rock destroys Scissors, you win
    alert("Result: You Win!")
    console.log("You choose Rock and Computer chooses Scissors; Rock destroy Scissors.")    
} else if (uPick === 2 && computerPick === 3) {
    //Scisscors cut Paper, you win
    alert("Result: You Win!")
    console.log("You choose Scissors and Computer chooses Paper; Scissors cut Paper.")
} else if (uPick === 3 && computerPick === 1) {
    //Paper covers Rock, you win
    alert("Result: You Win!")
    console.log("You choose Paper and Computer chooses Rock; Paper covers Rock.")
} else if (computerPick === 1 && uPick === 2) {
    //Rock destroys Scissors, computer wins
    alert("Result: Computer Wins!")
    console.log("You choose Scissors and Computer chooses Rock; Rock destroy Scissors.")
} else if (computerPick === 2 && uPick === 3) {
    //Scisscors cut Paper, Computer wins
    alert("Result: Computer Wins!")
    console.log("You choose Paper and Computer chooses Scissors; Scissors cut Paper.")
} else if (computerPick === 3 && uPick === 1) {
    //Paper covers Rock, you win
    alert("Result: Computer Wins!")
    console.log("You choose Rock and Computer chooses Paper; Paper covers Rock.")
} else if (computerPick === uPick){
    //result = tie
    alert("Result = Tie")
}

    