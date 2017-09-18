module.exports = ( app ) => {
	const User = {
		/**
		 * 查询用户信息
		 */
		async getUserInfo () {
			//const model = app.model.mongodb.getModel('product');
			//model.find();
			const data = await app.model.mysql.user.findAll();
			return data;
		},
		//注册添加用户信息
		async addUser ( ctx ){
			const data = await app.model.mysql.user.create({
				user : 'admin',
				email : '821249752@qq.com',
				phone : '18611857982',
				password : 'fqx177777'
			});
			return data;
		}
	};
	return User;
};