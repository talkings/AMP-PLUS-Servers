module.exports = ( app ) => {
	const User = {
		/**
		 * 查询用户信息表字段
		 */
		async searchField () {
			const data = await app.model.mysql.user.findAll();
			return data;
		},
		//注册添加用户信息
		async register ( ctx, params){
			console.log(app.model);
			const data = await app.model.mysql.user.create(params);
			return data;
		},
		async login (ctx, params){
			const data = await app.model.mysql.user.findOne({
				attributes : ['id', 'email'],
				where: {
					email: params.email,
					password: params.password
				}
			});
			return data;
		}
	};
	return User;
};