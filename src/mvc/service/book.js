var Book = require("../dao/book");

module.exports= {
    /**
     * Existed 这本书是否已经存在
     * @param {String} name 
     * @param {String} ISBN
     */
    existed ( options ){

    },
    insert ( options ) {
        return Book.create( options );
    }
};  