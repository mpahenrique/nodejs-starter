function deletE(req, res, app){
    console.info('Controllers :: Sample :: Index > DELETE');

    var data = {
        name : 'Controllers :: Sample :: Index > DELETE'
    };

    // do something with data using interactions 
    // between this controller and its corresponding model. 
    // After all, send data do view:

    app.modules.views.sample.index(req, res, data, app);
}

module.exports = deletE;