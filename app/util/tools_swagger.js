const mje = require('mongo-json-escape');
/**
 * 解析swagger数据
 * @param { object } json swagger配置
 */
module.exports = function( json, params, callback ){
    const tmp = {
        'projectId': params.projectId,
        'apiName' : '',
        'apiDescribe': '',
        'apiUrl': '',
        'apiType': '',
        'apiState': 1,
        'version': '',
        'group': '',
        'originatorId': params.userid,
        'params': [],
        'req': []
    };
    const arr = [];
    for (let key in json.paths) {
        let obj = Object.assign(tmp, {});
        obj.apiUrl = key;
        obj.version = json.info.version;
        for (let j in json.paths[key]){
            obj.apiType = j;
            let opt = json.paths[key][j];
            obj.group = opt.tags[0];
            obj.apiName = opt.summary;
            obj.params = opt.parameters;
            obj.apiDescribe = opt.description;
            obj.req = opt.responses;
        }
        const pro = callback(mje.escape(obj));
        arr.push(pro);
    }
    return arr;
};