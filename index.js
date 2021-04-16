// Installs modules needed for application
const inquirer = require('inquirer');
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
        message: "Enter a project description:",
        name: "Description"
    },
    {
        type: 'input',
        message: "Enter installation instructions:",
        name: "Installation"
    },
    {
        type: 'input',
        message: "Enter usage instructions:",
        name: "Usage"
    },
    {
        type: 'list',
        message: "Choose a license for this project:",
        choices: ["Apache", "GNU", "MIT"],
        name: "License"
    },
    {
        type: 'input',
        message: "Enter instructions for contributing:",
        name: "Contributing"
    },
    {
        type: 'input',
        message: "Enter commands for testing the application:",
        name: "Testing"
    },
    {
        type: 'input',
        message: "Enter your GitHub username:",
        name: "Username"
    },
    {
        type: 'input',
        message: "Enter your email:",
        name: "Email"
    }
];

// Stores license content for markdownText declaration to access
const licenseContent = {
    "Apache": {
        notice: `Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0`,
        badgeSRC: `./license-badges/apache-license.svg`
    },
    "GNU": {
        notice: `This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.`,
        badgeSRC: `./license-badges/gnu-license.svg`
    },
    "MIT": {
        notice: `Permission is hereby granted, free of charge, to any person obtaining a copy of this Software and associated documentation files (the "Software"), to deal in the Software without  restriction, including without limitation the rights to use, copy, modify, merge, publish distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions.`,
        badgeSRC: `./license-badges/mit-license.svg`
    }
};

// Function to write README file
const writeToFile = data => {
    
    // Captures text input for use in markdownText and later for naming file
    let projectTitle = data["Project Title"];
    
    // Variable lays out text in markdown to pass into writeFile method
    const markdownText = `# ${projectTitle} 

![${data["License"]} badge](${licenseContent[data["License"]].badgeSRC})

## Description
${data["Description"]}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation  
${data["Installation"]}

## Usage
${data["Usage"]}

## License
${licenseContent[data["License"]].notice}

## Contributions
${data["Contributing"]}

## Tests
Run the following commands to test the application:
${data["Testing"]}

## Questions?
Reach out to me on GitHub (${data["Username"]}) or email me at ${data["Email"]}`;

    // Declares empty fileName value for later assignment
    let fileName = "";

    // Confirms value was given for projectTitle from user
    if (projectTitle) {
        // Removes whitespace outside of phrase and replaces spaces between title with dashes
        projectTitle = projectTitle.trim().split(" ").join("-");
        fileName = `${projectTitle}-README.md`;
    } else {
        // Default file name
        fileName = `Test-README.md`;
    }

    // Writes file
    fs.writeFile(fileName, markdownText, (err) => {
        err ? console.error(err) : console.log("README created!");
    })
}

// Initial function to prompt user for inputs
const init = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            // Confirms responses are submitted
            console.log("Responses captured");

            // 
            writeToFile(response);
        })      
}

// Function call to initialize app
init();
