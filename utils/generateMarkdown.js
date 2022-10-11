// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// created generateMarkdown function for README file containing template with the user input data
function generateMarkdown(answers) {

  return `
  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Support](#support)
  
  ## Installation
  To install necessary dependencies, run the following command:<br>
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  This project is licensed under the ${answers.license} license.

  ## Contributing
  ${answers.contributing}

  ## Tests
  To run tests, run the following command:<br>
  ${answers.tests}

  ## Support
  For support questions, email to ${answers.email}.
  Find the developer's other repositories at ${answers.github}.

`;
}

module.exports = generateMarkdown;