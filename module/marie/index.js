function index () {

	/***************** Dependencies *****************/
	const  path    = require('path')
	,      methods = require(path.join(__dirname, 'package')).application.methods;
    /************************************************/
	
	class Marie {}

	for (let i = 0, lgt = methods.length; i < lgt; i++) {
		let method = methods[i];
		Marie.prototype[method] = require(path.join(__dirname, method));		
    }

    // testes
    var a = new Marie();
        a
        .route('/index.html', ()=>{console.info("ROTA DE", "index.html");})
        .listen(3000);
    // testes

    console.info(Marie.prototype);

	return new Marie;

}	

module.exports = index;