'use strict';

function load (modules) {  // Will receive an object, path or array of paths/objects

    if(!modules) throw new Error('A module is required');

    this.modules = this.modules || {};

    /***************** Dependencies *****************/
    const path      = require('path')
    ,     consign   = require('consign')();
    /************************************************/

    for(let module in modules){
        consign
            .include(modules[module]);
    }

    consign.into(this.modules);

}

module.exports = load;  