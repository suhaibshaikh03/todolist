import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: 'input',
            message: "What do you want to add in your Todos?",
            validate: function (input) {
                if (input.trim() === '') {
                    return "Please enter a non-empty value.";
                }
                return true;
            }
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Do you want to add more?",
            default: false
        }
    ]);
    todos.push(todoQuestions.firstQuestion);
    condition = todoQuestions.secondQuestion;
}
let y = await inquirer.prompt({
    name: "thirdQuestion",
    type: "confirm",
    message: "Do you want to delete an item?",
    default: false
});
if (y.thirdQuestion === true) {
    let x = await inquirer.prompt({
        name: "del",
        message: "Please select option",
        type: "list",
        choices: ["from end", "from beginning"]
    });
    if (x.del === "from end") {
        todos.pop(); // Corrected: Added parentheses after pop
    }
    else if (x.del === "from beginning") {
        todos.shift(); // Corrected: Added parentheses after shift
    }
}
console.log(todos);
