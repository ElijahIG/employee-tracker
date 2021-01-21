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
            switch (answer.action) {
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