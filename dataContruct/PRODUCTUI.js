var PRODUCTUI = {
	meta : {
		"type": "products",
	},
	data : [
		{
			alias : 'title',
			type : 'text',
			icon : 'glyphicon-star-empty',
			showName : {
				value : 'Tiêu đề',
				vi : 'Tiêu đề',en : 'title',
			},
		},
		{
			alias : 'price',
			type : 'number',
			icon : '',
			showName : {
				value : 'Giá',
				vi : 'Giá',en : 'price',
			},
			exchangeRate : {
				value : 'VND',
				vi : 'VND',en : 'USA',
			},
		},
		{
			alias : 'offPrice',
			type : 'number',
			icon : '',
			showName : {
				value : 'Giá Khuyến mãi',
				vi : 'Giá Khuyến mãi',en : 'Off Pr',
			},
			exchangeRate : {
				value : 'VND',
				vi : 'VND',en : 'USA',
			},
		},
		{
			alias : 'img',
			type : 'link',
			icon : '',
			showName : {
				value : 'Hình ảnh',
				vi : 'Hình ảnh',en : 'img',
			},
		},
		{
			alias : 'category',
			type : 'array',
			icon : '',
			showName : {
				value : 'Danh mục',
				vi : 'Danh mục',en : 'Category',
			},
		},
		{
			alias : 'summary',
			type : 'textArea',
			icon : '',
			showName : {
				value : 'tóm tắt',
				vi : 'tóm tắt',en : 'summary',
			},
		},
		{
			alias : 'content',
			type : 'html',
			icon : '',
			showName : {
				value : 'nội dung',
				vi : 'nội dung',en : 'content',
			},
		},
	]
};
