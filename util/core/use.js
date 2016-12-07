'use strict';

function use(){

    console.info("USE", this);

    // /***************** Dependencies *****************/
    // const _ = require('underscore');
    // /************************************************/

    // this.prototype.util.use = function(method, module){
    //     if(!method && !module) return;

    //     if(typeof method === 'string')
    //         return this.prototype[method] = module;

    //     _.extend(this.prototype, method);
    // }

    return this;
}

module.exports = use;