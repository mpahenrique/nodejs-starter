function load(){

    this.prototype.util.load = function(modules){ // Will receive an object, path or array of paths/objects
        if(!modules || typeof modules !== 'object') return;

        for(let module in modules){
            this[module] = require(path.join(__dirname, module));
        }

        return {};
    }
}

module.exports = load;