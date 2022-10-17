// include packages needed for this app
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// create function to initialize app, containing an array of questions for user input within inquirer .prompt command
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: 'title',
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
                    'GNU',
                    'MIT',
                ],
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What command should be run to install dependencies?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What command should be run to run tests?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What does the user need to know about using the repo?',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What does the user need to know about contributing to the repo?',
            },
        ])

        // store user input data in answers, then create function to write README file
        .then((answers) => {
            fs.writeFile('README.md', generateMarkdown(answers),
            (err) => err ? console.log(err) : console.log('Successfully generated README.md!'))
        });
};

// calls function to initialize app
init();
