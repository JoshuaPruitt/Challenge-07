// TODO: Include packages needed for this application
import * as fs from 'fs'
import inquirer from "inquirer"
import colors from "colors"
import { constants } from 'buffer';

let codeSnippitInsert = "````"

//function writes to designated file
const writeToFile = (output, data) =>
    fs.writeFile(output, data ,(err) =>
        err ? console.error(err) : console.log('File was written to Successfully!'));


const questions = [
        {
            type: 'input',
            message: "What is your programs title?",
            name: 'title',
        },

        {
            type: 'input',
            message: "What is the intro to your program?",
            name: 'intro',
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
            name: 'contactMe',
            message: "Do you wish to add a GitHub link?",
        },

        {
            type: 'input',
            message: "What is your github link?",
            name: 'gitHub',
            when(answers) {
                return answers.contactMe
            }
        },
        
        {
            type: 'input',
            message: "What programs did you use to create your program?",
            name: 'technologies',
        },
];

//this runs the inquire package
inquirer.prompt(questions).then((prompt) => {
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
${prompt.installation}.

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
            
        //writes the prompt data into README.md within the output folder
        writeToFile('./output/README.md', data)
        
});


