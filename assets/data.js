

class Data {
    
    constructor(dataArr){
        this.title = dataArr.title;
        this.intro = dataArr.intro;
        this.installation = dataArr.installation;
        this.usage = dataArr.usage;
        this.codeSnippit = dataArr.codeSnippit;
        this.codeSnippitIntro = dataArr.codeSnippitIntro;
        this.features = dataArr.features;
        this.license = dataArr.license;
        this.technologies = dataArr.technologies;
        this.credits = dataArr.credits;
        this.email = dataArr.email;
        this.contactMe = dataArr.contactMe;
        this.gitHub = dataArr.gitHub;
        this.contactMe2 = dataArr.contactMe2;
        this.linkedIn = dataArr.linkedIn;
    }

    dataConstruct() {
        let codeSnippitInsert = "````";
        let licenseBadge;

        //change badge depending on the license selected.
        if(this.license == "MIT"){
            licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        } else if(this.license == "BSD"){
            licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        } else if(this.license == "EPL-1.0"){
            licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
        } else if(this.license == "GPLv3"){
            licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        } else if(this.license == "GPLv2"){
            licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
        } else if(this.license == "IPL-1.0"){
            licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
        } else if(this.license == "MPL-2.0"){
            licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        }

        //this serves as the template for which all the ReadMe's are generated upon
        let data = 

`# ${this.title}

## Introduction
${licenseBadge}
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

${this.intro}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Code Snippit](#code-snippit)
* [Features](#features)
* [License](#license)
* [Technologies](#technologies-used)
* [Credits](#credits)
* [Contact Me](#contact-me)

## Installation
${this.installation}.

## Usage
${this.usage}.

## Code Snippit
${this.codeSnippitIntro}.

${codeSnippitInsert}
${this.codeSnippit}.
${codeSnippitInsert}

## Features
${this.features}.

## License
Licensed under the ${this.license} license.

## Technologies Used
${this.technologies}.

## Credits
${this.credits}.

## Contact Me
${this.contactMe || this.contactMe2 ? "<ul>" : ""}
<li>My email ${this.email}</li>
${this.contactMe ? `<li><a href="${this.gitHub}>My GitHub</a></li>` : ""}
${this.contactMe2 ? `<li><a href="${this.linkedIn}"></a>My LinkedIn</li>` : ``}
${this.contactMe || this.contactMe2 ? "</ul>" : ""}       
`
        return data
    }

    
}

export default Data;