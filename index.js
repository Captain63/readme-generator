// Installs modules needed for application
const inquirer = require('inquirer');
const utils = require('utils');
const fs = require('fs');

// Categories: Title, Description, Installation, Usage, License, Contributing, Tests, GitHub username, and email
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
    },
    {
        type: 'input',
        message: "Enter installation instructions",
        name: "Installation"
    },
];

// Function to write README file
const writeToFile = (fileName, data) => {
    const markdownText = `# ${data["Project Title"]} 
 
## Description
${data["Description"]}

## Installation  
${data["Installation"]}`;
    
    fs.writeFile(fileName, markdownText, (err) => {
        err ? console.error(err) : console.log("README created!");
    })
}

// Initial function to prompt user for inputs
const init = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log("Responses captured");
            writeToFile("README-Test.md", response);
        })      
}

// Function call to initialize app
init();
