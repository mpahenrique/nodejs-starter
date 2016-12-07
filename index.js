'use strict';

const config  = require('./package.json').application
,     path    = require('path')
,     modules = config.paths;

class nodejsStarter {};

nodejsStarter.prototype.loader = function(modules){
    if(!modules || typeof modules !== 'object') return;

    for(let module in modules){
        this[module] = require(path.join(__dirname, module));
    }
}

const nodejsStarter = new nodejsStarter()
,     myApp         = nodejsStarter.init();
    
    myApp.
        // .use(express()) // default "framework", or
        .use('express', express())
        .loader(modules)
        .listen(3000);


        myApp.currentFramework