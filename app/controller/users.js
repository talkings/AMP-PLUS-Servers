const md5 = require('md5');
const cookie = require('cookie');
module.exports = ( app ) => {
	const { mysql } = app.model;
	const User = {
		async getUserInfo( ctx ){
			const signature = cookie.parse(ctx.headers.signature || '');
			const info = app.util.tools_token.checkToken(signature.amptk);
			const data = await app.servers.users.getUserInfo({
				attributes: ['id', 'email'],
				where: {
					email: info.email
				}
			});
			ctx.success(data);
		},
		/**
		 * 注册用户信息
		 */
		async register ( ctx ){
			const body = ctx.request.body;
			let parmas = {
				email : body.email,
				password : md5(body.password)
			};
			if (parmas.email.trim() === '' || parmas.password.trim() === ''){
				throw '邮箱和密码是必填项';
			}
			const example = app.util.tools_token;
			const token = example.createToken(parmas);
			parmas.login_token = token;
			const { id, email, login_token} = await app.servers.users.addUserInfo( parmas );
			ctx.success({ id, email, token : login_token});
		},
		/**
		 * 用户登录
		 */
		async login ( ctx ){
			const body = ctx.request.body;
			if (body.email.trim() === ''){
				throw '邮箱必填项';
			}
			if (body.password.trim() === ''){
				throw '密码必填项';
			}
			let cache = {};
			//加密比对
			body.password = md5(body.password);
			const transaction = new Promise((resolve, reject) => {
				mysql.sequelize.transaction().then((t) => {
					return app.servers.users.isUserExist(body, {
						transaction: t
					}).then((result) => {
						if (result) {
							const example = app.util.tools_token;
							const token = example.createToken(body);
							//save data
							cache = JSON.parse(JSON.stringify(result));
							cache.token = token;
							return app.servers.users.setUserInfo({ 
								'login_token': token
							}, {
								'where': {
									id: result.id
								}
							});
						} else {
							throw '用户名不存在';
						}
					}).then((result) => {
						t.commit();
						resolve(result);
					}).catch((err) => {
						t.rollback();
						reject(err);
					});
				});
			});
			await transaction;
			ctx.success(cache, '登录成功');
		}
	};
	return User;
};