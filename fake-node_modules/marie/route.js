function Route (uri, middleware, fn) {

    // if(fn) {
    //     var temMiddle = function() {
            
    //         fn(middleware());
    //     }
    // }

    if(!uri) return this;

    /***************** Dependencies *****************/
    const _ = this.util._;
    /************************************************/

    this.routes = this.routes || {};

    if(typeof uri === 'object') _.extend(this.routes, uri);
    else this.routes[uri] = fn;

    return this;
}

module.exports = Route;