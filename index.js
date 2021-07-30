// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const manQuestions = [
    {
        type: 'input',
        name: 'manName',
        message: "What is the manager's name? (Required)",
        validate: (manName) => {
            if (manName) {
                return true;
            } else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'manId',
        message: "What is the manager's employee ID? (Required)",
        validate: (manId) => {
            if (manId) {
                return true;
            } else {
                console.log("Please enter the manager's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'manEmail',
        message: "What is the manager's email? (Required)",
        validate: (manEmail) => {
            if (manEmail) {
                return true;
            } else {
                console.log("Please enter the manager's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'manOff',
        message: "What is the manager's office number? (Required)",
        validate: (manOff) => {
            if (manOff) {
                return true;
            } else {
                console.log("Please enter the manager's office number!");
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Choose an employee to add to the team',
        name: 'employee',
        choices: ['Engineer', 'Intern'],
    },
];

const addEngineer = employeeData => {
    if(!employeeData){
        employeeData = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: "What is the engineer's name? (Required)",
            validate: (engName) => {
                if (engName) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engId',
            message: "What is the engineer's employee ID? (Required)",
            validate: (engId) => {
                if (engId) {
                    return true;
                } else {
                    console.log("Please enter the engineer's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engEmail',
            message: "What is the engineer's email? (Required)",
            validate: (manEmail) => {
                if (manEmail) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engGit',
            message: "What is the engineer's Github username? (Required)",
            validate: (engGit) => {
                if (engGit) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github username!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'Do you want to add another employee?',
            name: 'employee',
            choices: ['Engineer', 'Intern', 'Done'],
        },
    ]).then(engAnswers => {
        employeeData.push(engAnswers);
        if (engAnswers.employee === 'Engineer'){
            return addEngineer(employeeData);
        }
        else if (engAnswers.employee === 'Intern'){
            return addIntern(employeeData);
        }
        else if (engAnswers.employee === 'Done'){
            return employeeData;
        }
    })
};

const addIntern = employeeData => {
    if(!employeeData){
        employeeData = [];
    }
    //console.log("start: "+employeeData);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: "What is the intern's name? (Required)",
            validate: (intName) => {
                if (intName) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intId',
            message: "What is the intern's employee ID? (Required)",
            validate: (intId) => {
                if (intId) {
                    return true;
                } else {
                    console.log("Please enter the intern's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intEmail',
            message: "What is the intern's email? (Required)",
            validate: (intEmail) => {
                if (intEmail) {
                    return true;
                } else {
                    console.log("Please enter the intern's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intSchool',
            message: "What is the intern's school? (Required)",
            validate: (intSchool) => {
                if (intSchool) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'Do you want to add another employee?',
            name: 'employee',
            choices: ['Engineer', 'Intern', 'Done'],
        },
    ]).then(intAnswers => {
        employeeData.push(intAnswers);
        //console.log("end: "+employeeData)
        if (intAnswers.employee === 'Engineer'){
            return addEngineer(employeeData);
        }
        else if (intAnswers.employee === 'Intern'){
            return addIntern(employeeData);
        }
        else if (intAnswers.employee === 'Done'){
            return employeeData;
        }
    })
};


/*
// A function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName + '.md', data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}*/

// A function to initialize app
function init() {
    inquirer.prompt(manQuestions)
        .then(manAnswers => {
            if (manAnswers.employee === 'Engineer') {
                console.log("engineer");
                addEngineer()
                .then(employeeData => {
                    console.log(employeeData);
                })
            }
            else if (manAnswers.employee === 'Intern') {
                console.log("intern");
            }

            // writeToFile("README", generateReadme(answers));
            // console.log("Readme generated!");
        })

}

// Function call to initialize app
init();
