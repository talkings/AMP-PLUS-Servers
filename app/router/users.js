
module.exports =  function( app ){
	this.get('/search', app.controller.Users.resUserInfo )
	/**
	 * 注册用户接口
	 */
	.post('/add', app.controller.Users.addUser );
};