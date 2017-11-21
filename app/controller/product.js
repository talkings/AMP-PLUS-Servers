module.exports = function( app ){
    return {
        /**
         * 创建mock项目
         */
        async addMockProduct( ctx ) {
            const params = ctx.request.body;
            try {
                const data = await app.servers.product.addMockProduct(ctx, params);
                if (data) ctx.success(data);
            } catch (error) {
                ctx.error(500, error);
            }
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
            const data = await app.servers.product.getMockProduct(ctx, params);
            if (data) ctx.success(data);
        }
    };
};