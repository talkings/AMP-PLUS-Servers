module.exports = ( app ) => {
	const User = {
		async resUserInfo( ctx ){
			const data = await app.servers.Users.getUserInfo();
			ctx.success({
				list : data
			});
		},
		async addUser ( ctx ){
			const data = await app.servers.Users.addUser( ctx );
			ctx.success(data);
		}
	};
	return User;
};