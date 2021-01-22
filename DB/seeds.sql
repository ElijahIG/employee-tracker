INSERT INTO department (name) VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role (title, department_id, salary) VALUES 
("Sales Lead", 1, 100000),
("Salesperson", 1, 80000),
("Lead Engineer", 2, 150000),
("Software Engineer", 2, 120000),
("Accountant", 3, 125000),
("Legal Team Lead", 4, 250000),
("Lawyer", 4, 190000);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Ashley", "Rodriguez", 3, NULL),
("John", "Doe", 1, 1),
("Mike", "Chan", 2, 2),
("Kevin", "Tupik", 4, 1),
("Malia", "Brown", 5, NULL),
("Sarah", "Lourd", 6, NULL),
("Tom", "Allen", 7, 6);
