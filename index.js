#! /usr/bin/env node
import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "write your guess b/w  1 to 10"
    }
]);
const { userGuess } = answer;
console.log(userGuess, "userGuess", systemGeneratedNo, "Sys");
if (userGuess === systemGeneratedNo) {
    console.log("Yaaa your answer is correct \n you win");
}
else {
    console.log("please try again better luck next time!");
}
