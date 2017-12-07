/**
 * MYSQL Configure
 */
exports.mysql = {
	//数据库
	'database': 'amp',
	//用户名
	'username': 'root',
	//口令
	'password': 'yzfqx199110204338',
	//主机
	'host': '127.0.0.1',
	//端口
	'port': 3306
};
/**
 * mongodb Configure
 */
exports.mongodb = (() => {
	let config = {
		prod: {
			'basepath': 'mongodb://127.0.0.1:1029/',
			//数据库
			'database': 'AMP',
			//用户名
			'username': 'AMPPLUS',
			//口令
			'password': 'yzfqx199110204338',
			//主机
			'host': '127.0.0.1',
			//端口
			'port': 1029
		},
		dev: {
			'basepath': 'mongodb://127.0.0.1:27017/',
			//数据库
			'database': 'AMP',
			//用户名
			'username': '',
			//口令
			'password': '',
			//主机
			'host': '127.0.0.1',
			//端口
			'port': 27017

		}
	};
	if (process.env.NODE_ENV === 'production'){
		return {
			config: config['prod'],
			connect: `mongodb://${config['prod'].username}:${config['prod'].password}@${config['prod'].host}:${config['prod'].port}/${config['prod'].database}`	
		};
	} else {
		return {
			config: config['dev'],
			connect: `mongodb://127.0.0.1:27017/${config['prod'].database}`
		};
	}
})();