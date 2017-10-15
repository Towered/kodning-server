const BaseService =  require("./baseService");
const Framework = require('../dao/framework');

class FrameworkService extends BaseService {
    constructor (){
        super( Framework );
    }
    findByFid ( fid, key ){
        return Framework.find({
            where: {
                "fid": fid,
                "name": {
                    $like: `%${ key }%`
                }
            }
        }); 
    }   
}

module.exports = new FrameworkService();