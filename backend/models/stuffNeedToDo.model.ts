import db from "../config/database.config";
import stuffNeedToDo from "../interfaces/stuffNeedToDo.interface";

const tableName = "stuffNeedToDo";

const stuffNeedToDoModel = {
  getAll: async function () {
    const sql = `select * from ${tableName}`;

    const ret: stuffNeedToDo[] | unknown = await db.load(sql);

    if (!ret) {
      return null;
    }

    return ret;
  },
  editIsDone: async function (id: string, isDone: boolean) {
    const sql = `update ${tableName} 
    set isDone = ${isDone} 
    where id = ${id};
    `;

    const ret = await db.load(sql);

    return ret;
  },
};

export default stuffNeedToDoModel;
