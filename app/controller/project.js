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
         * 获取mock项目信息
         */ 
        async getMockProduct( ctx ) {
            const params = ctx.query;
            const data = await app.servers.project.getMockProduct(ctx, params);
            if (data) ctx.success(data);
        }
    };
};