function init () {

	/***************** Dependencies *****************/
	const fs     = require('fs')
	,	  path   = require('path')
	,	  routes = fs.readdirSync(__dirname);
    /************************************************/

	routes.forEach(function (route) {
		if(route == 'index.js') return;
	    require(path.join(__dirname, route)).init();
	});
}

module.exports = {
	init : init
	// config : config // maybe in the future
}