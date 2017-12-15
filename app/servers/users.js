module.exports = ( app ) => {
	const User = {
		/**
		 * 查询用户信息表字段
		 */
		async searchField () {
			const data = await app.model.mysql.user.findAll();
			return data;
		},
		//插入用户信息
		async addUserInfo ( option ){
			return app.model.mysql.user.create(option);
		},
		/**
		 * 判断用户是否存在 
		 */
		async isUserExist ( params ){
			return app.model.mysql.user.findOne({
				attributes : ['id', 'email'],
				where: {
					email: params.email,
					password: params.password
				}
			});
		},
		/**
		 * 修改用户信息
		 * @param {*} option 
		 * @param {*} whereis 
		 */
		async setUserInfo ( option, whereis ){
			return app.model.mysql.user.update( option, whereis );
		}
	};
	return User;
};