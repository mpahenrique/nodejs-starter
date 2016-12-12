'use strict';

function use(method, module){

    /***************** Dependencies *****************/
    const _    = require('underscore')
    ,     path = require('path')
    ,     runIfFunction = (fn)=>{
          typeof fn === 'function' && fn(this);
          return this;
    };
    /************************************************/
    
    if(!method) return;

    if(typeof method === 'string')
        if (module) {
            this[method] = module;
            return this;
        } else {
            return runIfFunction(require(path.join(__dirname, method)));
        }

    if(typeof method === 'function') return runIfFunction(method);

    _.extend(this, method);


    return this;
}

module.exports = use;