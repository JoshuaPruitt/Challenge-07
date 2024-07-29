// TODO: Include packages needed for this application
import * as fs from 'fs'
import inquirer from "inquirer"
import colors from "colors"
import { constants } from 'buffer';

let codeSnippitInsert = "````"

//controls the 
let githubConditional =  {
    type: 'input',
    message: "What is your github link?",
    name: 'contactMeGitHub',
}

//index number
let i;

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your programs title?",
            name: 'title',
        },

        {
            type: 'input',
            message: "What does your program require to be installed?",
            name: 'installation',
        },

        {
            type: 'input',
            message: "How do you use your program?",
            name: 'usage',
        
        },

        {
            type: 'input',
            message: "What is an important piece of code from your program? (code please)",
            name: 'codeSnippit',
            
        },

        {
            type: 'input',
            message: "How does that piece of code work?",
            name: 'codeSnippitIntro',
        },

        {
            type: 'input',
            message: "Who are the credits for your code?",
            name: 'credits',
        },

        {
            type: 'confirm',
            message: "Do you wish to add a GitHub link?",
            name: 'contactMe',
            when(answers) {

                //splice the follow Up question into the array
                prompt.splice(i+1, 0, githubConditional)
            }
        },

        {
            type: 'input',
            message: "What programs did you use to create your program?",
            name: 'technologies',
        },
    ])

    .then((prompt) => {
        let data = 
`
# ${prompt.title}

## Introduction
${prompt.intro}

## Table of Contents
## Table of Contents 


* [Installation](#installation)
* [Usage](#usage)
* [Code Snippit](#code-snippit)
* [Credits](#credits)
* [License](#license)
* [Contact Me](#contact-me)
* [Technologies](#technologies-used)

## Installation
${prompt.instalation}.

## Usage
${prompt.usage}.

## Code Snippit

${prompt.codeSnippitIntro}.

${codeSnippitInsert}
${prompt.codeSnippit}.
${codeSnippitInsert}

## Credits

${prompt.credits}.

## Contact Me

${prompt.contactMe}.
            

## Technologies Used

${prompt.technologies}.
`

        //reads the template file
        // let template = fs.readFile('./assets/template.txt', 'utf8' ,(err, data) => {

        //     if (data !== undefined){
        //         console.log(' File was read Successfully!')
        //     } else {
        //         console.error(err)
        //     }
        // });
            
        //writes the prompt data into README.md
        fs.writeFile('README.md', data ,(err) =>
            err ? console.error(err) : console.log('File was written to Successfully!'));
        
    });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
