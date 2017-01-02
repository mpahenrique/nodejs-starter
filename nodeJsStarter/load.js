'use strict';

function load (modules) {  // Will receive an object, path or array of paths/objects

    if(!modules) throw new Error('A module is required');

    this.modules = this.modules || {};

    /***************** Dependencies *****************/
    const path      = require('path')
    ,     recursive = require('recursivejs')
    ,     _         = require('underscore');
    /************************************************/

    for(let module in modules){
        this.modules[module] = {};
        _.extend(this.modules[module], recursive.require(path.resolve(__dirname, '../' + modules[module])));
    }

    return this;
}

module.exports = load;