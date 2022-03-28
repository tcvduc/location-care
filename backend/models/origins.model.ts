import db from "../config/database.config";

const tableName = "origins";

const originsModel = {
  getAll: async function (): Promise<any[]> {
    const sql = `select * from ${tableName};`;

    const queryRetUnknow: unknown = await db.load(sql);

    if (queryRetUnknow === undefined || queryRetUnknow === null) {
      return [];
    }

    if (queryRetUnknow instanceof Array) {
      return queryRetUnknow;
    }

    return [];
  },
};

export default originsModel;
