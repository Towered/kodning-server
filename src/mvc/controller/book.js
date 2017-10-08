var book = require("../service/book");

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
        var pageIndex = 1,
            limit = 20;
        if( req.query.pageIndex ){
            pageIndex = 0 | req.query.pageIndex;
        }
        if( req.query.pageNumber ){
            limit = 0 | req.query.pageNumber;
        }

        var handler;
        var offset = (pageIndex - 1) * limit;

        if( req.query.key && req.query.key.length > 0 ){
            console.log( req.query.key );
            handler = book.search({
                offset,
                limit,
                key: req.query.key
            })
        }
        else {
            handler = book.list({
                offset,
                limit
            });
        }
        handler.then( res.jsonSucc )
            .catch( res.jsonDBE );
    });
};             