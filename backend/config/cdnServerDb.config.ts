import mysql from "mysql";
import util from "util";

let pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  password: "1",
  database: "cdnServer",
  insecureAuth: true,
});

// promisify bind pool to a promise and remove callback
const pool_query = util.promisify(pool.query).bind(pool);

const db = {
  load: function load(sql: string) {
    return pool_query(sql);
  },
};

export default db;
