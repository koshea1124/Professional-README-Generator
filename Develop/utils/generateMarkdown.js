const fs = require('fs');
// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 switch (license) {
  case '':
    return '';
  default:
    return '![License](https://img.shields.io/badge/license-${license}-blue)';
 }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case '':
      return '';
    default:
      break;
  }
  let link = ''

  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'GPLv3':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    default:
      break;
  }
  return link;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case '':
      return '';
    default:
      return `
      This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.description}
  
  ## Table of Contents:
  * [Installation Instructions](#Installation-Instructions)
  * [Usage Information](#Usage-Information)
  * [Contribution Guidelines](#Contribution-Guidelines)
  * [Test Instructions](#Test-Instructions)
  * [License](#License)
  * [Questions](#Questions)

  ## Installation Instructions:
  ${data.installation}
  
  ## Usage Instructions:
  ${data.usage}
  
  ## Contribution Guidelines:
  ${data.contribution}
  
  ## Test Instructions:
  ${data.test}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions:
  For additonal questions or open feedback, feel free to contact me at my email:${data.email}. 
  You can also find me on Github at [${data.github}](https://github.com/${data.github}).
  
  © 2023 Confidential and Proprietary. All Rights Reserved.`;
}

module.exports = generateMarkdown;
