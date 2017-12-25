module.exports = ( schema ) => {
    return {
        //接口名称
        'apiName' : {
            'type' : String,
            'required' : true
        },
        //接口描述
        'apiDescribe' : {
            'type' : String,
            'default' : '', 
        },
        //接口路径
        'apiUrl' : {
            'type' : String,
            'required': true
        },
        //接口请求类型
        'apiType' : {
            'type': String,
            'required': true
        },
        //接口状态
        'apiState' : {
            'type': Boolean,
            'default': true
        },
        //项目版本号
        'version' : {
            'type' : String,
            'required': true
        },
        //分组名称
        'group' : {
            'type' : String
        },
        //创建人id
        'originatorId' : {
            'type' : String,
            'required' : true
        },
        //请求接口参数配置
        'params' : {
            'type' : Array,
            'default' : []
        },
        //项目唯一标识
        'projectId' : {
            'type': String,
            'required': true
        },
        //请求报文
        'req': String,
        //返回报文
        'res': String,
        //创建时间
        'created_at' : {
            'type' : Date,
            'default' : Date.now
        },
        //最后一次修改时间
        'updated_at': {
            'type': Date,
            'default': Date.now
        }
    };
};