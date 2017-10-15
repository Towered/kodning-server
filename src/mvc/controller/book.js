var book = require("../service/book");
var { paging } = require("../../util");

module.exports = app => {
    app.post('/book/add', ( req, res ) => {
        book.insert({
            name: req.body.name,
            author: req.body.author,    
            translator: req.body.translator,
            lang: req.body.lang,
            framework: req.body.framework,
            ISBN: req.body.ISBN,
            press: req.body.press,
            publishDate: req.body.publishDate,
            allowSpread: req.body.allowSpread
        }).then( res.jsonSucc ).catch( res.jsonDBE );
    }); 

    app.get('/book/list', ( req ,res ) => {
        var handler;    

        if( req.query.key && req.query.key.length > 0 ){
            handler = book.search(Object.assign(paging( req ), {
                key: req.query.key
            }));
        }
        else {
            handler = book.list(paging( req ));
        }
        handler.then( res.jsonSucc )
            .catch( res.jsonDBE );
    });
};             