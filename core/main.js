//上下文
const context = require('./src/context');
const path = require('path');
const util = require('util');
const fs = require('fs');
/**
 * 上下文管理实例
 */
class rock {

    constructor (){
        const _dir = process.cwd();
        this.path = {
            'controller' : path.join( _dir, 'app/controller/'),
            'model' : path.join( _dir, 'app/model/'),
            'servers' : path.join( _dir, 'app/servers/'),
            'router' : path.join( _dir, 'app/router/'),
            'config' : path.join( _dir, 'config/'),
            'middleware' : path.join(_dir, 'app/middleware/'),
            'util': path.join(_dir, 'app/util/')
        };
        this.inspect = {
            'app' : {
                'controller' : {},
                'model' : {},
                'servers' : {},
                'config' : {}
            }
        };
    }
    /**
     * 公共读取目录下文件获取实例
     * @param directoryName 目录名称
     */
    async readFileInterface( directoryName ){
        const readdir = util.promisify(fs.readdir);
        let paths = await readdir(this.path[directoryName]);
        let fn = {};
        if (!Array.isArray(paths)) return false;
        for (let i = 0, len = paths.length; i < len; i++) {
            let item = paths[i];
            //文件绝对路径
            const path = this.path[directoryName] + item;
            //判断是否为文件夹还是文件
            const lstat = util.promisify(fs.lstat);
            //获取文件信息
            const isfile = await lstat(path);
            // 判断是否为文件夹
            if (!isfile.isDirectory()) {
                let code = require(path)
                , name = item.replace('.js', '');
                fn[name] = code;
            }
        }
        return fn;
    }
    /**
     * 接口业务逻辑抽象层
     */
    async getServersInterface (){
        const fn = await this.readFileInterface('servers');
        let obj = {};
        for (let j in fn) {
            obj[j] = fn[j](this.inspect.app);
        }
        this.inspect.app.servers = obj;
    }
    /**
     * 初始化路由
     */
    async renderRouter (app, router){
        const fn = await this.readFileInterface('router');
        //设置请求前缀
        router.prefix(`/v1`);
        for (let j in fn) {
            fn[j].call(router, this.inspect.app);
        }
        app.use(router.routes(), router.allowedMethods());
    }
    /**
     * 渲染全局配置
     */
    async renderConfig (){
        const maps = await this.readFileInterface('config');
        const obj = {};
        for (let i in maps) {
            obj[i] = maps[i];
        }
        this.inspect.app.config = obj;
    }
    async renderMiddleware ( app ){
        const fn = await this.readFileInterface('middleware');
        const config = this.inspect.app.config;
        const plugin = config['config-plugin'];
        const keys = Object.keys( fn );
        //遍历中间件配置序列
        (plugin.middleware || []).forEach(( item ) => {
            if (keys.includes(item)){
                // console.log(fn[item]());
                if (plugin[item]){
                    app.use(fn[item](plugin[item]));
                } else {
                    app.use(fn[item]());
                }
                
            }
        }); 
    }
    /**
     * 渲染工具类
     */
    async renderUtils(){
        const fn = await this.readFileInterface('util');
        this.inspect.app.util = fn;
    }
    /**
     * 获取数据表抽象字典实例对象
     */
    async getModelInterface(){
        let code = require(this.path.model),
            obj = await code();
        this.inspect.app.model = obj;
    }
    /**
     * 管理实例挂载controller回调操作
     */
    async getCollectHandlder (){
        const fn = await this.readFileInterface('controller');
        let obj = {};
        for (let j in fn) {
            let handlder = Object.assign(fn[j](this.inspect.app), {});
            for (let item in handlder) {
                handlder[item] = async (ctx, ...param) => {
                    try {
                        let data = await fn[j](this.inspect.app)[item](ctx, ...param);
                        return data;
                    } catch (error) {
                        await ctx.error(201, error.message || error);
                    }
                };
            }
            obj[j] = handlder;
        }
        this.inspect.app.controller = obj;
       
    }
    /**
     * 启动上下文
     */
    async startCluster ( options ){
        this.options = options;
        await this.renderConfig();
        await this.getModelInterface();
        await this.getServersInterface();
        await this.getCollectHandlder();
        await this.renderUtils();
        context.call( this );
    }
}


module.exports = new rock;