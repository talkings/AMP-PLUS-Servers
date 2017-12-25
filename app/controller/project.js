module.exports = function( app ){
    return {
        /**
         * 创建mock项目
         */
        async addMockProduct( ctx ) {
            const params = ctx.request.body;
                const data = await app.servers.project.addMockProduct(ctx, params);
                if (data) ctx.success(data);
        },
        /**
         * 修改mock项目
         */
        async setMockProduct() {

        },
        /**
         * 获取mock项目信息列表
         */ 
        async getMockProductList( ctx ) {
            const params = ctx.query;
            const data = await app.servers.project.getMockProductList(ctx, params);
            if (data) ctx.success(data);
        },
        /**
         * 获取项目信息
         * @param {*} ctx 
         */
        async getMockProductInfo( ctx ) {
            const params = ctx.query;
            const data = await app.servers.project.searchProjectInfo(ctx, params);
            if (data) ctx.success(data);
        }
    };
};