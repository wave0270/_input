var LOGINUI = {
	metaData : {
		name : 'login',
		type : 'view',
	},
	data : [
		{
			alias : 'user',
			type : 'text',
			icon : 'glyphicon-user',			// className
			showName : {
				value : 'Ten dang nhap',
				vi : 'Ten danh nhap',en : 'User Name',
			},
		},
		{
			alias : 'pwd',
			type : 'password',
			icon : 'glyphicon-qrcode',			// className
			showName : {
				value : 'Mat khau',
				vi : 'Mat khau',en : 'Password',
			},
		},
		{
			alias : 'language',
			type : 'array',
			icon : 'glyphicon-globe',			// className
			showName : {
				value : 'Ngon ngu',
				vi : 'Ngon ngu',en : 'Language',
			},
		},
		{
			alias : 'btLogin',
			type : 'button',
			icon : 'glyphicon-lock',			// className
			color: 'btn-primary'	,			//className
			doFunction : 'fM.login()',
			showName : {
				value : 'Dang nhap',
				vi : 'Dang nhap',en : 'Login',
			},
		},
	]
};
