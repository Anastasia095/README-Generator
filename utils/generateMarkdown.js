function renderLicenseBadge(license) {
  if (license == 'No License') {
    return " ";
  }
  return ` [![badge](https://img.shields.io/static/v1?label=license&message=`
  + license 
  + `&color=green)](https://choosealicense.com/licenses/`
  + license.toLowerCase()
  +`/)`;

}

function renderLicenseSection(data,license) {
  if (license == 'No License') {
    return " ";
  }
  var year = new Date().getFullYear();
  console.log(license);
  return `
  ## License ${data.license}

  > Copyright [${year}] [${data.fullName}]  
  > Paste the [text](https://choosealicense.com/licenses/${license.toLowerCase()}) of the license here
   
`
}

function generateMarkdown1(data, license) {

  return `

# ${data.title} ${renderLicenseBadge(license)}

## Description
${data.description}

  ## Table of Content
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}
  ![video](utils\video.gif)
  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Questions
  Should you have any questions you can reach me via Github or Email.  
  ${data.email}  
  ${"https://github.com/" + data.github}

  ## How to contribute [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)  
  ### Pull requests are welcome.
  If you don't have git on your machine you can install it [here](https://docs.github.com/en/get-started/quickstart/set-up-git).  
  Other tools you will need:
  [node.js](https://nodejs.dev/learn/how-to-install-nodejs)  
  [inquirer package for node.js](https://www.npmjs.com/package/inquirer/v/8.2.4#questions)

  ${renderLicenseSection(data, license)}
   
  `
}

module.exports = {
 method1: generateMarkdown1,
 method2: renderLicenseBadge,
};
