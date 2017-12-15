const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
/**
 * 上下文管理 执行初始化
 */

module.exports = async function (){
    const app = new Koa();
    await this.renderMiddleware( app );
    await this.renderRouter(app, Router );
    app.on('error', function(err){
        console.log(`The service start error msg:${ err }`);
    });
    http.createServer(app.callback()).listen(this.options.port);
    console.log(`The service start successfully port ${ this.options.port }`);
};