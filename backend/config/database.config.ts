import mysql from "mysql";

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tramylemy",
  database: "location_care",
});

function queryDatabase(query: string) {
  connection.connect();

  connection.query(query, function (err, ret, fields) {
    if (err) {
      throw err;
    }

    console.log("ret: ", ret);

    console.log("the solution is: ", ret[0].solution);
  });

  connection.end();
}

export { queryDatabase };
