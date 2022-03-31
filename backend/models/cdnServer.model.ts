import cdnServerDb from "../config/cdnServerDb.config";

const cdnServerTable = "cdnServer";
const infoTable = "info";
const originsRouteServicesTable = "originsRouteServices";
const originsTable = "origins";

const cdnServerModel = {
  getCurrentActiveURI: async function () {
    const sql = `select uri 
      from ${infoTable} 
      order by id asc 
      limit 1;`;
    const ret = await cdnServerDb.load(sql);

    if (ret instanceof Array) {
      return ret[0].uri;
    }

    return ret;
  },
  getExposeUri: function () {
    const sql = `select uri 
    from  ${cdnServerTable}
    order by id asc 
    limit 1;
    
    `;
    return cdnServerDb.load(sql);
  },
  getAllApiRouteServices: function () {
    const sql = `select  ors.route 
    from ${originsRouteServicesTable} as ors
    left join ${originsTable} as o 
    on o.id = ors.originId
    where o.origin = 'https://www.stephen.com'; 
    `;
    return cdnServerDb.load(sql);
  },
};

export default cdnServerModel;
