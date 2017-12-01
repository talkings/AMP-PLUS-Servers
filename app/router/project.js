module.exports = function( app ){
    const path = '/product';
    //创建项目
    this.post(`${path}/add`, app.controller.project.addMockProduct)
    //获取项目信息
        .get(`${path}/info`, app.controller.project.getMockProduct);
};