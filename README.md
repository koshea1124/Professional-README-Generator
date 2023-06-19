# Professional README Generator 

##  Description
Having a README file on GitHub is crucial for several reasons. Firstly, it serves as a comprehensive guide and introduction to your project, allowing others to quickly understand its purpose, functionality, and usage. It provides essential information such as installation instructions, dependencies, and configuration details, enabling seamless onboarding and reducing the learning curve for potential collaborators or users. Secondly, a well-written README enhances project visibility, making it more attractive to open-source contributors, potential employers, or fellow developers who may stumble upon your repository. It showcases your professionalism, attention to detail, and commitment to fostering a collaborative environment. Lastly, a README acts as a documentation hub, enabling you to document important updates, known issues, troubleshooting tips, and frequently asked questions, ensuring that users have the necessary resources to navigate and engage with your project effectively. In essence, a README file is an indispensable tool for effective project communication, collaboration, and community engagement on GitHub.

A README generator can provide significant benefits in streamlining the process of creating a comprehensive and well-structured README file. Firstly, it saves valuable time and effort by automating the initial setup and formatting of the document. Instead of starting from scratch, a README generator offers pre-defined templates or prompts that guide users through the necessary sections, ensuring consistency and completeness. This simplifies the task, especially for individuals who may be less experienced in writing documentation or unsure of what information to include. Secondly, a README generator promotes consistency across projects within an organization or among collaborators. By using a standardized template, it helps maintain a unified format, style, and content structure, making it easier for users to navigate and understand different projects. This consistency enhances the overall professionalism and readability of documentation across the board. Lastly, a README generator encourages the inclusion of essential information. It prompts users to provide key details such as project description, installation instructions, usage examples, contribution guidelines, and contact information. This ensures that critical information is not overlooked, leading to more informative and user-friendly README files. In summary, a README generator offers time-saving benefits, promotes consistency, and encourages the inclusion of crucial details, making it a valuable tool for efficiently creating high-quality README files.

##  Table of Contents
##  Overview
### The Challenge
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project. My task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package

### User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

### Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

##  Installation
### Required Software
* VS Code
* Terminal or GitBash
* Node.js

### Steps to Initialize the Generator
* Copy Link: Within this repository, hit the "Code" button to copy the link.
* Clone Code: Using your terminal or Gitbash, type the following: "git clone paste copied URL here"
* Install NPM: Being in the correct directory of your project, install NPM using the command "npm init -y" in your command line on your terminal or Gitbash.
* Intall Inquire: Being in the correct directory of your project, install inquirer using the command "npm install inquirer@8.2.4" in your command line on your terminal or Gitbash.
* RUN the APP: You are ready to run the application.

##  Usage
Once your software is downloaded and the Node packages are initialized it is time to begin.

In the correct directory, open up the terminal and use the command "node index.js".

You will be prompted with all the important questions that will autogenerate your README.

Your README will be generated and placed in the "dist" folder.

##  Screenshot
![image](https://github.com/koshea1124/Professional-README-Generator/assets/119077249/5e761a03-87cf-4f4c-816e-1614ab357d2e)


##  Demonstration
Link to YouTube Video:

##  Licenses
N/A

##  Contributing
If you are interested in contributing to this or other projects in this repository, please reach out.

##  Tests
To test the application, follow these steps:
* Open the file in VS Code.
* Open the terminal and ensure you are in the correct directory.
* Run the command "node index.js".
* Proceed to answer the prompts and observe the preview of the generated README.md file, located in the "dist" folder.

##  Questions
Please feel free to reach out if you have any questions:
* GitHub UserName: https://github.com/koshea1124
* Email: koshea1980@gmail.com

##  Credits
* [NPM Install](https://docs.npmjs.com/cli/v6/commands/npm-init)
* [NPM Inquirer](https://www.npmjs.com/package/inquirer)
* [Starter Code Provided by Bootcamp](https://github.com/coding-boot-camp/potential-enigma)
* [Code Academy](https://www.codecademy.com/catalog)
* [Markdown Crash Course Video](https://www.youtube.com/watch?v=HUBNt18RFbo)
* [MDN Docs](https://developer.mozilla.org/en-US/)


