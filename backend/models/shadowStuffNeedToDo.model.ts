import db from "../config/database.config";
import stuffNeedToDo from "../interfaces/stuffNeedToDo.interface";

const tableName = "shadowStuffNeedToDo";

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

  getLastRecord: async function () {
    const sql = `select * 
    from ${tableName}
    order by id desc 
    limit 1;
    `;

    const ret = await db.load(sql);

    return ret;
  },

  add: async function (stuff: stuffNeedToDo): Promise<unknown> {
    const sql = `insert into ${tableName} (id,stuffName,isDone) 
    values (${stuff.id},"${stuff.stuffName}",${stuff.isDone});`;

    const ret: stuffNeedToDo[] | unknown = await db.load(sql);

    if (ret !== undefined && ret instanceof Array) {
      return ret[0];
    }

    return ret;
  },
  del: async function (id: number | string) {
    const sql = `delete from stuffNeedToDo as s
      where s.id = ${id};  `;

    const ret = await db.load(sql);

    return ret;
  },
};

export default stuffNeedToDoModel;
