module.exports = ( app ) => {
	const User = {
		async resUserInfo( ctx ){
			const data = await app.servers.users.getUserInfo( ctx );
			if ( data ) ctx.success({
				list : data
			});
		},
		async register ( ctx ){
			const body = ctx.request.body;
			let parmas = {
				email : body.email,
				password : body.password
			};
			const data = await app.servers.users.register( ctx, parmas);
			if ( data ) ctx.success(data);
		},
		async login ( ctx ){
			const body = ctx.request.body;
			if (!body.email || !body.password ){
				ctx.error(201, '缺少参数');
				return false;
			}
			const data = await app.servers.users.login(ctx, body);
			if (data) ctx.success(data);
		}
	};
	return User;
};