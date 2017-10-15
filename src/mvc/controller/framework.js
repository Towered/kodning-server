const { uuid, paging } = require('../../util');
const framework = require('../service/framework');
const lang = require('../service/lang');
const framework_lang = require('../service/framework_lang');

module.exports = app => {
    //添加一个框架
    app.post('/framework/add', ( req, res ) => {
        if( !req.body.lang ){
            return res.jsonFail({
                "message": "params error"
            });
        }
        //根据语言查询语言id
        lang.findByName( req.body.lang ).then( $lang => {
            if(!( $lang && $lang.dataValues && $lang.dataValues.lid )) {
                return res.jsonFail({ 
                    "message": `not found the language: ${req.body.lang}` 
                });
            }
            framework.insert ({ 
                name: req.body.name,
                fid: uuid( 16 )
            })
            .then( data => {
                console.log('framework data:', data);
                //不管以前有没有此框架, 直接建立关联关系
                framework_lang.insert({
                    fid: data.value.fid,
                    lid: $lang.dataValues.lid
                }).then( data => {
                    //已经建立过关联关系则提示
                    if( data.exist ){
                        return res.jsonFail({
                            "message": "the framework has been existed"
                        });
                    }
                    return res.jsonSucc( data.dataValues );
                });
            })
            .catch( res.jsonDBE );
        });
    });
    /**
     * 通过语言查询框架
     * req.body.fid - 语言id
     * req.body.key - 过滤
    **/
    app.get('/framework/list', ( req, res ) => {
        var $key = '';
        if( !req.query.lid ){
            return res.jsonFail({
                "message": "params error"
            }); 
        }       
        if( req.query.key ){
            $key = req.query.key;
        }
        //查询对应框架
        framework_lang.findFrameworksByLang( req.query.lid ).then( fids => {
            var fidJobs = fids.map( fid => {
                return framework.findByFid( fid, $key );
            });
            Promise.all( fidJobs )
                .then( data => {
                    //过滤掉没有匹配的数据
                    return data.filter( t => !!t );
                })
                .then( data => {
                    res.jsonSucc({  
                        count: data.length,
                        rows: data
                    });
                });
        }).catch( res.jsonDBE );
    });
};              