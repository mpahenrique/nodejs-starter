'use strict';

function use(method, module, isCoreModule){

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
            if(isCoreModule) this.coreModule = method;
            this[method] = module;
            return this;
        } else {
            return runIfFunction(require( method.match(/\//) ? method : path.join(__dirname, method)));
        }

    if(typeof method === 'function') return runIfFunction(method);

    _.extend(this, method); // method = Object

    return this;
}

module.exports = use;