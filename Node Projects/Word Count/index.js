import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter the Sentence to count the word",
    }
]);
const words = answers.Sentence.split(" ");
console.log(words.length);
