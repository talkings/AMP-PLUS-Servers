module.exports = function( app ){
    const { mongodb, mysql } = app.model;
    return {
        /**
         * 查询mongodb api
         */
        async getMongoApiInfo( option ) {
            const model = mongodb.getModel('api');
            return model.findOne( option );
        },
        /**
         * 查询mongodb api列表
         */
        async getMongoApiList(option, field = null, filter = null) {
            const model = mongodb.getModel('api');
            return model.find(option, field, filter);
        },
        /**
         * 创建mongodb接口记录
         * @param {*} option 
         */
        async addMongoApiInfo( option ) {
            const model = mongodb.getModel('api');
            return model.create(option);
        },
        /**
         * 查询mysql 项目信息
         * @param {*} option 
         */
        async getMysqlApiInfo( option ) {
            return mysql.product_info.find(option);
        },
        /**
         * 修改mongodb api接口信息
         * @param {*} conditions 
         * @param {*} option 
         */
        async setMongoApiInfo(conditions, option ) {
            const model = mongodb.getModel('api');
            return model.update(conditions, option);
        },
        /**
         * 查询mongodb 记录总条数
         */
        async getMongoApiCount( option ) {
            const model = mongodb.getModel('api');
            return model.count(option);
        }
    };
};