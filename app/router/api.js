module.exports = function( app ){
    this.get('/list/:projectid', app.controller.api.getApiList)
        .get('/info/:apiid', app.controller.api.getApiInfo)
        .post('/add/:projectid', app.controller.api.addApiInfo)
        .post('/swagger/:projectid', app.controller.api.syncSwaggerInfo);
};