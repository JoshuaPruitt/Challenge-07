// TODO: Include packages needed for this application
import * as fs from 'fs'
import inquirer from "inquirer"
import colors from "colors"
import { constants } from 'buffer';
//import the Data class from the data file for file writting later
import Data from "./assets/data.js"
//index number appended to the end of a file
let i = 0;

//function writes to designated file
const writeToFile = (fileName, data) =>
    fs.writeFile(fileName, data , {flag: "wx"}, (err) => {
        //an error starts if a file already exists. If a file exists append a number to the end of the file
        if (err){
            i++;
            console.log("File Already Exists");
            fileName = fileName.slice(0, 15) + `${i}` + '.md';
            writeToFile(fileName, data);
        } else {
            console.log('File was written to Successfully!');
        }
});


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
            message: "What are some features of your program?",
            name: 'features',
        },

        {
            type: 'list',
            message: "What License do you want to use for your Program?",
            name: 'license',
            choices: ["BSD", "EPL-1.0", "GPLv3", "GPLv2", "IPL-1.0", "MIT", "MPL-2.0"]
        },

        {
            type: 'input',
            message: "What programs did you use to create your program?",
            name: 'technologies',
        },

        {
            type: 'input',
            message: "Who are the credits for your code?",
            name: 'credits',
        },

        {
            type: 'input',
            message: "What is the email you want to be contacted on?",
            name: "email",
        },

        {
            type: 'confirm',
            name: 'contactMe',
            message: "Do you want to add a GitHub link?",
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
            type: 'confirm',
            name: 'contactMe2',
            message: "Do you want to add a link to your LinkedIn profile?",
        },

        {
            type: 'input',
            message: "What is the link of your LinkedIn profile?",
            name: 'linkedIn',
            when(answers) {
                return answers.contactMe2
            }
        },
        
];

//this runs the inquire package
inquirer.prompt(questions).then((prompt) => {

    //parse data from the prompt into the data class
    const parseData = new Data(prompt);

    //take newly parsed data and run it throught the dataConstruct function to construct a new README
    const NewData = parseData.dataConstruct();

    //writes the prompt data into README.md within the output folder
    writeToFile('./output/README.md', NewData);
        
});


