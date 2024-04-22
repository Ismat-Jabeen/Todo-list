#! /usr/bin/env node
import inquirer from "inquirer";
let todos = []; // array is just like a shopper containing more than one thing.
let condition = true;
while (condition) // while loop gives a condition,jab tak condition true rahay gi wo kaam repeatedly hota rahay ga.
 {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todos?",
            default: "true"
        }
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    // The loop is running on the basis of this variable condition.
    condition = todoQuestions.secondQuestion;
}
