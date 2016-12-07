'use strict';

/***************** Dependencies *****************/
    const _ = require('underscore');
/************************************************/

class nodejsStarter {};

nodejsStarter.prototype.init = function(){
    console.info('Application init', nodejsStarter);
    require(path.join(__dirname, config.modules.util))(nodejsStarter);
    return nodejsStarter;
}

nodejsStarter.prototype.util.load = function(modules){ // Will receive an object, path or array of paths/objects
    if(!modules || typeof modules !== 'object') return;

    for(let module in modules){
        this[module] = require(path.join(__dirname, module));
    }
}

nodejsStarter.prototype.util.use = function(method, module){
    if(!method && !module) return;

    if(typeof method === 'string')
        return this.prototype[method] = module;

    _.extend(this.prototype, method);
}