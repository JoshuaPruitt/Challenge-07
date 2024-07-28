// TODO: Include packages needed for this application
import fs from 'fs'
import inquire from "inquire"
import colors from "colors"


//use object Contructors to complete assignment. Provides blueprint for an object
function readMe (intro, snippit){
    this.intro = `This is the intro for the readme`;
    this.snippit = `This is the code snippit`;
}

// TODO: Create an array of questions for user input
const questions = [];

inquire
    .prompt([
        {
            type: 'prompt',
            message: "What is your programs title?",
            name: 'title',
        },

        {
            type: 'prompt',
            message: "What does your program require to be installed?",
            name: 'installation',
        },

        {
            type: 'prompt',
            message: "How do you use your program?",
            name: 'usage',
        },

        {
            type: 'prompt',
            message: "What is an important piece of code from your program? (code please)",
            name: 'codeSnippit',
        },

        {
            type: 'prompt',
            message: "How does that piece of code work?",
            name: 'codeSnippitIntro',
        },

        {
            type: 'prompt',
            message: "Who are the credits for your code?",
            name: 'credits',
        },

        {
            type: 'prompt',
            message: "What is your gitHub link?",
            name: 'contactMe',
        },

        {
            type: 'prompt',
            message: "What programs did you use to create your program?",
            name: 'technologies',
        },
    ])
    .then((prompt) => {
        //a new object will be created with the introduced information
        let newReadMe = new readMe(prompt.title, prompt.title)

        //writes the prompt data into README.md
        fs.writeFile('README.md', prompt ,(err) =>
            err ? console.error(err) : console.log('Success!'));
        
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
