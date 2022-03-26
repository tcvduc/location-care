"use strict";
exports.__esModule = true;
exports.queryDatabase = void 0;
var mysql_1 = require("mysql");
var connection = mysql_1["default"].createConnection({
    host: "localhost",
    user: "root",
    password: "tramylemy",
    database: "location_care"
});
function queryDatabase(query) {
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
exports.queryDatabase = queryDatabase;
