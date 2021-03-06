function deletE(req, res, app){
    console.info('Controllers :: Sample :: Index > DELETE');

    var data = {
        name : 'Controllers :: Sample :: Index > DELETE'
    };

    // do something with data using interactions 
    // between this controller and its corresponding model. 

    data.processedData = app.modules.models.sample.index.doSomething({
        a : req.query.par1,
        b : req.query.par2
    });

    // After all, send data do view:
    app.modules.views.sample.index(req, res, data, app);

}

module.exports = deletE;