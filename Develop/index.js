// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a project title (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ('Please enter a project title');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter description of your application. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log ('Please enter a description');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log ('Enter your GitHub username');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use this application. (Required)',
        validate: usageInput => {
            if (usageInput){
                return true;
            } else {
                console.log ('Please enter instructions for how to use this application.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'repo',
        message: 'Please enter name of your repo. (Required)',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log ('Please enter your repo name');
                return false;
            }
        }
    },


    {
        type: 'checkbox',
        name: 'sections',
        message: 'Checkoff additonal sections you would like to add to your README.md file.',
        choices: [
            {
                name: 'Deployed Application',
                checked: false
            },

            {
                name: 'Installation',
                checked: false,
            },

            {
                name: 'Licenses',
                checked: false
            },

            {
                name: 'Ways to Contribute',
                checked: false
            },

            {
                name: 'Tests',
                checked: false
            },

            {
                name: 'Questions',
                checked: true
            },

            {
                name: 'Credits',
                checked: true
            },
        ]
    },

    {
        type: 'input',
        name: 'installation',
        message: 'List required packages for installation of your application',
        when: ({ sections }) => {
            if (sections.indexOf('Installation')> -1) {
                return true;
            } else {
                return false 
            }
        },
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log ('Enter installation instructions');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'link',
        message: 'Enter link to your deployed application',
        when: ({ sections }) => {
            if (sections.indexOf('Deployed Application') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log ('Must enter a link');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter your guidelines for contributing.',
        when: ({ sections }) => {
            if (sections.indexOf('Ways to Contribute') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Enter guidelines for contributing!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'license',
        message: 'Provide any license information',
        choices: ['MIT', 'ISC', 'OpenBSD'],
        default: 0,
        when: ({sections }) => {
            if (sections.indexOf('Licenses')> -1) {
                return true;
            } else {
                return false 
            }
        }
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Enter test information for your application.',
        when: ({ sections }) => {
            if (sections.indexOf('Tests') > -1) {
                return true;
            } else {
                return false;
            }
        },
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Enter test information for your application?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide an email address for questions.',
        when: ({ sections }) => {
            if (sections.indexOf('Questions') > -1) {
                return true;
            } else { 
                return false;
            }
        },
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Provide an email address');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide name or title of contributor or credit. (Required)',
        validate: contributorInput => {
            if (contributorInput) {
                return true;
            } else {
                console.log('Please enter name or link')
                return false
            }
        }
    }
];


// creates function to initialize app
function init() {
    return inquirer.prompt(questions);
};

//function to write the readme
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('README created!')
    });
};

// calls to initialize application
init() 
    .then(answers => generateMarkdown(answers))
    .then(generatedReadme => writeToFile('README.md', generatedReadme))
    .catch(err => {
        console.log(err);
    });