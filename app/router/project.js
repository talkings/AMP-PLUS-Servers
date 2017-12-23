module.exports = function( app ){
    //创建项目
    this.post('/add', app.controller.project.addMockProduct)
    //获取项目信息
        .get('/info', app.controller.project.getMockProduct);
};