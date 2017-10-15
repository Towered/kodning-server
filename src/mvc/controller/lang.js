const { uuid, paging } = require('../../util');
const lang = require('../service/lang');

module.exports = app => {
    //添加一个语言
    app.post('/lang/add', ( req, res ) => {
        lang.insert ({
            name: req.body.name,
            lid: uuid( 16 )
        })
        .then( res.jsonSucc )
        .catch( res.jsonDBE );
    });
    //查询语言
    app.get('/lang/list', ( req, res ) => {
        var handler;    
        if( req.query.key && req.query.key.length > 0 ){
            handler = lang.search(Object.assign(paging( req ), {
                key: req.query.key
            }));
        }
        else {
            handler = lang.list(paging( req ));
        }
        handler.then( res.jsonSucc )
            .catch( res.jsonDBE );
    });
};              