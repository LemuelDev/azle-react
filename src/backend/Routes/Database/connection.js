const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  username: "root",
  password: "gwenn0701",
  database: "volunteer_climate_action_database",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database!!");
});

module.exports = connection;
