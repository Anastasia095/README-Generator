// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const genMark = require('./utils/generateMarkdown');
const fs = require("fs");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for?',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Who worked on this project?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What licenses would you like to include?',
        choices: ['MIT','ISC','GPL-3.0','MPL-2.0','Apache-2.0','BSL-1.0', 'No License'],
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
      },
      {
        type: 'input',
        name: 'fullName',
        message: 'Enter your full name (Skip if not using license)',
      },
      

];

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

init();
