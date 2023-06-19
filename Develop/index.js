// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: 'What is the designated title of your project',
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project by providing a concise description that encompasses the W5H (Who, What, When, Where, Why, and How) aspects.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for usage. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Explain the guidelines for contributing to this project?",
    },
    {
        type: "input",
        name: "test",
        message: "Explain the necessary steps to run the tests for your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use for this project?",
        choices: ["MIT License", "Apache License 2.0", "GNU General Puplic License v3.0", "Mozilla Public License 2.0", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Please, enter your GitHub Profile Username:",
    },
    {
        type: "input",
        name: "email",
        message: "Please, enter your email address:",
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        //path for README file
        fs.writeFile('.dist/README.md', data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve ({
                ok: true,
                message: console.log ('Congratulations, the (Generated)README.md file has beeen successfully created! Go find the file in the distfolder.')
            });
        })
    })
}

// Create a function to initialize app
function init() {
    return inquirer.prompt (questions);
}

// Function call to initialize app
init()
.then(data => {
    const markdown = generateMarkdown(data);
    return writeToFile('README.md', markdown);
})
.then(response => {
    console.log(response.message);
})
.catch(err => {
    console.log(err);
})
