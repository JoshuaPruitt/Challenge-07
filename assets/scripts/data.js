
class Data {
    
    constructor(title, intro, installation, usage, codeSnippitIntro, codeSnippit, credits, contactMe, technologies){
        this.title = title;
        this.intro = intro;
        this.installation = installation;
        this.usage = usage;
        this.codeSnippitIntro = codeSnippitIntro;
        this.codeSnippit = codeSnippit;
        this.credits = credits;
        this.contactMe = contactMe;
        this.technologies = technologies;
        
    }

    dataConstruct (title, intro, installation, usage, codeSnippit, credits, contactMe, technologies) {
        let codeSnippitInsert = "````"

        let data = 
`
# ${this.title}

## Introduction
${this.intro}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Code Snippit](#code-snippit)
* [Credits](#credits)
* [License](#license)
* [Contact Me](#contact-me)
* [Technologies](#technologies-used)

## Installation
${this.installation}.

## Usage
${this.usage}.

## Code Snippit
${this.codeSnippitIntro}.

${codeSnippitInsert}
${this.codeSnippit}.
${codeSnippitInsert}

## Credits
${this.credits}.

## Contact Me
<a href="${this.contactMe}">${this.contactMe}</a>.
                
## Technologies Used
${this.technologies}.

`
        return data
    }

    
}

export default Data;