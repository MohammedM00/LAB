// Task #1: Variables
// Part a)
const userNumber = prompt("Enter a number:");
console.log(`Quantity: ${userNumber}`);

// Part b)
const percentageAmount = prompt("Enter a percentage amount:");
const calculatedPercentage = (userNumber * percentageAmount) / 100;
console.log(`Quantity: ${userNumber}`);
console.log(`${percentageAmount}% of Quantity, ${userNumber}, is ${calculatedPercentage}`);

// Task #2: Variables & Conditionals
const userGrade = parseInt(prompt("Enter a grade between 1 and 100:"));
// Part a)
let gradeA;
if (userGrade >= 91 && userGrade <= 100) {
    gradeA = "A";
} else if (userGrade >= 81 && userGrade <= 90) {
    gradeA = "B";
} else if (userGrade >= 71 && userGrade <= 80) {
    gradeA = "C";
} else if (userGrade >= 61 && userGrade <= 70) {
    gradeA = "D";
} else {
    gradeA = "F";
}
console.log(`(a) If computation: Grade ${gradeA}`);

// Part b)
let gradeB;
switch (true) {
    case userGrade >= 91 && userGrade <= 100:
        gradeB = "A";
        break;
    case userGrade >= 81 && userGrade <= 90:
        gradeB = "B";
        break;
    case userGrade >= 71 && userGrade <= 80:
        gradeB = "C";
        break;
    case userGrade >= 61 && userGrade <= 70:
        gradeB = "D";
        break;
    default:
        gradeB = "F";
}
console.log(`(b) Switch computation: Grade ${gradeB}`);

// Task #3: Variables and Loops
const professorName = prompt("Enter the punishing professor name:");
const lineToWrite = prompt("Enter the line to write:");
const numberOfTimes = parseInt(prompt("Enter the number of times the lines are to be written:"));
for (let i = 1; i <= numberOfTimes; i++) {
    console.log(`${i}: ${lineToWrite}`);
}

// Task #4: Variables, Loops, DOM
const outputDiv = document.getElementById("output");
let outputString = "";
for (let i = 1; i <= numberOfTimes; i++) {
    outputString += `${i}: ${lineToWrite}<br>`;
}
outputDiv.innerHTML = outputString;

// Task #5: Variables, Loops, DOM, Function
const writeLines = () => {
    let outputString = "";
    for (let i = 1; i <= numberOfTimes; i++) {
        outputString += `${i}: ${lineToWrite}<br>`;
    }
    outputDiv.innerHTML = outputString;
};
writeLines();

// Task #6: Variables, Loops, Functions
// First Strategy (nested loop)
let firstStrategyOutput = "";
for (let factor1 = 1; factor1 <= 12; factor1++) {
    for (let factor2 = 1; factor2 <= 12; factor2++) {
        firstStrategyOutput += `${factor1} x ${factor2} = ${factor1 * factor2}\n`;
    }
    firstStrategyOutput += "\n";
}
console.log("First Strategy (nested loop):\n" + firstStrategyOutput);

// Second Strategy (function in loop)
let secondStrategyOutput = "";
const createTables = (factor1) => {
    for (let factor2 = 1; factor2 <= 12; factor2++) {
        secondStrategyOutput += `${factor1} x ${factor2} = ${factor1 * factor2}\n`;
    }
    secondStrategyOutput += "\n";
};
for (let factor1 = 1; factor1 <= 12; factor1++) {
    createTables(factor1);
}
console.log("Second Strategy (function in loop):\n" + secondStrategyOutput);

// Third Strategy (function calls)
const createAllTables = (delimiter) => {
    let thirdStrategyOutput = "";
    for (let factor1 = 1; factor1 <= 12; factor1++) {
        for (let factor2 = 1; factor2 <= delimiter; factor2++) {
            thirdStrategyOutput += `${factor1} x ${factor2} = ${factor1 * factor2}\n`;
        }
        thirdStrategyOutput += "\n";
    }
    return thirdStrategyOutput;
};
console.log("Third Strategy (function calls):\n" + createAllTables(10));

// Task #7: Hoisting
/*
Hoisting in JavaScript refers to the behavior where variable and function declarations are
moved to the top of their containing scope during the compilation phase.

a) Function Hoisting Example
In this example, we have a function "sayHello" that is called before its declaration.
JavaScript hoists the function declaration, allowing us to call it before defining it.
*/
sayHello(); // This works due to hoisting
function sayHello() {
    console.log("Hello,
