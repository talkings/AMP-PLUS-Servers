module.exports = function( app ){
    //创建项目
    this.post('/add', app.controller.project.addMockProduct)
    //获取项目信息
        .get('/list/info', app.controller.project.getMockProductList)
        .get('/info', app.controller.project.getMockProductInfo);
};