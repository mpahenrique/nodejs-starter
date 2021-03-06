function get(req, res, app){
    console.info('Controllers :: Sample :: Index > GET');

    var data = {
        name : 'Controllers :: Sample :: Index > GET'
    };

    // do something with data using interactions 
    // between this controller and its corresponding model. 

    data.processedData = app.modules.models.sample.index.doSomething({
        a : req.query.par1 || 'Parameter par1 not found! ',
        b : req.query.par2 || 'Parameter par2 not found! '
    });

    // After all, send data do view:
    app.modules.views.sample.index(req, res, data, app);

}

module.exports = get;