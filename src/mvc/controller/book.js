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
        }).then( data => {
            console.log( data );  
            res.json({ 
                ack: true, 
                status: "success",
                code: res.code  
            });      
        }).catch( e => {
            res.json({
                ack: true,
                status: "failure",
                code: 500,
                message: e.message
            });
        });
    }); 
}       