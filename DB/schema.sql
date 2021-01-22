DROP DATABASE IF EXISTS empTrackerDB;
CREATE DATABASE empTrackerDB;
USE empTrackerDB;
CREATE TABLE department (
	id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
	PRIMARY KEY(id)
);
CREATE TABLE role (
	id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    department_id INTEGER,
    salary DECIMAL (10, 3),
	PRIMARY KEY(id),
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);
CREATE TABLE employee (
	id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
	PRIMARY KEY(id),
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);
