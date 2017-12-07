
module.exports =  function( app ){
	console.log(app.controller);
	const path = '/users';
	//user register 注册用户接口
	this.post(`${ path }/register`, app.controller.users.register )
	//user login 用户登录接口
	.post(`${ path }/login`, app.controller.users.login );
};