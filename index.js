// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const genMark = require('./utils/generateMarkdown');
const renderBadge = require('./utils/generateMarkdown');

console.log(genMark.method1);
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type: 'input',
    //     name: 'title',
    //     message: 'What is the title of your project?',
    //   },
    //   {
    //     type: 'input',
    //     name: 'description',
    //     message: 'Project description?',
    //   },
    //   {
    //     type: 'input',
    //     name: 'Installation',
    //     message: 'installation instructions?',
    //   },
    //   {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'What is this project used for?',
    //   },
    //   {
    //     type: 'input',
    //     name: 'credits',
    //     message: 'Who worked on this project?',
    //   },
    //   {
    //     type: 'input',
    //     name: 'github',
    //     message: 'Enter your GitHub link',
    //   },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What licenses would you like to include?',
        choices: ['MIT','ISC'],
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
      },

];


// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
    .then((data) => {
        fs.writeFile("README.md", genMark.method1(data, data.license), function (err) {
          if (err) throw err;
          console.log('File is created successfully.');
        });
    })
    .catch((data) => {
      console.log(data)
    })
}

// Function call to initialize app
init();
