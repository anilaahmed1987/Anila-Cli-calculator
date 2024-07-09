#! /usr/bin/env node
// CLI CALCULATOR ramzan coding night
import inquirer from "inquirer";
// ASking question from user through inquirer
let answer = await inquirer.prompt([
    {
        message: "enter first Number", type: "number", name: "firstNumber"
    },
    { message: "enter second Number", type: "number", name: "secondNumber" },
    { message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division", "percentage"]
    },
]);
// coditional statements if-else
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "percentage") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("invalid out  put");
}
