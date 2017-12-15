const jwt = require('jsonwebtoken');
const auth = require('../../config/config-secret.js');

const tools_token = {
	/**
	 * 挂载生成token方法
	 * @param data 存储数据
	 * @param expiresIn 到期时间
	 * @return new token
	 */
	'createToken' : (data, expiresIn) => {
		/**
		 * 生成口令
		 * @存储的相关信息
		 * @秘钥
		 * @加密算法
		 */
		let token = jwt.sign(data, auth.secret, { 
			'algorithm' : auth.algorithm,
			//到期时间1小时
			'expiresIn' : expiresIn || '7d'
		});
		return token;
		
	},
	
	/**
	 * 效验token
	 * @paran token
	 */
	'checkToken' : (token) => {
		let decoded = jwt.verify(token, auth.secret);
		return decoded;
	}
};

module.exports = tools_token;
