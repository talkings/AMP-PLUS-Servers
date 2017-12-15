const jwt = require("jsonwebtoken");
class jsonwebtoken {

    constructor () {
        this.secret = 'tony.fang';
        this.expiresIn = '1h'; 

    }
    /**
     * 签署token
     */
    sign ( options ){
        return jwt.sign({
            data : options
        }, this.secret, {
            expiresIn : this.expiresIn
        });
    }
    /**
     * 验证token是否有效
     */
    verify ( token ){
        return jwt.verify(token, this.secret);
    }

}
exports.jsonwebtoken = jsonwebtoken;