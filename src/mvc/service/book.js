const BaseService =  require("./baseService");
const Book = require('../dao/book');

class BookService extends BaseService {
    constructor (){
        super( Book );
    }
}

module.exports = new BookService();