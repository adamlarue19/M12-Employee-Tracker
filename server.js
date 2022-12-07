const inquirer = require('inquirer');
const mysql = require('mysql2');

const dataBase = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'company_db'
    },
);