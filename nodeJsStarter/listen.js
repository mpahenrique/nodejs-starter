'use strict';

function listen(port, method){

    let currentFramework = this[this.currentFramework]
    ,   listenFn = currentFramework.listen || currentFramework[method];

    listenFn(port || 3000) && console.info("Server running in http://localhost:" + (port || 3000));

    return this;

}

module.exports = listen;