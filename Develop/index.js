// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your projects title? (Required)',
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter Project Title!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project: (Required)',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter Description!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide information on the usage of your project: (Required)',
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please provide Usage!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'credits',
    message:
      'Provide collaborators, if any, with links to their GitHub profiles.',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: [
      'Apache 2.0 License',
      'Boost Software License 1.0',
      'Eclipse Public License 1.0',
      'The Hippocratic License 2.1',
      'IBM Public License Version 1.0',
      'Mozilla Public License 2.0',
    ],
  },
  {
    type: 'input',
    name: 'contributing',
    message:
      'Provide information on the contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test insturctions for your project:',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username? (Required)',
    validate: (usernameInput) => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'questions',
    message:
      'Please provide instructions how to reach you with addintional questions: ',
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile(`README.md`, data, (err) => {
    if (err) throw err;

    console.log('The README.md is now created!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(generateMarkdown).then(writeToFile);
}

// Function call to initialize app
init();
