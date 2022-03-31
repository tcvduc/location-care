import db from "../config/database.config";

const tableName = "cdnServer";

const cdnServerModel = {
  getExposeUri: function () {
    const sql = `select uri 
    from  ${tableName}
    order by id asc 
    limit 1;
    
    `;
    return db.load(sql);
  },
};

export default cdnServerModel;
