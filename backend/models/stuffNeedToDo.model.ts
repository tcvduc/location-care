import db from "../config/database.config";
import stuffNeedToDo from "../interfaces/stuffNeedToDo.interface";

const tableName = "stuffNeedToDo";

const stuff_need_to_do_model = {
  getAll: async function () {
    const sql = `select * from ${tableName}`;

    const ret: stuffNeedToDo[] | unknown = await db.load(sql);

    if (!ret) {
      return null;
    }

    return ret;
  },
};

export default stuff_need_to_do_model;
