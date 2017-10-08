const { isEmpty } = require("lodash/lang");
const Book = require("../dao/book");

module.exports= {
    /**
     * Existed 这本书是否已经存在    
     * @param {String} name 
     * @param {String} ISBN
     */
    existed ({ ISBN }){
        return Book.findOne({
            where:{
                ISBN
            }
        });
    },  
    /**
     * 添加一本书
     * @param { object } options 
     */ 
    insert ( options ) {
        return new Promise(( resolve, reject ) => {
            this.existed( options ).then( data => {
                if((data && isEmpty(data.dataValues)) || !data){
                    Book.create( options ).then( data => {
                        resolve({
                            exist: false,
                            value: data.dataValues
                        });
                    }).catch( reject );
                } else {
                    resolve({
                        exist: true,
                        value: data.dataValues
                    });
                }
            });
        });
    },
    /**
     * 书籍列表
     * @param { object } options 
     * @param { number } options.offset
     * @param { number } options.limit
     */
    list ({ offset, limit }){
        return Book.findAndCountAll({
            offset,
            limit
        });
    },
    /**
     * 模糊查询书名
     * 通过作者查询书名
     * @param { object } options
     * @param { number } options.offset
     * @param { number } options.limit
     * @param { key } options.key
     */
    search ({ offset, limit, key }){
        return Book.findAndCountAll({
            offset,
            limit,
            where: {
                $or: [
                    {
                        name: {
                            $like: `%${key}%`
                        }
                    },
                    {
                        author: {
                            $like: `%${key}%`
                        }
                    }
                ]
            }
        });
    }
};  