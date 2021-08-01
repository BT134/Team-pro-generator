//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./Assets/js/markdown')

//An array of questions for user input
inquirer.prompt([
      {
        type: 'input',
        name: 'team',
        message: 'What is your team name?',
        // We need to validate that user entered at least one word
        validate: function (answer) {
          if (answer.length < 1) {
              return console.log("You must enter a team name.");
          }
          return true;
      }
      },
      {
        type: 'input',
        name: 'memberName',
        message: "What is your team member's name? ",
        // We need to validate that user entered at least one word
        validate: function (answer) {
          if (answer.length < 1) {
              return console.log("You must enter the team member's name.");
          }
          return true;
      } 
      },
      {
        type: 'list',
        name: 'role',
        message: "What is this team member's role?",
        choices: ['Manager', 'Engineer', 'Intern',],
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team member's ID number?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team member's email address?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the team member's Github username?",
        
      },
 
    ])

  .then((response) => {


    let pageContent = markdown.generateHTML(response)

    //Create readme file
    fs.writeFile('index.html', pageContent, (err) =>
        err ? console.error(err) : console.log('Creating HTML Page...')
    )
}
  );