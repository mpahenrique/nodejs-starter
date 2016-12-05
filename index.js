const applicationData = require('./package.json')
,     marie           = require('./modules/marie')
,     app             = marie();

/*************************
*	Iniciando módulos    */

app
	// .load(path.join(__dirname, applicationData.path.routes     ))
	// .load(path.join(__dirname, applicationData.path.middlewares))
	// .load(path.join(__dirname, applicationData.path.models     ))
	// .load(path.join(__dirname, applicationData.path.views      ))
	// .load(path.join(__dirname, applicationData.path.controllers))
    .route('/index.html', ()=>{
        console.info("ROTA DE", "index.html", this);
    })
    .route('/oi.html', ()=>{
        console.info("ROTA DE", "oi.html", this);
    })
	.listen(applicationData.port);


// app.init();
// require('./routes').init();

// http.createServer().listen();