import mysql from "mysql";

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tramylemy",
  database: "location",
});
