const BaseService =  require("./baseService");
const FL = require('../dao/relational/framework_lang');

class FrameworkLangService extends BaseService {
    constructor (){
        super( FL );
    }
    exist ({ fid, lid }){
        return FL.find({
            where: {
                fid: fid,
                lid: lid
            }
        }); 
    }   
    //通过语言查询对应框架
    findFrameworksByLang ( lid, key ){
        return FL.findAndCountAll({
            where: {
                lid: lid
            }
        }).then(({ rows }) => {
            return rows.map( fw => {
                return fw.fid
            });
        });
    }   
    //查询框架对应的语言
    findLangByFramework ( fid ){
        return FL.find({
            where: {
                fid: fid
            }
        });
    }
}

module.exports = new FrameworkLangService();