
class Data {
    
    constructor(dataArr){
        this.title = dataArr.title;
        this.intro = dataArr.intro;
        this.installation = dataArr.installation;
        this.usage = dataArr.usage;
        this.codeSnippit = dataArr.codeSnippit;
        this.codeSnippitIntro = dataArr.codeSnippitIntro;
        this.features = dataArr.features;
        this.technologies = dataArr.technologies;
        this.credits = dataArr.credits;
        this.contactMe = dataArr.contactMe;
        this.gitHub = dataArr.gitHub;
        this.contactMe2 = dataArr.contactMe2;
        this.linkedIn = dataArr.linkedIn;
    }

    dataConstruct() {
        let codeSnippitInsert = "````"

        //this serves as the template for which all the ReadMe's are generated upon
        let data = 

`# ${this.title}

## Introduction
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

${this.intro}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Code Snippit](#code-snippit)
* [Features](#features)
* [Technologies](#technologies-used)
* [Credits](#credits)
* [Contact Me](#contact-me)
* [License](#license)

## Installation
${this.installation}.

## Usage
${this.usage}.

## Code Snippit
${this.codeSnippit}.

${codeSnippitInsert}
${this.codeSnippitIntro}.
${codeSnippitInsert}

## Features
${this.features}.

## Technologies Used
${this.technologies}.

## Credits
${this.credits}.

${this.contactMe || this.contactMe2 ? "## Contact Me" : ""}
${this.contactMe || this.contactMe2 ? "<ul>" : ""}
${this.contactMe ? `<li><a href="${this.gitHub}>My GitHub</a></li>` : ""}
${this.contactMe2 ? `<li><a href="${this.linkedIn}"></a>My LinkedIn</li>` : ``}
${this.contactMe || this.contactMe2 ? "</ul>" : ""}       
`
        return data
    }

    
}

export default Data;