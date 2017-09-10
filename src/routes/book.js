module.exports = function ( app ){
    app.post('/books/add', function ( req, res ){
        console.log( req.body );
    });
}