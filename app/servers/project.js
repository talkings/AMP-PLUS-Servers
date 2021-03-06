module.exports = function( app ){
    const { mysql } = app.model;
    return {
        /**
         * 创建mock项目 非自动事物处理
         */
        async addMockProduct( ctx, params ) {
            return new Promise((resolve, reject)=> {
                mysql.sequelize.transaction().then((t) => {
                    //查询在用户下是否存在相同的项目名称
                    return mysql.product_info.find({
                        attributes: ['id'],
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
                                product_name: params.productName.trim(),
                                product_describe: params.productDescribe,
                                originator_userid: params.userid,
                                originator_name: params.userName,
                                version: params.version
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
        async searchProjectInfo (ctx, params) {
            return mysql.product_info.findById(params.id);
        },
        /**
         * 获取mock项目信息
         */
        async getMockProductList(ctx, params) {
            //跳过 x 条数据并获取其后的 x 条数据
            const current = Number(params.current);
            //每页显示多少条
            const pagenum = Number(params.pagenum);
            return mysql.product_info.findAndCountAll({
                    offset: current * pagenum - pagenum,
                    limit: pagenum,
                    order: [
                        ['updated_at', 'DESC']
                    ],
                    where: {
                        $and: [Object.assign({
                            originator_userid: params.userid
                        }, (params.productName ? { product_name: params.productName} : {}))]
                    }
                });
        }
    };
};