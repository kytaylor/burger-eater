// Dependencies
const mysql = require("mysql");

// Connection Properties
let connection

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  }
  else{
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "burgers_DB"
    });
  }

// Exports
module.exports = connection;