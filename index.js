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
          "Update employee roles",
        ],
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
    .then((answers) => {
      connection.query("SELECT * FROM department", function (err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log(answers);
          mainMenu();
        }
      });
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
    .then((answers) => {
      connection.query("SELECT * FROM role", function (err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log(answers);
          mainMenu();
        }
      });
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
    .then((answers) => {
      connection.query(`INSERT INTO employee (name) VALUES  (?)` [employee.name], function (err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log(answers);
          mainMenu();
        }
      });
    });
}
function depView() {
    connection.query(`SELECT department.id, department.name
    FROM department`
   , function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.table(res);
        mainMenu();
      }
    });
  }
function roleView() {
    connection.query(`SELECT role.id, role.title, role.department_id, role.salary
    FROM role
    LEFT JOIN department 
    ON deparment.deparment_id = .id;`
   , function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.table(res);
        mainMenu();
      }
    });
  }
function empView() {
  connection.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title AS "role", role.salary 
  FROM employee
  LEFT JOIN role 
  ON employee.role_id = role.id;`
 , function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.table(res);
      mainMenu();
    }
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
    .then((answers) => {
      connection.query("SELECT * FROM role", function (err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log(answers);
          mainMenu();
        }
      });
    });
}
