const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table"); 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "empTrackerDB",
});
connection.connect((err) => {
    if (err) return console.log(err);
    console.log("connected");
    mainMenu();
});

function mainMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                choices: [
                    "Add a Department",
                    "Add a role",
                    "Add a Employee",
                    "View Departments",
                    "View Roles",
                    "View Employees",
                    "Update employee roles"],
                name: "choice",
            },
        ])
        .then((answer) => {
            switch (answer.choice) {
              case "Add a Department":
                depAdd();
                break;
              case "Add a role":
                roleAdd();
                break;
              case "Add a Employee":
                empAdd();
                break;
              case "View Departments":
                depView();
                break;
              case "View Roles":
                roleView();
                break;
              case "View Employees":
                empView();
                break;
              case "Update employee roles":
                empRoleUpd();
                break;
              default:
                connection.end();
            }
          })
          .catch((error) => {
            console.log(error);
            process.exit(1);
          });
}

function depAdd() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter name of department?",
                name: "department",
            },
        ])
        .then(answers => {
            connection.query("SELECT * FROM department", function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(answers);
                    mainMenu();
                }
            }
            );
        });
}
function roleAdd() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter name of role?",
                name: "role",
            },
        ])
        .then(answers => {
            connection.query("SELECT * FROM role", function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(answers);
                    mainMenu();
                }
            }
            );
        });
}
function empAdd() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter name of employee?",
                name: "employee",
            },
        ])
        .then(answers => {
            connection.query("SELECT * FROM employee", function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(answers);
                    mainMenu();
                }
            }
            );
        });
}
function depView() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter name of department you would like to view",
                name: "department",
            },
        ])
        .then(answers => {
            connection.query("SELECT * FROM department", function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(answers);
                    mainMenu();
                }
            }
            );
        });
}
function roleView() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter name of role you would like to view?",
                name: "role",
            },
        ])
        .then(answers => {
            connection.query("SELECT * FROM role", function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(answers);
                    mainMenu();
                }
            }
            );
        });
}
function empView() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter name of employee you would like to view?",
                name: "employee",
            },
        ])
        .then(answers => {
            connection.query("SELECT * FROM employee", function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(answers);
                    mainMenu();
                }
            }
            );
        });
}
function empRoleUpd() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter name of role you want to update?",
                name: "roleUpdate",
            },
        ])
        .then(answers => {
            connection.query("SELECT * FROM role", function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(answers);
                    mainMenu();
                }
            }
            );
        });
}
