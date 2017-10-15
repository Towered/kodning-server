const BaseService =  require("./baseService");
const Lang = require('../dao/lang');

class LangService extends BaseService {
    constructor (){
        super( Lang );
    }
    findByName ( name ){
        return Lang.find({
            where: {
                name: name
            }
        });
    }
}

module.exports = new LangService();