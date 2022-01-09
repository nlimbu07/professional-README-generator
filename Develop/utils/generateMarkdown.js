// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0 License') {
    return `(https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license == 'Boost Software License 1.0') {
    return `(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if (license == 'Eclipse Public License 1.0') {
    return `(https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  } else if (license == 'The Hippocratic License 2.1') {
    return `(https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)`;
  } else if (license == 'IBM Public License Version 1.0') {
    return `(https://img.shields.io/badge/License-IPL_1.0-blue.svg)`;
  } else if (license == 'Mozilla Public License 2.0') {
    return `(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else {
    return;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string'The Hippocratic License 2.1'
function renderLicenseLink(license) {
  if (license == 'Apache 2.0 License') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == 'Boost Software License 1.0') {
    return `(https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license == 'Eclipse Public License 1.0') {
    return `(https://opensource.org/licenses/EPL-1.0)`;
  } else if (license == 'The Hippocratic License 2.1') {
    return `(https://firstdonoharm.dev)`;
  } else if (license == 'IBM Public License Version 1.0') {
    return `(https://opensource.org/licenses/IPL-1.0)`;
  } else if (license == 'Mozilla Public License 2.0') {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'Apache 2.0 License') {
    return `![License]`;
  } else if (license == 'Boost Software License 1.0') {
    return `![License]`;
  } else if (license == 'Eclipse Public License 1.0') {
    return `![License]`;
  } else if (license == 'The Hippocratic License 2.1') {
    return `![License: Hippocratic 2.1]`;
  } else if (license == 'IBM Public License Version 1.0') {
    return `![License: IPL 1.0]`;
  } else if (license == 'Mozilla Public License 2.0') {
    return `![License: MPL 2.0]`;
  } else {
    return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  

  [${renderLicenseSection(data.license)}${renderLicenseBadge(
    data.license
  )}]${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  Licensed by ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  * GitHub: [${data.username}](https://github.com/${data.username})
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
