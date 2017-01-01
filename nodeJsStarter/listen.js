'use strict';

function listen(port, method){

    let coreModule = this[this.coreModule];

    coreModule.listen ? coreModule.listen(port || 3000) : coreModule[method](port || 3000) &&
    console.info("Server running in http://localhost:" + (port || 3000));
    
    return this;

}

module.exports = listen;