// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    if (license !== 'no license') {
      return `
      https://img.shields.io/apm/l/github?color=blueviolet&style=plastic
      `;
    } else {
      return ' ';
    }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  function renderLicenseSection(license) {
    if (license !== 'no license') {
      return `
      The application is covered under the following license(s):
      
      ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
  }
};


function renderLicenseTable(license) {
  if (license !== 'no license') {
    return `
    * [License](#license)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * Images
  * [License(s)](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}
  Images:
  For information on how to add images and screenshots, visit the following website: 
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  ## [License](#table-of-contents)
  ${renderLicenseSection(data.license)}
  ## [Contributors](#table-of-contents)
  ${data.contributing}
  ## [Tests](#table-of-contents)
  ${data.tests}
  ## [Questions](#table-of-contents)
  
  If you have any questions please feel free to contact me at [Email: ${data.questions}](mailto:${data.questions})
  ## [Credits](#table-of-contents)
  ${data.credits}
`;
};


module.exports = generateMarkdown;
