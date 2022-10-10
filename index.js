// included packages needed for this app
const inquirer = require('inquire');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// created init function to initialize app, containing an array of questions for user input within inquirer .prompt command
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'username',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your project name?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please write a short description of your project.',
            },
            {
                type: 'list',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: [
                    'Apache',
                    'Academic',
                    'GNU',
                    'ISC',
                    'MIT',
                    'Mozilla',
                    'Open'
                ],
            },
            {
                type: 'input',
                name: 'dependencies',
                message: 'What command should be run to install dependencies?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What command should be run to run tests?',
            },
            {
                type: 'input',
                name: 'repo',
                message: 'What does the user need to know about using the repo?',
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'What does the user need to know about contributing to the repo?',
            },
        ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function call to initialize app
init();