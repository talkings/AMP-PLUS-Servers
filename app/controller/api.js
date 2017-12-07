module.exports = function( app ){
    return {
        /**
         * 获取接口列表
         * @param { object } ctx 
         */
        async getApiList( ctx ) {
            const { projectid } = ctx.params;
            const { version, group, current, pagenum } = ctx.query;
            const json = {
                projectId: projectid
            };
            version && (json['version'] = version);
            group && (json['group'] = group);
            const data = await app.servers.api.getMongoApiCount( json );
            if (!data) {
                ctx.success({
                    count: 0,
                    list: []
                });
            }
            const result = await app.servers.api.getMongoApiList(json, null, {
                skip: current * pagenum - pagenum,
                limit: Number(pagenum),
                sort: {
                    '_id': -1
                }
            });
            ctx.success({
                count: data,
                list: result
            });
        },
        /**
         * 获取api接口信息
         * @param { object } ctx 
         */
        async getApiInfo( ctx ) {
            const { apiid } = ctx.params;
            const data = await app.servers.api.getMongoApiInfo({
                _id: apiid
            });
            if (data) ctx.success(data);
        },
        /**
         * 创建api信息接口
         * @param {object} ctx
         */
        async addApiInfo( ctx ) {
            const body = ctx.request.body;
            const { projectid } = ctx.params;
            const result = await app.servers.api.getMongoApiInfo({
                projectId: projectid,
                apiUrl: body.apiUrl
            });
            if (result) {
                throw '接口重复创建';
            }
            const json = {
                projectId: projectid,
                apiName: body.apiName,
                apiDescribe: body.apiDescribe,
                apiUrl: body.apiUrl,
                apiType: body.apiType,
                apiState: body.apiState,
                version: body.version,
                group: body.group,
                originatorId: body.userid,
                params: body.params,
                req: body.req,
                res: body.res
            };
            const data = await app.servers.api.addMongoApiInfo(json);
            if (data) ctx.success(data);
        },
        /**
         *  同步swagger接口
         * @param {*} ctx 
         */
        async syncSwaggerInfo( ctx ) {
            const { projectid } = ctx.params;
            const { userid } = ctx.request.body;
            const result = await app.servers.api.getMysqlApiInfo({
                attributes: ['swigger'],
                where: {
                    product_id: projectid
                }
            });
            if (result.swigger == null) {
                throw '未绑定swagger';
            }
            const example = new app.util.tools_proxy({
                url: result.swigger
            });
            let config = await example.request({
                url: "http://54.222.232.96:3888/599ee65122b5146633e2d627/swagger"
            });
            let json = JSON.parse(config);
            if (Object.prototype.toString.call(json) !== '[object Object]'){
                throw '不是有效配置格式';
            }
            const promises = app.util.tools_swagger(json, {
                projectId: projectid,
                userid: userid
            }, async ( json ) => {
                let conditions = {
                    projectId: projectid,
                    apiUrl: json.apiUrl
                };
                const result = await app.servers.api.getMongoApiInfo(conditions);
                if (result) {
                    return app.servers.api.setMongoApiInfo({ _id: result.id }, json);
                }
                return app.servers.api.addMongoApiInfo(json);
            });
            const data = await Promise.all(promises);
            console.log(data, 222);
            if (data) ctx.success({}, 'swagger同步完成');
        }
    };
};