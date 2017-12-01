const request = require('request');

class Proxy {
        
    constructor ( options ) {
        this.options = {
            'method' : 'GET',
            'url': options.url, 
            //'postambleCRLF' : true,
            //'form' : {},
            //json : true,
            //'headers' : {},
            //'gzip' : true       
        };
        this.options = Object.assign({}, this.options, options); 
    }

    request () {
        const n = new Promise((resolve, reject) => {
            request(this.options, ( err, res, body ) => {
                if (err){
                    reject(err);
                    return false;
                }
                resolve(body);
            }); 
        });
        return n; 
    }
}

module.exports = Proxy;