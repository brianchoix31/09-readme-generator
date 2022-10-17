// create function that returns the license link
function renderLicenseLink(license) {
  if (license === 'Apache'){
    return "[![License](https://img.shields.io/badge/license-Apache-lightgrey)](https://opensource.org/licenses/Apache-2.0)";
  }
  else if (license === 'GNU'){
    return "[![License](https://img.shields.io/badge/license-GPL-lightgrey)](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  }
  else if (license === 'MIT' ){
    return "[![License](https://img.shields.io/badge/license-MIT-lightgrey)](https://choosealicense.com/licenses/mit/)";
  }
  else {
    return "[![License](https://img.shields.io/badge/%20no%20license-unlicense-lightgrey)](https://choosealicense.com/no-permission/)";
  }
};

// create function for README file containing template with the user input data
function generateMarkdown(answers) {
  
  // create const that returns a license badge based on which license user selects
  const renderLicenseBadge = renderLicenseLink(answers.license);

  return `# ${answers.title}

  ${renderLicenseBadge}

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

  <code>${answers.installation}</code>

  ## Usage

  ${answers.usage}

  ## License

  This project is licensed under the ${answers.license} license.

  ## Contributing

  ${answers.contributing}

  ## Tests

  To run tests, run the following command:<br>

  <code>${answers.tests}</code>

  ## Support

  For support questions, email to ${answers.email}.<br>

  Find the developer's other repositories at ${answers.github}.
`;
}

module.exports = generateMarkdown;
