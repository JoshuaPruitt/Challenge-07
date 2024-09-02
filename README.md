# Challenge-07 (README Generator)

## Introduction

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

This program generates README's for all your projects! This README was made using this program!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Code Snippit](#code-snippit)
- [Features](#features)
- [License](#license)
- [Technologies](#technologies-used)
- [Credits](#credits)
- [Contact Me](#contact-me)

## Installation

Just download the files onto your machine and run "index.js" with node.js!

## Usage

Once started the user is prompted with questions. You will be prompted to type a messages, to answer yes or no questions, and to select an option from a list. All of the inputted information is then taken and pushed to a README file. Once the questions have been finished you can look in the programs directory at the " output" folder to find your finished readme file.

## Code Snippit

It's the main function used to write to the read me files. Using fs we can write data to a markdown file. An error is called if a README.md file already exists in the output directory. This error adds a number to the end of the readme files name to prevent overwriting files.

```
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
    }});
```

## Features

Some features include a badge being generated for your selected license. Writing to files. Appending numbers to file names to not have them be overwritten.

## License

Licensed under the MIT license.

## Technologies Used

<ul>
<li>Inquire.js (for question prompts).</li>
<li>Visual Studio Code (for writting code).</li>
<li>Mozzila Web Docs and W3 Schools (for getting help with JavaScript).</li>
</ul>

## Credits

<ul>
<li>Joshua Pruitt (me)</li>
<li>Coding bootcamp staff (for their help with Coding)</li>
<ul>

## Contact Me

<ul>
<li>My email: joshuapruitt6484@gmail.com</li>
<li><a href=https://github.com/JoshuaPruitt>My GitHub</a></li>
<li><a href=https://www.linkedin.com/in/joshua-pruitt-1a494a311/></a>My LinkedIn</li>
</ul>
