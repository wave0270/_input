/**single inout template********************************/
var TEMP_INPUT_TEXT = (function () {/*
	<label>{{this.showName.value}}</label>
	<input id="{{meta.type}}-{{this.alias}}" type="{{this.type}}" placeholder="{{this.showName.value}}" class="block full-width field-light">
*/}).toString();
TEMP_INPUT_TEXT = TEMP_INPUT_TEXT.substring( 15, TEMP_INPUT_TEXT.length - 3);

var TEMP_INPUT_NUMBER = (function () {/*
	<label>{{this.showName.value}}</label><label class="right"> {{this.exchangeRate.value}}</label>
	<input id="{{meta.type}}-{{this.alias}}" type="{{this.type}}" placeholder="{{this.showName.value}}" class="block full-width field-light">
*/}).toString();
TEMP_INPUT_NUMBER = TEMP_INPUT_NUMBER.substring( 15, TEMP_INPUT_NUMBER.length - 3);

var TEMP_INPUT_BROWSE = (function () {/*
	<label>{{this.showName.value}}</label>
	<input id="{{meta.type}}-{{this.alias}}" type="{{this.type}}" placeholder="{{this.showName.value}}" class="block full-width field-light"/>
	
	<button id="button" class="full-width ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button"><span class="ui-button-text">Browse</span></button>
	
*/}).toString();
TEMP_INPUT_BROWSE = TEMP_INPUT_BROWSE.substring( 15, TEMP_INPUT_BROWSE.length - 3);

var TEMP_INPUT_ARRAY = (function () {/*
	<label >{{this.showName.value}}</label>
	<select class="block full-width field-light">
	  <option value="1">One</option>
	  <option value="2">Two</option>
	  <option value="3">Three</option>
	</select>
*/}).toString();
TEMP_INPUT_ARRAY = TEMP_INPUT_ARRAY.substring( 15, TEMP_INPUT_ARRAY.length - 3);

var TEMP_INPUT_TEXTAREA = (function () {/*
	<label>{{this.showName.value}}</label>
	<textarea id="{{meta.type}}-{{this.alias}}" rows="3" placeholder="{{this.showName.value}}" class="block full-width field-light"></textarea>
*/}).toString();
TEMP_INPUT_TEXTAREA = TEMP_INPUT_TEXTAREA.substring( 15, TEMP_INPUT_TEXTAREA.length - 3);

var TEMP_INPUT_HTML = (function () {/*
		<label>{{this.showName.value}}</label>
		<textarea id="{{meta.type}}-{{this.alias}}" name="text" class="ckeditor form-control" rows="3" placeholder="{{this.showName.value}}"></textarea>
	
*/}).toString();
TEMP_INPUT_HTML = TEMP_INPUT_HTML.substring( 15, TEMP_INPUT_HTML.length - 3);
/**single show template********************************/
var TEMP_SHOW_BUTTON = (function () {/*
	<div class='template'>
		<button id="{{meta.type}}-{{this.alias}}" type="button" class="btn {{this.color}}" onclick="{{this.doFunction}}"><span aria-hidden="true" class="glyphicon {{this.icon}}"></span>   {{this.showName.value}}</button>
	</div>
	
*/}).toString();
TEMP_SHOW_BUTTON = TEMP_SHOW_BUTTON.substring( 15, TEMP_SHOW_BUTTON.length - 3);

var TEMP_SHOW_ARRAY = (function () {/*
	<div class='template'>
		<div class="btn-group">
		  <button type="button" class="btn btn-danger"><span aria-hidden="true" class="glyphicon {{this.icon}}"></span>   {{this.showName.value}}</button>
		  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
		    <span class="caret"></span>
		    <span class="sr-only">Toggle Dropdown</span>
		  </button>
		  <ul class="dropdown-menu" role="menu">
		    <li><a href="#">Viet Name</a></li>
		    <li class="divider"></li>
		    <li><a href="#">English</a></li>
		  </ul>
		</div>
	</div>
	
*/}).toString();
TEMP_SHOW_ARRAY = TEMP_SHOW_ARRAY.substring( 15, TEMP_SHOW_ARRAY.length - 3);

/**combile template********************************/


/**view Data Template********************************/
var TEMP_VIEW_PRODUCT_LIST = (function () {/*
	{{#data}}
		<a class='product-'>{{this.title}}</a>
		
	{{/data}}
*/}).toString();
TEMP_VIEW_PRODUCT_LIST = TEMP_VIEW_PRODUCT_LIST.substring( 15, TEMP_VIEW_PRODUCT_LIST.length - 3);

var TEMP_VIEW_NOVEL_LIST = (function () {/*
	{{#data}}
		<div class="input-group" style="margin:2px 10px;">
			<span class="input-group-addon"><span class="glyphicon glyphicon-book" aria-hidden="true"></span></span>
			<a onclick="openDetail({{this.chapter}})" class="form-control">{{this.chapter}} : {{this.title}}</a>
		</div>
	{{/data}}
*/}).toString();
TEMP_VIEW_NOVEL_LIST = TEMP_VIEW_NOVEL_LIST.substring( 15, TEMP_VIEW_NOVEL_LIST.length - 3);

var TEMP_PAGINATION = (function () {/*
	<nav>
	  <ul class="pager">
	  	{{#if (previous !== null)}}
	  		<li><a onclick="{{fName}}({{previous}},'{{type}}','{{name}}')" >Previous</a></li>
	  	{{/if}}
	  	{{#if (next !== null)}}
	  		<li><a onclick="{{fName}}({{next}},'{{type}}','{{name}}')" >Next</a></li>
	  	{{/if}}    
	  </ul>
	</nav>
*/}).toString();
TEMP_PAGINATION = TEMP_PAGINATION.substring( 15, TEMP_PAGINATION.length - 3);

var TEMP_VIEW_NOVEL_DETAIL = (function () {/*
	<div style="margin:10px;">
		<h1 style="text-align:center;">{{name}}</h1>
		<h2 class="detail_title" style="text-align:center;">{{title}}</h2>
		<div class="detail_content">{{{content}}}</div>
	</div>
*/}).toString();
TEMP_VIEW_NOVEL_DETAIL = TEMP_VIEW_NOVEL_DETAIL.substring( 15, TEMP_VIEW_NOVEL_DETAIL.length - 3);
/*script*/






