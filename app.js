/**
 * 入口执行配置函数
 */

require('./core/main').startCluster({
    'port' : 3999,
    'version' : 'v1'
});
