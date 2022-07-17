// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license[0] == undefined) {
    console.log("RETURN");
    return " ";
  }
  console.log("type of " + typeof(license))
  return ` [![badge](https://img.shields.io/static/v1?label=license&message=`
  + license 
  + `&color=green)](https://choosealicense.com/licenses/`
  + license[0].toLowerCase()
  +`/)`;

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data,license) {
  var year = new Date().getFullYear();
  return `
      ``md
      Copyright [${year}] [${data.fullName}]

      [copy the [text](https://choosealicense.com/licenses/${license[0].toLowerCase()}) of the license here]
      ``
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown1(data, license) {

  return `

# ${data.title} ` 
+ renderLicenseBadge(license)
+ `
## Description
${data.description}

  ## Table of Content
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

  ## Questions
  Should you have any questions you can reach me via Github or Email.  
  ${data.email}  
 bsl-1.0 ${data.github}

  ## License `
  + renderLicenseSection(data, license)
  + `
  `
}

module.exports = {
 method1: generateMarkdown1,
 method2: renderLicenseBadge,
};
