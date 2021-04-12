// Installs modules needed for application
const inquirer = require('inquirer');
const utils = require('utils');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: "Project Title"
    },
    {
        type: 'input',
        message: "Enter a project description",
        name: "Description"
    }
];

// Function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
        err ? console.error(err) : console.log("README created!");
    })
}

// Initial function to prompt user for inputs
const init = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log("Responses captured");
            writeToFile("Test-README.md", response);
        })      
}

// Function call to initialize app
init();
