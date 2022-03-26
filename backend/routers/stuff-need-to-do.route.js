"use strict";
exports.__esModule = true;
var express_1 = require("express");
var database_config_1 = require("../config/database.config");
var router = express_1["default"].Router();
router.get("/", function (req, res, next) {
    var query = "select * from stuff_need_to_do";
    var ret = (0, database_config_1.queryDatabase)(query);
});
exports["default"] = router;
