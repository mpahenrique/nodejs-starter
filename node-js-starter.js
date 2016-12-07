'use strict';

function init(){

    const config  = require('./package.json').application
    ,     path    = require('path')
    ,     modules = config.paths;

    nodejsStarter.prototype.init = require(path.join(__dirname, config.modules.util));
    
    return new nodejsStarter();
}

module.exports = init;