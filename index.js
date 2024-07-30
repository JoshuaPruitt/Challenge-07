// TODO: Include packages needed for this application
import * as fs from 'fs'
import inquirer from "inquirer"
import colors from "colors"
import { constants } from 'buffer';

import Data from "./assets/scripts/data.js"


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

        //parse data from the prompt into the data class
        const parseData = new Data(
            prompt.title, 
            prompt.intro, 
            prompt.installation, 
            prompt.usage,
            prompt.codeSnippitIntro,
            prompt.codeSnippit,
            prompt.credits,
            prompt.contactMe,
            prompt.gitHub
        )

        //take newly parsed data and run it throught the dataConstruct function to construct a new README
        const NewData = parseData.dataConstruct();

        //writes the prompt data into README.md within the output folder
        writeToFile('./output/README.md', NewData)
        
});


