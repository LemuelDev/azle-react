const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "gwen0701",
  database: "test",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to database");
    return;
  }
  console.log("Connection established");
});

module.exports = connection;
