// TODO: Include packages needed for this application
import fs from 'fs'
import inquire from "inquire"
import colors from "colors"
import { constants } from 'buffer';

//controls the 
let githubConditional =  {
    type: 'input',
    message: "What is your github link?",
    name: 'contactMeGitHub',
    

}

//index number
let i;


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
            when(){
                i++
            }
        },

        {
            type: 'prompt',
            message: "What does your program require to be installed?",
            name: 'installation',
            when(){
                i++
            }
        },

        {
            type: 'prompt',
            message: "How do you use your program?",
            name: 'usage',
            when(){
                i++
            }
            
        },

        {
            type: 'prompt',
            message: "What is an important piece of code from your program? (code please)",
            name: 'codeSnippit',
            when(){
                i++
            }
        },

        {
            type: 'prompt',
            message: "How does that piece of code work?",
            name: 'codeSnippitIntro',
            when(){
                i++
            }
        },

        {
            type: 'prompt',
            message: "Who are the credits for your code?",
            name: 'credits',
            when(){
                i++
            }
        },

        {
            type: 'confirm',
            message: "Do you wish to add a GitHub link?",
            name: 'contactMe',
            when() {
                i++
                
                if (this.contactMe){
                    //splice the follow Up question into the array
                    prompt.splice(i+1, 0, githubConditional)
                }
            }
        },

       

        {
            type: 'prompt',
            message: "What programs did you use to create your program?",
            name: 'technologies',
            when(){
                i++
            }
        },
    ])

    .then((prompt) => {
        let template = fs.readFile('./assets/template.md', 'utf8' ,(err) =>
            err ? console.error(err) : console.log('Success!'));


        let retranslate = JSON.stringify(template)

        //writes the prompt data into README.md
        fs.writeFile('README.md', retranslate ,(err) =>
            err ? console.error(err) : console.log('Success!'));
        
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
