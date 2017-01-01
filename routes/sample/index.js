function index (app) {
    console.info('Routes :: Sample :: Index');

    const router     = require('express').Router()
    ,     coreModule = app[app.coreModule];
    
    /** Methods configuration with current framework **/
    coreModule.use('/sample', resolve(app.modules.controllers.sample.index, app));
    
    function resolve(fn, app){
        return fn(router, app);
    }
        
}


module.exports = index;