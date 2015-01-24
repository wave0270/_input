/**
 * view paging
 * @param number page : 1
 * @param string name : 'Đâu phá thương khung'
 * @param string type : 'novels'
 * @param num pageNumber : 33
 * **/
function renderPagination(page,name,type,pageNumber,fName){
	if(page==1){ 
		var previous = null;
	}else{
		var previous = page - 1;
	}
	if(page >= pageNumber){
		var next = null;
	}else{
		var next = page + 1;
	}
	var data = {
		previous : previous,
		next : next,
		name : name,
		type : type,
		fName : fName
	};
	var ractive = new Ractive({
	     el: '.paging_top',
	     template: TEMP_PAGINATION,
	     data: data
	});
	var ractive = new Ractive({
	     el: '.paging_end',
	     template: TEMP_PAGINATION,
	     data: data
	});
}
/**
 * get database
 * @param str type : "novels"
 * @param str save : 'dau-pha-thuong-khung'
 * **/
function getDatabase(type,save){
	var databaseTemp = {
		novels : {},
		products : {},
		news : {}
	};
	if(localStorage.getItem("_DATABASE")){
		databaseTemp = JSON.parse(localStorage.getItem("_DATABASE"));
	}
	/*check info exist*/
	var info = JSON.parse(fM.read(String.format('{0}/{1}/info.js',type,save)).data);
	//case: first time
	if(!databaseTemp[type][save]){
		info['index'] = JSON.parse(fM.read(String.format('{0}/{1}/index.js',type,save)).data);
		databaseTemp[type][save] = info;
	}
	//case second time
	if(databaseTemp[type][save]["meta"].lastUpdate != info.meta.lastUpdate){
		databaseTemp[type][save]["meta"] = info.meta;
		databaseTemp[type][save]["index"] = JSON.parse(fM.read(String.format('{0}/{1}/index.js',type,save)).data);
	}
	return databaseTemp;
}
function writeFile(data,fPath){
	if(!sessionStorage.getItem('@SESSION')){
		fM.login();
	}
	var result = JSON.parse(sessionStorage.getItem('@SESSION'));
	fM.write(result.data.session_id, JSON.stringify(data), fPath);
}