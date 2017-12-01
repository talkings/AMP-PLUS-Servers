module.exports = function( app ){
    const path = '/api';
    this.get(`${ path }/list/:projectid`, app.controller.api.getApiList)
        .get(`${ path }/info/:apiid`, app.controller.api.getApiInfo)
        .post(`${ path }/add/:projectid`, app.controller.api.addApiInfo)
        .post(`${ path }/swagger/:projectid`, app.controller.api.syncSwaggerInfo);
};