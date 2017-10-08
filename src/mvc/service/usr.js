const { isEmpty } = require('lodash/lang');
const { pbkdf } = require('../../util');
const Usr = require('../dao/usr/base');

module.exports = {
    /**
     * @param { object } options
     * @param { string } options.phone
     */
    exist ({ phone }){
        return Usr.findOne({
             where: {
                 phone
             }
        });
    },  
    /**
     * @param { object } options 
     */
    insert ( options ) {    
        return new Promise(( resolve, reject ) => {
            this.exist( options )
                .then( data => {
                    if( data ){
                        return resolve({
                            exist: true,
                            value: data.dataValues
                        });
                    }
                    //pbkdf加密, 32位随机salt
                    pbkdf( options.certificate ).then(({ key, salt }) => {
                        options.certificate = key;
                        options.salt = salt;
                        Usr.create( options ).then( data => {        
                            resolve({
                                exist: false,
                                value: data.dataValues
                            });
                        }).catch( reject );
                    }).catch( reject );
                });
        });
    }
};