/**
 * MYSQL Configure
 */
exports.mysql = (() => {
	let config = {
		prod: {
			//数据库
			'database': 'amp',
			//用户名
			'username': 'root',
			//口令
			'password': 'yzfqx199110204338',
			//主机
			'host': 'localhost',
			//端口
			'port': 3306
		},
		dev: {
			//数据库
			'database': 'amp',
			//用户名
			'username': 'root',
			//口令
			'password': '123456',
			//主机
			'host': 'localhost',
			//端口
			'port': 3306
		}
	};
	if (process.env.NODE_ENV === 'production') {
		return config['prov'];
	} else {
		return config['dev'];
	}
})();
/**
 * mongodb Configure
 */
exports.mongodb = (() => {

	let config = {
		prod: {
			'basepath': 'mongodb://localhost:1029/',
			//数据库
			'database': 'AMP',
			//用户名
			'username': 'AMPPLUS',
			//口令
			'password': 'yzfqx199110204338',
			//主机
			'host': 'localhost',
			//端口
			'port': 1029
		},
		dev: {
			'basepath': 'mongodb://localhost:27017/',
			//数据库
			'database': 'AMP',
			//用户名
			'username': '',
			//口令
			'password': '',
			//主机
			'host': 'localhost',
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