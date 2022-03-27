import mysql from "mysql";
import util from "util";

let pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  password: "1",
  database: "location_care",
  insecureAuth: true,
});

// promisify bind pool to a promise and remove callback
const pool_query = util.promisify(pool.query).bind(pool);

function arrayifyForUnknow(unknow: unknown): [] {
  // if (typeof unknow === "") {
  // }
  return [];
}

function test(sql: string): Promise<[]> {
  const ret: Promise<[]> = new Promise(async (resolve, reject) => {
    // resolve([]);
    const pool_query = util.promisify(pool.query).bind(pool);
    const query_ret = await pool_query(sql);
    const ret = [...query_ret];
  });

  return ret;
}

const db = {
  load: function load(sql: string) {
    return pool_query(sql);
  },
  loadOrigins: async function (): [] {
    const sql = "";
    const queryRetUnknow: unknown = await pool_query(sql);

    const ret: [] = [];

    if (queryRetUnknow) {
      for (let i = queryRetUnknow.length - 1; i >= 0; --i) {}
    }

    return ret;
  },
};

export default db;
