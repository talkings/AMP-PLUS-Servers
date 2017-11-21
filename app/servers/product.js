module.exports = function( app ){
    return {
        /**
         * 创建mock项目 非自动事物处理
         */
        async addMockProduct( ctx, params ) {
            const { mysql } = app.model;
            return new Promise((resolve, reject)=> {
                mysql.sequelize.transaction().then((t) => {
                    //查询在用户下是否存在相同的项目名称
                    return mysql.product_info.find({
                        attributes: ['product_id'],
                        where: {
                            $and: [{
                                product_name: params.productName
                            }, {
                                originator_userid: params.userid
                            }]
                        }
                    }, { transaction: t }).then((result) => {
                        if (!result) {
                            //创建项目
                            return mysql.product_info.create({
                                product_name: params.productName,
                                product_describe: params.productDescribe,
                                originator_userid: params.userid,
                                originator_name: params.userName,
                            });
                        } else {
                            throw '项目重复创建';
                        }
                    }).then((result) => {
                        t.commit();
                        resolve(result);
                    }).catch((err) => {
                        t.rollback();
                        reject(err);
                    });
                });
            }); 
            
        },
        /**
         * 修改mock项目
         */
        async setMockProduct() {

        },
        /**
         * 获取mock项目信息
         */
        async getMockProduct(ctx, params) {
            
        }
    };
};