const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'admin',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);

const createTable = `CREATE TABLE IF NOT EXISTS people (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY (id)
)`;

connection.query(createTable);

app.get('/', (req, res) => {
  const sql_insert = `INSERT INTO people(name) VALUES('Leonardo')`;
  connection.query(sql_insert, (err) => {
    if (err) throw err;

    const sql_select = `SELECT name FROM people ORDER BY id DESC LIMIT 1`;
    connection.query(sql_select, (err, rows) => {
      if (err) throw err;

      const name = rows.length > 0 ? rows[0].name : 'Ninguém';

      res.send(`<h1>Full Cycle Rocks!</h1><p>${name}</p>`);
    });
  });
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});
