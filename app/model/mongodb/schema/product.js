module.exports = ( schema ) => {
    return {
        'productName' : {
            'type' : String,
            'required' : true
        },
        'describe' : {
            'type' : String,
            'default' : ''
        },
        'createDate' : {
            'type' : Date,
            'default' : Date.now
        }
    };
};