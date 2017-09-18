module.exports = ( app ) => {
	const User = {
		async resUserInfo( ctx ){
			const data = await app.servers.Users.getUserInfo( ctx );
			if ( data ) ctx.success({
				list : data
			});
		},
		async addUser ( ctx ){
			const data = await app.servers.Users.addUser( ctx );
			if ( data ) ctx.success(data);
			
		}
	};
	return User;
};