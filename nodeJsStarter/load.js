'use strict';

function load (modules) {  // Will receive an object, path or array of paths/objects

    console.info("LOAD", this);

    if(!modules) return;

    for(let module in modules){
        this.prototype[module] = require(path.join(__dirname, module));
    }

    return this;
}

module.exports = load;