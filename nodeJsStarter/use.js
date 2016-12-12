'use strict';

function use(method, module){

    /***************** Dependencies *****************/
    const _ = require('underscore');
    /************************************************/
    
    if(!method && !module) return;

    if(typeof method === 'string')
        return this[method] = module;

    _.extend(this, method);

    return this;
}

module.exports = use;