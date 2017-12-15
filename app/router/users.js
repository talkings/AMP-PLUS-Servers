
module.exports =  function( app ){
	//user register 注册用户接口
	this.post('/register', app.controller.users.register )
	//user login 用户登录接口
	.post('/login', app.controller.users.login );
};