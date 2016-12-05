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

    // inicio testes
    var a = new Marie();
        a
        .use(['./testes/logs', function(req, res){
            req.fulanoDeTal();
            req.ciclano = 'maoe';
        }])
        .use(function(req){
            console.info(7777777, req.ciclano);
        })
        .route('/index.html', (req, res)=>{console.info("ROTA DE", "index.html");})
        .listen(3000);
    // fim testes

	return new Marie;

}	

module.exports = index;